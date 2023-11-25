import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {AiFillCloseCircle} from 'react-icons/ai';
import hospitalImg from '../../Assets/Images/amico.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {useNavigate} from 'react-router-dom';
import './BookAppoinment.css';

const BookAppoinment = () => {
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    whatsapp_number: '',
    contact_number: '',
    // doctor_name: '',
    // symptoms: '',
    // date: '',
    // time: '',
  });

  const navigate = useNavigate ();

  const handleInputChange = e => {
    setFormData ({...formData, [e.target.name]: e.target.value});
  };

  const handleFormSubmit = () => {
    // Log the form data to the console
    console.log ('Form Data:', formData);

    navigate ('/choosedoctor');
  };

  
  return (
    <div>
        <Header />

      {/* Book appointment section */}
      <section>
        <Container>
          <div className="book-appoinment-container">
            <Row>
              <Col className="booking-right-img" sm={12} md={6}>
                <div className="building-img">
                  <img src={hospitalImg} alt="" />
                  <h5>
                    Consult with our expert surgeon for more than 50+ diseases
                  </h5>
                </div>
              </Col>
              <Col className="booking-inputs" sm={12} md={6} style={{marginLeft:"40%"}}>
                <div className="booking-close-btn">
                  <AiFillCloseCircle />
                </div>
                <div className="heading-consulting">
                  <h5>Book Your <span>FREE</span> Consultation Now</h5>
                </div>
                <div className="main-inputs">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Patient Name"
                    onChange={handleInputChange}
                  /><br/>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Email"
                    onChange={handleInputChange}
                  /><br/>
                  <input
                    type="tel"
                    name="whatsapp_number"
                    id="whatsapp_number"
                    required
                    placeholder="Whatsapp Number"
                    onChange={handleInputChange}
                  /><br/>
                  <input
                    type="tel"
                    required
                    name="contact_number"
                    id="contact_number"
                    placeholder="Contact Number"
                    onChange={handleInputChange}
                  /><br/>
                </div>
                <div className="other-inputs">
                  {/* <input
                    type="text"
                    name="doctor_name"
                    id="doctor_name"
                    placeholder="Doctor Name"
                    required
                    className="doctor_name"
                    onChange={handleInputChange}
                  />
                  <Col>
                    <textarea
                      rows="6"
                      cols="40"
                      placeholder="Mention The Symptoms here"
                      required
                      className="text_field"
                      onChange={handleInputChange}
                    />
                  </Col>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={handleInputChange}
                  />
                  <input
                    type="time"
                    name="time"
                    id="time"
                    onChange={handleInputChange}
                  /> */}
                </div>
      <div style={{ textAlign: 'center', marginTop: '20px',marginLeft:"-60%" }} className="book-now">
        <button
          style={{
            backgroundColor: 'red',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
                      cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/doctors');
          }}
        >
          Next
        </button>
      </div>

              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default BookAppoinment;
