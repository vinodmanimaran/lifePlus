import React, { useState,useEffect} from 'react';
import './Orders.css';
import { Card } from 'react-bootstrap';
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillCalendar,
  AiOutlineClockCircle,
  AiOutlineTags,
  AiOutlineDelete
} from 'react-icons/ai';
import {GiTestTubes,GiMedicinePills} from 'react-icons/gi';

import Product from '../../Assets/about_assets/slide1.webp';
import Lab from '../../Assets/about_assets/labtest.jfif';
import Docter from '../../Assets/Images/Female-Doctor-PNG-File.png';
import {BsPerson, BsClock, BsCalendar} from 'react-icons/bs';


const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  
  return (
    <div className="quantity-selector">
      <button className="quantity-btn" onClick={onDecrease}>
        <AiOutlineDelete/>
      </button>
      <span className="quantity-value">{quantity}</span>
      <button className="quantity-btn" onClick={onIncrease}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};



const Orders = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [cardHeight, setCardHeight] = useState('auto');
  const [labQuantity, setLabQuantity] = useState(1);
  const [medQuantity, setMedQuantity] = useState(1);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
const tryCatchWrapper = (fn, errorLabel) => {
  return () => {
    try {
      fn ();
    } catch (error) {
      console.error (error.message);
      throw new Error (`Error in ${errorLabel}`);
    }
  };
};

  const handleLabIncrease = tryCatchWrapper(() => {
    setLabQuantity((prevQuantity) => prevQuantity + 1);
  }, 'handleLabIncrease');

  const handleLabDecrease = tryCatchWrapper(() => {
    setLabQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  }, 'handleLabDecrease');

  const handleMedIncrease = tryCatchWrapper(() => {
    setMedQuantity((prevQuantity) => prevQuantity + 1);
  }, 'handleMedIncrease');

  const handleMedDecrease = tryCatchWrapper(() => {
    setMedQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  }, 'handleMedDecrease');

  
  useEffect(
    () => {
      const card = document.getElementById(`lab-card`);
      if (card) {
        setCardHeight(isAccordionOpen ? `${card.scrollHeight}px` : 'auto');
      }
    },
    [isAccordionOpen]
  );

  return (
    <div className="orders">
      <h4 className="orders_title"> Your Orders</h4>
      <Card className="consultation-card" >
        {/* <h6 className="order_type_name ">Consultation</h6> */}
        <div className="order_details">
          <div className="patient_details">
            <div className="patient_name">
              <BsPerson className="icon" />
              <p className="patient_name_type">Name of the Patient:</p>
              <p className="patient_name_value">Ajay</p>

            </div>
            <div className="patient_time">
              <AiOutlineClockCircle className="icon" />
              <p className="patient_time_title">Time of The Appointment:</p>
              <p className="patient_time">
                10.30 <span className="session">AM</span>
              </p>

            </div>
            <div className="patient_date">
              <BsCalendar className="icon" />
              <p className="patient_date_title">Date of the Appointment:</p>
              <p className="patient_date_value">12th October</p>

            </div>
          </div>
        </div>

        <img src={Docter} alt="doctor" className="order_img consultation_img" />
        <h4 className="doctor_name"> Dr.Madhu</h4>

        <button className="pay_now">10,000</button>
      </Card>

      <Card className="lab-test-card" id="lab-card">
        {/* <h6 className="order_type_name lab_type">Lab test</h6> */}
        <div className="lab-test_order_details">
          <img src={Lab} alt="test" className="order_img lab_img" />
          <div className="quantity-container">
            <p className="quantity-title">Quantity:</p>
            <QuantitySelector
              quantity={1} // Set the initial quantity
              onIncrease={handleLabIncrease}
              onDecrease={handleLabDecrease}
            />
          </div>

          <button className="lab_pay_now">12,000</button>
          <div className="test_input">    <div className="lab-test_name">
            <p className="lab_test_field_name">
              <GiTestTubes className="icon" /> Name of the Test:
            </p>
            <p className="lab-name_value">Blood Test</p>
          </div>
            <div className="lab-test_description">
              <p className="lab_test_field_description">
                <GiTestTubes className="icon" /> Description of the Test
                {isAccordionOpen
                  ? <AiOutlineMinus onClick={toggleAccordion} />
                  : <AiOutlinePlus onClick={toggleAccordion} />}
              </p>
              {isAccordionOpen &&
                <p className="lab_test_field_description_value">
                  Our comprehensive blood test provides valuable insights into your overall health.
                  It assesses various markers, including cholesterol levels, blood cell counts, and
                  organ function. This test is essential for routine health check-ups and can help
                  identify potential health issues early on.
                </p>}
            </div>

            <div className="lab-test-date">
              <p className="lab_test_field_date">
                <AiFillCalendar className="icon" /> Date of the Test:
              </p>
              <p className="lab_test_date_value">16th February</p>
            </div>
            <div className="lab-test-time">
              <p className="lab_test_field_date">
                <AiOutlineClockCircle className="icon" /> Time of the Test:
              </p>
              <p className="lab_test_time_value">3 <span className="session">PM</span></p>
            </div>
            <div className="lab-test-tags">
              <p className="lab_test_field_tag">
                <AiOutlineTags className="icon" /> Tags:
              </p>
              <p className="lab_tags">In house</p>
            </div>
          </div>

        </div>
      </Card>


      <Card className="pharamacy-card" style={{ height: cardHeight }}>
        {/* <h6 className="order_type_name med_type">Pharmacy</h6> */}
        <img src={Product} alt="test" className="order_img med_img" />
        <div className="quantity-container">
          <p className="quantity-title">Quantity:</p>
          <QuantitySelector
            quantity={1} // Set the initial quantity
            onIncrease={handleMedIncrease}
            onDecrease={handleMedDecrease}
          />
        </div>

        <button className="med_pay_now">500</button>
        <div className="test_input">
          <div className="lab-test_name">
            <p className="lab_test_field_name" style={{ whiteSpace: "nowrap" }}>
              <GiMedicinePills className="icon" />Product Name:
            </p>
            <p className="lab-name_value">Violini Medicine</p>
          </div>
          <div className="lab-test_description">
            <p className="lab_test_field_description">
              <GiMedicinePills className="icon" />Product Description:
              {isAccordionOpen
                ? <AiOutlineMinus onClick={toggleAccordion} />
                : <AiOutlinePlus onClick={toggleAccordion} />}
            </p>
            {isAccordionOpen &&
              <p className="lab_test_field_description_value">
                Violini Medicine is a premium pharmaceutical product that addresses various health issues.
                It is formulated to provide effective relief and improve overall well-being.
              </p>}
          </div>

          <div className="lab-test-date">
            <p className="lab_test_field_date" style={{ whiteSpace: "nowrap" }}>
              <AiFillCalendar className="icon" />Delivery Date:
            </p>
            <p className="lab_test_date_value">30th September</p>
          </div>
          <div className="lab-test-time">
            <p className="lab_test_field_date">
              <AiOutlineClockCircle className="icon" /> Time of Delivery:
            </p>
            <p className="lab_test_time_value">2 <span className="session">PM</span></p>
          </div>
          <div className="lab-test-tags">
            <p className="lab_test_field_tag">
              <AiOutlineTags className="icon" /> Tags:
            </p>
            <p className="lab_tags">In Hospital</p>
          </div>
        </div>

      </Card>
    </div>
  );
};

export default Orders;
