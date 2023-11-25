import React, {useState} from 'react';
import Slider from 'react-slick';
import {Card} from 'react-bootstrap';
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs';
import TimeSlotRow from '../Scheduler/TimeSlot.jsx';

import './LabSchedule.css';

const formatDate = date => {
  const day = date.getDate ();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getMonth ()];

  return `${day} ${month}`;
};

const DateSlider = ({dateSlots, selectedDate, onDateSelect}) => {
  const [sliderIndex, setSliderIndex] = useState (0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: <BsChevronLeft />,
    nextArrow: <BsChevronRight />,

    afterChange: index => {
      setSliderIndex (index);
      onDateSelect (dateSlots[index].date);
    },
  };

  const handlePrev = () => {
    setSliderIndex (sliderIndex - 1);
  };

  const handleNext = () => {
    setSliderIndex (sliderIndex + 1);
  };

  return (
    <div className="date-slider-container">
      <Slider {...settings} initialSlide={sliderIndex} className="date-slider">
        {dateSlots.map (date => (
          <div style={{fontSize:"10px"}}
            key={date.date}
            className={`date-item ${selectedDate === date.date ? 'selected' : ''}`}
          >
            <h2 className="date-label">{date.label}</h2>
            {/* <p className="slots-count">Available Slots: {date.slots.length}</p> */}
          </div>
        ))}
      </Slider>
      <div className="arrow-icons">
        <BsChevronLeft
          onClick={handlePrev}
          className="arrow-icon"
        />
        <BsChevronRight
          onClick={handleNext}
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

const LabScheduler = ({onClose}) => {
  const [selectedAppointment, setSelectedAppointment] = useState (null);
  const [selectedDate, setSelectedDate] = useState (null);

  const handleSlotSelect = time => {
    setSelectedAppointment ({date: selectedDate, time});
  };

  const closePopup = () => {
    onClose (); // Call the onClose function passed from the parent
  };

  const timeSlots = Array.from ({length: 22}, (_, slotIndex) => {
    const hour = Math.floor (slotIndex / 2) + 9;
    const minutes = slotIndex % 2 * 30;

    const formattedHour = hour % 12 || 12;
    const amPm = hour < 12 ? 'AM' : 'PM';

    return `${formattedHour}:${minutes === 0 ? '00' : minutes} ${amPm}`;
  });

  const sortedTimeSlots = timeSlots.sort ((time1, time2) => {
    const [hour1, minutes1, period1] = time1
      .match (/(\d+):(\d+) (\w+)/)
      .slice (1);
    const [hour2, minutes2, period2] = time2
      .match (/(\d+):(\d+) (\w+)/)
      .slice (1);

    const time1In24Hr =
      (period1 === 'PM' ? +hour1 + 12 : +hour1) * 60 + +minutes1;
    const time2In24Hr =
      (period2 === 'PM' ? +hour2 + 12 : +hour2) * 60 + +minutes2;

    return time1In24Hr - time2In24Hr;
  });

  const dateSlots = Array.from ({length: 30}, (_, index) => {
    const currentDate = new Date ();
    currentDate.setDate (currentDate.getDate () + index);

    const formattedDate = currentDate.toISOString ().split ('T')[0];
    const label = index === 0
      ? 'Today'
      : index === 1 ? 'Tomorrow' : formatDate (currentDate);

    return {
      date: formattedDate,
      label,
      slots: sortedTimeSlots,
    };
  });

  return (
    <div className="scheduler-container">
      <Card className="popup-container" style={{width:"630px",height:"390px"}}>
        <span className="close-btn" onClick={closePopup}>&times;</span>
        <Card.Body>
          <DateSlider
            dateSlots={dateSlots}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
<button className="delivery_btn">
  IN hospital/home delivery
</button>

          {selectedDate &&
            <div className="selected-date-container">
              <TimeSlotRow
                slots={
                  dateSlots.find (date => date.date === selectedDate).slots
                }
                onSlotSelect={handleSlotSelect}
                selectedDate={selectedDate}
              />
            </div>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default LabScheduler;
