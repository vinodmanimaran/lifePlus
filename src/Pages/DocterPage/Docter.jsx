import React from 'react';
import './Docter.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
 
import { FaUserDoctor } from 'react-icons/fa6';
import { BsBuildingAdd, BsSearchHeart } from 'react-icons/bs';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiFilterAlt } from 'react-icons/bi';
import bannerImage from '../../Assets/Images/Web-Banner-1-scaled.jpg';
import DoctorDetails from './DoctorDetails.jsx';

const Docter = () => {
  return (
    <div className='main main_doctor_page'>
  <Header />;

      {/* Availability Search */}
      <section>
        <Container>
          <Row>
            <Col className='availability'>
              <Row>
                <Col sm={12} md={5}>
                  <div className='location'>
                    <span>
                      <BsBuildingAdd />
                    </span>
                    <input type='text' placeholder='Department' />
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className='dr-name-search'>
                    <span>
                      <FaUserDoctor />
                    </span>
                    <input type='text' placeholder='Docter name' />
                  </div>
                </Col>
                <Col md={2}>
                  <div className='dr-search-btn'>
                    <button>
                      <span>
                        <BsSearchHeart />
                      </span>
                      {'  '}
                      Search
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter section */}
      <section>
        <Container fluid>
          <Row>
            <Col className='filter-conatiner'>
              <Container>
                <Row>
                  <Col sm={12} md={6} className='filter-content'>
                    <div className='filter-items'>
                      <div className='filter-dropdown'>
                        <NavDropdown
                          id='nav-dropdown-dark-example'
                          title='Department'
                        >
                          <NavDropdown.Item href='#action/3.1'>
                            Action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.2'>
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.3'>
                            Something
                          </NavDropdown.Item>
                        </NavDropdown>
                      </div>
                      <div className='filter-dropdown'>
                        <NavDropdown
                          id='nav-dropdown-dark-example'
                          title='Fees'
                        >
                          <NavDropdown.Item href='#action/3.1'>
                            Action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.2'>
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.3'>
                            Something
                          </NavDropdown.Item>
                        </NavDropdown>
                      </div>
                      <div className='filter-dropdown'>
                        <NavDropdown
                          id='nav-dropdown-dark-example'
                          title='Experiance'
                        >
                          <NavDropdown.Item href='#action/3.1'>
                            Action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.2'>
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.3'>
                            Something
                          </NavDropdown.Item>
                        </NavDropdown>
                      </div>
                      <div className='filter-dropdown'>
                        <NavDropdown
                          id='nav-dropdown-dark-example'
                          title='Availability'
                        >
                          <NavDropdown.Item href='#action/3.1'>
                            Action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.2'>
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.3'>
                            Something
                          </NavDropdown.Item>
                        </NavDropdown>
                      </div>
                    </div>
                  </Col>
                  <Col className='filter-name' sm={12} md={6}>
                    <div>
                      <h6>
                        <span>
                          <BiFilterAlt fontSize={23} />
                        </span>{' '}
                        Filter
                      </h6>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Docter Display */}
      <section>
        <Container fluid>
          <Row>
            <Col sm={12} md={8}>
              <div className='main-box'>
                <div className='search-result'>
                  <h4>3963 doctors available in Bangalore</h4>
                  <p>
                    Book appointments with minimum wait-time & verified doctor
                    details
                  </p>
                </div>
                <div className='line'></div>
                <div className="details">
                  <DoctorDetails/>
                <DoctorDetails/>
                <DoctorDetails/>
                <DoctorDetails/>
                </div>
                
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className='side-box'>
                <div className='offer-div'>
                  <img style={{width:"350px",height:"180px"}} src={bannerImage} alt='' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Docter;