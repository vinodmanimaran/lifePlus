import React from 'react';
import './Facilities.css';
import {Card, Row, Col, Container} from 'react-bootstrap';
import {
  FaHospital,
  FaUserMd,
  FaMoneyBillAlt,
  FaUsers,
  FaDollarSign,
  FaStethoscope,
  FaHeartbeat, // Newly added icons
  FaHandsHelping, // Newly added icons
  FaCommentDollar,
  FaHands, // Newly added icons
  FaUserNurse, // Newly added icons
} from 'react-icons/fa';


const Facilities = () => {
  const values = [
    {
      valueName: '24/7 Doctor',
      icon: <FaUserMd />,
    },
    {
      valueName: 'Transparent Pricing',
      icon: <FaMoneyBillAlt />,
    },
    {
      valueName: 'Skilled Team',
      icon: <FaUsers />,
    },
    {
      valueName: 'Affordability',
      icon: <FaDollarSign />,
    },
    {
      valueName: 'Quality Care',
      icon: <FaUserNurse />,
    },
    {
      valueName: 'Service',
      icon: <FaStethoscope />,
    },
  ];
const itemStyle = {
  textAlign: 'center',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  width: '200px',
  height: '200px',
  marginLeft:"20px"
};

  return (
    <div className="facility_container">
      <div className="our_values">
        <Container>
          <Row>
            <Col>
              <h1 className="our_values_heading">
                Why Choose LifePlus Hospitals?
              </h1>
              <p className="our_values_content" style={{color:"black"}}>
                At LifePlus Hospitals, we are committed to providing top-quality healthcare services with a patient-centric approach. Our team of dedicated and experienced medical professionals ensures that you receive the best possible care. We take pride in our affordable and transparent pricing, making healthcare accessible to all. With a legacy of 21 years of excellence, our hospital has grown organically, thanks to our satisfied patients who recommend us. We value your health and well-being and are dedicated to maintaining high standards of medical care. Choose LifePlus Hospitals for trustworthy and affordable healthcare.
              </p>
            </Col>
          </Row>
          <Row>
            {values.map ((value, index) => (
              <Col key={index} className="value-item" >
                <div className="value" >
                  <Card className="facility_card" style={itemStyle}>
                    <Card.Body>
                      <span className="value_icon" style={{width: '100px'}}>
                        {value.icon}
                      </span>
                      <p className="value_name">{value.valueName}</p>

                    </Card.Body>
                  </Card>

                </div>
              </Col>
            ))}
          </Row>

        </Container>
      </div>
    </div>
  );
};

export default Facilities;
