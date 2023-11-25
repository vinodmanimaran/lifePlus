import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaMoon, FaSun, FaClock } from 'react-icons/fa';

import {useNavigate} from 'react-router-dom'
const TimeSlot = ({ time, onClick, selected }) => {
  const navigate=useNavigate()
  const handleTimeSlotClick = () => {
    onClick(time);
  };

  return (
    <Button
      style={{ width: '50px',height:"45px", borderRadius: '15px', fontSize: '10px' }}
      variant={selected ? 'primary' : 'outline-primary'}
      className="time-slot-btn"
      onClick={handleTimeSlotClick}
    >
      {time}
    </Button>
  );
};

const TimeSlotRow = ({ slots, onSlotSelect, selectedDate }) => {
  const navigate = useNavigate ();

  const [selectedTime, setSelectedTime] = useState(null);

  const handleSlotSelect = (date, time) => {
    onSlotSelect(date, time);
    setSelectedTime(time);
  };

  const morningSlots = slots
    .filter(time => time.includes('AM'))
    .sort((time1, time2) => {
      const [hour1, minutes1, period1] = time1.match(/(\d+):(\d+) (\w+)/).slice(1);
      const [hour2, minutes2, period2] = time2.match(/(\d+):(\d+) (\w+)/).slice(1);

      // Convert to 24-hour format for comparison
      const time1In24Hr = (period1 === 'PM' ? +hour1 + 12 : +hour1) * 60 + +minutes1;
      const time2In24Hr = (period2 === 'PM' ? +hour2 + 12 : +hour2) * 60 + +minutes2;

      return time1In24Hr - time2In24Hr;
    });

  const afternoonSlots = slots
    .filter(
      time =>
        time.includes('PM') &&
        !['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'].includes(time)
    )
    .sort((time1, time2) => {
      const [hour1, minutes1] = time1.match(/(\d+):(\d+)/).slice(1);
      const [hour2, minutes2] = time2.match(/(\d+):(\d+)/).slice(1);

      // Convert to 24-hour format for comparison
      const time1In24Hr = +hour1 * 60 + +minutes1;
      const time2In24Hr = +hour2 * 60 + +minutes2;

      return time1In24Hr - time2In24Hr;
    })
    .sort((time1, time2) => {
      // Handle special case for 12:00 PM and 12:30 PM to come first
      if (time1 === '12:00 PM') return -1;
      if (time1 === '12:30 PM' && time2 !== '12:00 PM') return -1;
      return 0;
    });

  const eveningSlots = slots
    .filter(
      time =>
        time.includes('PM') &&
        ['4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'].includes(time)
    )
    .sort((time1, time2) => {
      const [hour1, minutes1] = time1.match(/(\d+):(\d+)/).slice(1);
      const [hour2, minutes2] = time2.match(/(\d+):(\d+)/).slice(1);

      // Convert to 24-hour format for comparison
      const time1In24Hr = +hour1 * 60 + +minutes1;
      const time2In24Hr = +hour2 * 60 + +minutes2;

      return time1In24Hr - time2In24Hr;
    });

  return (
    <>
      <div className="morning">
        <Row className="time-slot-row">
          <Col className="time-slot-col">
            <h3 className="time_slot_morn"> Morning <FaSun /> </h3>
            {/* <hr className="divider" /> */}
          </Col>
        </Row>
        <Row className="time-slot-row time-slot-row_morning time-slot-row-btns">
          {morningSlots.map(time => (
            <Col key={time} className="time-slot-col">
              <TimeSlot time={time} onClick={() => handleSlotSelect(selectedDate, time)} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="afternoon">
        <Row className="time-slot-row">
          <Col className="time-slot-col">
            <h3 className="time_slot_afternoon">Afternoon <FaClock /></h3>
            {/* <hr className="divider" /> */}
          </Col>
        </Row>
        <Row className="time-slot-row " style={{ marginLeft: '40px' }}>
          {afternoonSlots.map(time => (
            <Col key={time} className="time-slot-col ">
              <TimeSlot time={time} onClick={() => handleSlotSelect(selectedDate, time)} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="evening">
        <Row className="time-slot-row">
          <Col className="time-slot-col" style={{marginLeft:"-25px"}}>
            <h3 className="time_slot_even">Evening <FaMoon /> </h3>
          </Col>
        </Row>
        <Row className="time-slot-row" style={{marginLeft:"10px"}}>
          {eveningSlots.map(time => (
            <Col key={time} className="time-slot-col time-evening">
              <TimeSlot time={time} onClick={() => handleSlotSelect(selectedDate, time)} />
            </Col>
          ))}
        </Row>
      </div>

      {/* <hr className="divider" /> */}
      {selectedTime && (
        <div>
          {/* <hr className="divider" /> */}
          <Button className="addcart"
            style={{ marginTop: '-95%',width:"90px",marginLeft:"80%", fontSize: '12px' }}
            variant="success"
            onClick={() => {
              navigate("/addtocart")
              console.log(`Add to Cart: ${selectedTime}`);
            }}
          >
            Add to Cart
          </Button>
        </div>
      )}
    </>
  );
};

export default TimeSlotRow;
