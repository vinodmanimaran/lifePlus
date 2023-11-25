import React, { useState } from 'react';
import './Treatment.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Category1 from '../../Assets/Images/Category1.png';
import Category2 from '../../Assets/Images/Category2.png';
import Category3 from '../../Assets/Images/Category3png.png';
import Category4 from '../../Assets/Images/Category4.png';
import Category5 from '../../Assets/Images/Category5.png';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import DrImg from '../../Assets/Images/Rectangle prifile.png';
import { AiFillStar } from 'react-icons/ai';
import { PiHandbagSimpleThin } from 'react-icons/pi';
import { MdArrowDropDown, MdLocationOn } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';
import shape2 from '../../Assets/Images/shape-dr-page-2.png';
import {Link} from 'react-router-dom'
import happyPetient from '../../Assets/Images/Happy-patient.png';
import expertDocter from '../../Assets/Images/Expert-docter.png';
import successfullSurgery from '../../Assets/Images/Successfull-surgery.png';
import drImage from '../../Assets/Images/Female-Doctor-PNG-File.png';
import reviewPicture from '../../Assets/Images/Rectangle prifile.png';
import yellowStar from '../../Assets/Images/Star-yellow.png';
import wightStar from '../../Assets/Images/Star-Wight.png';
import laserSurgery from '../../Assets/Images/laser-piles-image_1626690374.jpeg';
import '../LandingPage/LadingPage.css'
const Docter = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <div className='main' >
  <Header />


      {/* Content section */}
      <section style={{width: '1060px',marginLeft:"-4%"}}>
        <Container fluid>
          <Row>
            <Col className='content-background' sm={12} md={12} lg={12}>
              <Container>
                <Row className="content">
                  <Col className='left-side-content' sm={12} md={6}  >
                    <h2 className="head" style={{marginTop: '-20px',fontSize:"15px"}}>
  Piles Treatment -Surgery Process, Benefits & Recovery
</h2>

                    <div className='content-main-container'>
                    </div>
                    <div className='content-pharagraph'>
                      <p>
                        One of the most common anorectal medical conditions, yet
                        least talked about, is piles. Piles, or hemorrhoids, are
                        swollen tissues and blood vessels found inside the skin
                        in the rectal region. You can get the best treatment for
                        piles at Pristyn Care, with top-notch medical
                        technologies and equipment. Book a consultation today
                        with Pristyn Care to get rid of piles.One of the most
                        common anorectal medical conditions, yet least talked
                        about, is piles. Piles, or hemorrhoids, are swollen
                        tissues and blood vessels found inside the skin in the
                        rectal region. You can get the best treatment for piles
                        at Pristyn Care, with top-notch medical technologies and
                        equipment. Book a consultation today with Pristyn Care
                        to get rid of piles.
                      </p>
                    </div>
                  </Col>
                  <Col className='right-side-div' sm={12} md={6} style={{marginLeft:"70%"}}>
                    <div className='right-side-img'>
                      <img
                        style={{ width: '250px'}}
                        src={drImage}
                        alt=''
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Category */}
<section>
  <Container className="category-container" style={{marginLeft: '-9%'}}>
    <Row>
      <Col className="how-can" sm={12} md={2}>
        <h3 style={{whiteSpace: 'nowrap', fontSize: '16px'}}>
          How can I help you?
        </h3>
        <div className="btn-how-can">
          <Link to="/bookappointment" style={{textDecoration: 'none'}}>
            <button>Book appointment</button>
          </Link>
        </div>
      </Col>
      <Col className="categories" md={10} sm={12}>
        <div className="categories">
          <div className="category-1">
            <img src={Category1} alt="" />
            <Link to="/labs" style={{textDecoration: 'none'}}>
              <p style={{whiteSpace: 'nowrap', fontSize: '12px'}}>
                Check your Symptoms
              </p>
            </Link>
          </div>
          <div className="category-2">
            <img src={Category2} alt="" />
            <Link to="/" style={{textDecoration: 'none'}}>
              <p style={{whiteSpace: 'nowrap', fontSize: '12px'}}>
                Counsel With Experts
              </p>
            </Link>
          </div>
          <div className="category-3">
            <img src={Category3} alt="" />
            <Link to="/" style={{textDecoration: 'none'}}>
              <p style={{whiteSpace: 'nowrap', fontSize: '12px'}}>
                Chat with your doctor
              </p>
            </Link>
          </div>
          <div className="category-4">
            <img src={Category4} alt="" />
            <Link to="" style={{textDecoration: 'none'}}>
              <p style={{whiteSpace: 'nowrap', fontSize: '12px'}}>
                Book your scan now
              </p>
            </Link>
          </div>
          <div className="category-5">
            <img src={Category5} alt="" />
            <Link to="/labs" style={{textDecoration: 'none'}}>
              <p
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: '12px',
                  marginTop: '10px',
                }}
              >
                Get your Prescription
              </p>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* Choose your Docter */}
      <section>
        <Container>
          <Row>
            <Col sm={12} md={12} className='line'></Col>
          </Row>
        </Container>
        <Container>
          <div className='choose-dr'>
            <div className='your-dr'>
              <h2>Choose Your Doctor</h2>
            </div>
            <div className='search-dr'>
              {/* <span><BsSearchHeart/></span> */}
              <input type='text' placeholder='  Serach your Docter' />
            </div>
            <div className='best-dr'>
              <h4>Best Doctors for Piles Laser Treatment</h4>
            </div>
          </div>
          <Row>
            <Col className='dr-box' sm={12} md={12}>
              <div className='dr-outer-box'>
                <Row>
                  <Col md={3}>
                    <img
                      style={{ width: '80px'}}
                      src={DrImg}
                      alt=''
                    />
                  </Col>
                  <Col className='dr-qualification' md={9}>
                    <div className='dr-name'>
                      <h4 style={{marginLeft:"40px",fontSize:"14px"}}>Dr. Sajeet Nayar</h4>
                    </div>
                    <div className='dr-degree'>
                      <h6 style={{marginLeft:"40px",fontSize:"14px"}}>MBBS, MS - General Surgery</h6>
                    </div>
                    <div className='rating' style={{marginLeft:"-35%",fontSize:"14px"}}>
                      <span>
                        <AiFillStar fontSize={22} />
                        <span style={{marginLeft:"-3px",fontSize:"10px"}}>4.6/5</span>
                      </span>
                      <span>
                        <PiHandbagSimpleThin fontSize={22} />
                        <span style={{marginLeft:"-3px",fontSize:"10px"}}>19 + Years</span>
                      </span>
                      <span>
                        <MdLocationOn fontSize={22} />
                        <span style={{marginLeft:"-3px",fontSize:"10px"}}>Bangalore</span>
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className='dr-specialisation'>
                    <div className='specialisation-div'>
                      <p style={{fontSize:"10px"}}>General Surgeons</p>
                    </div>
                    <div className='specialisation-div'>
                      <p style={{fontSize:"10px"}}>Laparoscopic Surgeon</p>
                    </div>
                    <div className='specialisation-div'>
                      <p style={{fontSize:"10px"}}>Proctologist</p>
                    </div>
                    <div className='specialisation-div'>
                      <p style={{fontSize:"10px"}}>Laser Specialist</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className='dr-number' sm={12} md={6} style={{margin:"30px"}}>
                    <div className='number-div'>
                      <button style={{fontSize:"10px"}}>
                        <span>
                          <BiSolidPhoneCall fontSize={20} />
                        </span>{' '}
                        +91 9526602414
                      </button>
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className='dr-appoinment-btn' style={{marginLeft:"40px"}}>
                      <button>Book appointment</button>
                    </div>
                  </Col>
                </Row>
              </div>
<div className="dr-outer-box">
  <Row>
    <Col md={3}>
      <img style={{width: '80px'}} src={DrImg} alt="" />
    </Col>
    <Col className="dr-qualification" md={9}>
      <div className="dr-name">
        <h4 style={{marginLeft: '40px', fontSize: '14px'}}>Dr. Sajeet Nayar</h4>
      </div>
      <div className="dr-degree">
        <h6 style={{marginLeft: '40px', fontSize: '14px'}}>
          MBBS, MS - General Surgery
        </h6>
      </div>
      <div className="rating" style={{marginLeft: '-35%', fontSize: '14px'}}>
        <span>
          <AiFillStar fontSize={22} />
          <span style={{marginLeft:"-3px",fontSize:"10px"}}>4.6/5</span>
        </span>
        <span>
          <PiHandbagSimpleThin fontSize={22} />
          <span style={{marginLeft:"-3px",fontSize:"10px"}}>19 + Years</span>
        </span>
        <span>
          <MdLocationOn fontSize={22} />
          <span style={{marginLeft:"-3px",fontSize:"10px"}}>Bangalore</span>
        </span>
      </div>
    </Col>
  </Row>
  <Row>
    <Col className="dr-specialisation">
      <div className="specialisation-div">
        <p style={{fontSize: '10px'}}>General Surgeons</p>
      </div>
      <div className="specialisation-div">
        <p style={{fontSize: '10px'}}>Laparoscopic Surgeon</p>
      </div>
      <div className="specialisation-div">
        <p style={{fontSize: '10px'}}>Proctologist</p>
      </div>
      <div className="specialisation-div">
        <p style={{fontSize: '10px'}}>Laser Specialist</p>
      </div>
    </Col>
  </Row>
  <Row>
    <Col className="dr-number" sm={12} md={6} style={{margin: '30px'}}>
      <div className="number-div">
        <button style={{fontSize: '10px'}}>
          <span>
            <BiSolidPhoneCall fontSize={20} />
          </span>{' '}
          +91 9526602414
        </button>
      </div>
    </Col>
    <Col sm={12} md={6}>
      <div className="dr-appoinment-btn" style={{marginLeft:"40px"}}>
        <button>Book appointment</button>
      </div>
    </Col>
  </Row>
</div>

            </Col>
          </Row>
          <Container>
            <Row>
              <Col sm={12} md={12} className='line'></Col>
            </Row>
          </Container>
        </Container>
      </section>

    
      {/* What are piles */}
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className='background-shape'>
                <div className='piles-heading'>
                  <h4>What Are Piles?</h4>
                </div>
                <Row>
                  <Col sm={12} md={6}>
                    <div className='shape-two'>
                      <img src={shape2} alt='' width={200} style={{marginTop:"-10%"}} />
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className='pharagraph-text' style={{marginTop:"-20%",marginLeft:"34%",fontSize:"12px"}}>
                      <p>
                        Piles, also known as hemorrhoids, are swollen veins in
                        the anus and lower rectum. They can occur internally,
                        inside the rectum, or externally, around the external
                        opening of the anus. Piles can affect people of all ages
                        and genders. However, according to global medical
                        reports, people between 50 and 60 years are more likely
                        to suffer from piles. Piles is generally not a serious
                        medical condition and can be treated with lifestyle
                        changes and home remedies, like increasing fiber intake,
                        drinking plenty of water, practicing good hygiene, using
                        over-the-counter creams or ointments, and avoiding
                        straining during bowel movements. However, in more
                        severe cases, surgical procedures may be required.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='background-shape-second'>
                <Row>
                  <Col sm={12} md={6}>
                    <div className='heading-second'>
                      <h4>What Are The Types and Grades Of Piles?</h4>
                    </div>
                    <div className='last-content-pharagraph' style={{marginTop:"-10%",fontSize:"12px",marginLeft:"-3%",width:"500px"}}>
                      <p>
                        Piles can be classified into the following based on
                        their location and characteristics: Internal Piles
                        Internal piles develop inside the rectum above the
                        dentate line. They are not visible from the outside and
                        are categorized into different grades based on their
                        severity and prolapse. Grade 1: Grade 1 piles are the
                        mildest form of internal piles. They are small and found
                        in the lining of the rectum. They do not protrude out of
                        the anus and usually do not cause any symptoms.
                        Treatment for Grade 1 piles often begins with
                        conservative measures, like lifestyle modifications,
                        sitz baths, topical creams or ointments, etc. Grade 2:
                        Grade 2 piles are larger than Grade 1 and may protrude
                        during bowel movements. They protrude from the anus but
                        spontaneously retract back into the rectum after the
                        bowel movement. Treatment options for Grade 2 piles may
                        include non-surgical interventions like rubber band
                        ligation, infrared coagulation, and sclerotherapy. Grade
                        3: Grade 3 piles also prolapse during bowel movements
                        but do not retract independently. They need to be
                        manually pushed back into the rectum. They may cause
                        significant discomfort, pain, itching, bleeding, and
                        difficulty maintaining proper hygiene. Treatment options
                        for Grade 3 piles may include rubber band ligation,
                        infrared coagulation, and sclerotherapy.
                      </p>
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className='shape-second' style={{marginTop:"-68%",marginLeft:"90%"}}>
                      <img src={shape2} alt='' width={350} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col sm={12} md={12} className='line'></Col>
            </Row>
          </Container>
        </Container>
      </section>

      {/* Happy Client */}
<section
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  }}
>
  <div className="happy-client">
    <div className="happy-patient">
      <div className="happy-patient-img">
        <img src={happyPetient} alt="" width={200} />
      </div>
      <div className="happy-patient-box">
        <div className="happy-patient-content">
          <h2>200K+</h2>
        </div>
        <div className="happy-patient-content">
          <h5>Happy Patients</h5>
        </div>
      </div>
    </div>
  </div>

  <div className="happy-client">
    <div className="happy-patient">
      <div className="happy-patient-img">
        <img src={expertDocter} alt="" width={200} />
      </div>
      <div className="happy-patient-box">
        <div className="happy-patient-content">
          <h2>40+</h2>
        </div>
        <div className="happy-patient-content">
          <h5>Expert Doctor</h5>
        </div>
      </div>
    </div>
  </div>

  <div className="happy-client" >
    <div className="happy-patient">
      <div className="happy-patient-img">
        <img src={successfullSurgery} alt="" width={200} />
      </div>
      <div className="happy-patient-box">
        <div className="happy-patient-content">
          <h2>90+</h2>
        </div>
        <div className="happy-patient-content">
          <h5>Successful Surgeries </h5>
        </div>
      </div>
    </div>
  </div>
</section>

      {
  /* Package section */
}
<section>
  <Container>
    <Row>
      <div className="package-heading">
        <h2>Available packages</h2>
      </div>
      <Col sm={12} md={12} className="package-main-container">
        <div className="package-conatiner">
          <div className="package-name">
            <h3>Laser Surgery</h3>
          </div>
          <Row>
            <Col sm={12} md={7}>
              <div className="package-content" style={{fontSize: '12px'}}>
                <div className="package-benefit">
                  <ul>
                    <li>
                      Minimized Bleeding: As it cuts, the laser beam seals
                      small blood vessels.
                    </li>
                    <li>
                      Less Pain: The CO2 laser beam seals nerve endings
                      and lymphatics, resulting in less post-operative
                      swelling and pain.
                    </li>
                    <li>
                      Reduced risk of infection: Sanitizing effect is one
                      of the unique features of the CO2 laser beam
                    </li>
                  </ul>
                </div>
                <div className="duration">
                  <h5>Surgery duration</h5>
                  <p style={{fontSize: '12px'}}>
                    It can also take 1-2 hours if the piles are higher in
                    number. Surgery time is very less compared to
                    traditional surgeries
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <div className="package-img">
                <img
                  style={{
                    // height: '230px',
                    width: '100px',
                    borderRadius: '15px',
                  }}
                  src={laserSurgery}
                  alt=""
                />
              </div>
              <div className="surgery-info">
                <h5>Surgery Info</h5>
                <p style={{fontSize: '12px'}}>
                  This procedure uses laser energy to shrink and coagulate
                  the piles tissue. However, the surrounding healthy
                  tissues remain unaffected.
                </p>
              </div>
            </Col>
          </Row>
          <div className="amout-bnt">
            <button>₹100000</button>
          </div>
        </div>
        <div className="package-conatiner">
          <div className="package-name">
            <h3>Laser Surgery</h3>
          </div>
          <Row>
            <Col sm={12} md={7}>
              <div className="package-content" style={{fontSize: '12px'}}>
                <div className="package-benefit">
                  <ul>
                    <li>
                      Minimized Bleeding: As it cuts, the laser beam seals
                      small blood vessels.
                    </li>
                    <li>
                      Less Pain: The CO2 laser beam seals nerve endings
                      and lymphatics, resulting in less post-operative
                      swelling and pain.
                    </li>
                    <li>
                      Reduced risk of infection: Sanitizing effect is one
                      of the unique features of the CO2 laser beam
                    </li>
                  </ul>
                </div>
                <div className="duration">
                  <h5>Surgery duration</h5>
                  <p>
                    It can also take 1-2 hours if the piles are higher in
                    number. Surgery time is very less compared to
                    traditional surgeries
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <div className="package-img">
                <img
                  style={{
                    // height: '230px',
                    width: '100px',
                    borderRadius: '15px',
                  }}
                  src={laserSurgery}
                  alt=""
                />
              </div>
              <div className="surgery-info">
                <h5>Surgery Info</h5>
                <p style={{fontSize: '12px'}}>
                  This procedure uses laser energy to shrink and coagulate
                  the piles tissue. However, the surrounding healthy
                  tissues remain unaffected.
                </p>
              </div>
            </Col>
          </Row>
          <div className="amout-bnt">
            <button>₹100000</button>
          </div>
        </div>
        <div className="package-conatiner">
          <div className="package-name">
            <h3>Laser Surgery</h3>
          </div>
          <Row>
            <Col sm={12} md={7}>
              <div className="package-content" style={{fontSize: '12px'}}>
                <div className="package-benefit">
                  <ul>
                    <li>
                      Minimized Bleeding: As it cuts, the laser beam seals
                      small blood vessels.
                    </li>
                    <li>
                      Less Pain: The CO2 laser beam seals nerve endings
                      and lymphatics, resulting in less post-operative
                      swelling and pain.
                    </li>
                    <li>
                      Reduced risk of infection: Sanitizing effect is one
                      of the unique features of the CO2 laser beam
                    </li>
                  </ul>
                </div>
                <div className="duration">
                  <h5>Surgery duration</h5>
                  <p style={{fontSize: '12px'}}>
                    It can also take 1-2 hours if the piles are higher in
                    number. Surgery time is very less compared to
                    traditional surgeries
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <div className="package-img">
                <img
                  style={{
                    // height: '230px',
                    width: '100px',
                    borderRadius: '15px',
                  }}
                  src={laserSurgery}
                  alt=""
                />
              </div>
              <div className="surgery-info">
                <h5>Surgery Info</h5>
                <p style={{fontSize: '12px'}}>
                  This procedure uses laser energy to shrink and coagulate
                  the piles tissue. However, the surrounding healthy
                  tissues remain unaffected.
                </p>
              </div>
            </Col>
          </Row>
          <div className="amout-bnt">
            <button>₹100000</button>
          </div>
        </div>
      </Col>
    </Row>
    <Container>
      <Row>
        <Col sm={12} md={12} className="line" />
      </Row>
    </Container>
  </Container>
</section>

      {/* FAQ Section */}
      <section>
        <Container>
          <Row>
            <Col className='faq-conatiner'>
              <div className='faq-heading'>
                <h2>FAQs around Piles Treatment</h2>
              </div>
              <div className='faq-input-container'>
                {open === false ? (
                  <div className='faq-input'>
                    <p>What are piles in females?</p>{' '}
                    <span>
                      {' '}
                      <MdArrowDropDown onClick={handleOpen} fontSize={24} />
                    </span>
                  </div>
                ) : (
                  <>
                    <div className='faq-input'>
                      <p>What are piles in females?</p>{' '}
                      <span>
                        {' '}
                        <MdArrowDropDown onClick={handleClose} fontSize={24} />
                      </span>
                    </div>
                    <div>
                      <ul>
                        <li>jdkfhhkjdhfjkh</li>
                        <li>jdkfhhkjdhfjkh</li> <li>jdkfhhkjdhfjkh</li>{' '}
                        <li>jdkfhhkjdhfjkh</li>
                      </ul>
                    </div>
                  </>
                )}

                {open1 === false ? (
                  <div className='faq-input'>
                    <p>How can I prevent piles during pregnancy?</p>{' '}
                    <span>
                      {' '}
                      <MdArrowDropDown onClick={handleOpen1} fontSize={24} />
                    </span>
                  </div>
                ) : (
                  <>
                    <div className='faq-input'>
                      <p>How can I prevent piles during pregnancy?</p>{' '}
                      <span>
                        {' '}
                        <MdArrowDropDown onClick={handleClose1} fontSize={24} />
                      </span>
                    </div>
                    <div>
                      <ul>
                        <li>jdkfhhkjdhfjkh</li>
                        <li>jdkfhhkjdhfjkh</li> <li>jdkfhhkjdhfjkh</li>{' '}
                        <li>jdkfhhkjdhfjkh</li>
                      </ul>
                    </div>
                  </>
                )}

                {/* <div className='faq-input'>
                    <p>How can I prevent piles during pregnancy?</p>{' '}
                    <span>
                      {' '}
                      <MdArrowDropDown fontSize={24} />
                    </span>
                  </div> */}
              </div>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col sm={12} md={12} className='line'></Col>
            </Row>
          </Container>
        </Container>
      </section>

      {/* Google review */}
<section style={{marginLeft: '-14%'}}>
  <Container>
    <Row>
      <div className="symptoms-heading" style={{textAlign: 'center'}}>
        <h2>Our patient love us</h2>
      </div>
      <div>
        <Col className="google-review-container">
          <div className="review-box">
            <Row>
              <Col sm={3} md={3}>
                <div className="reviewer-img">
                  <img src={reviewPicture} alt="" width={60} />
                </div>
              </Col>
              <Col sm={8} md={8}>
                <div className="reviewer-name">
                  <h5>Pritam Behera </h5>
                </div>
                <div className="rating-container">
                  <div className="star">
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={wightStar} alt="" width={10} />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="review-text">
                <p>
                  Dr.Prasanna Dora is a very nice doctor. Very cordial and
                  helpful. He is very experienced too. I am very much
                  satisfied with my surgery. I will recommend everyone who
                  is suffering from piles or fistula to consult Dr.Dora
                  sir. U will see the difference before surgery and after
                  surgery life. A big thanks 2 u Sir.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="under-line" />
            </Row>
            <Row>
              <Col>
                <div className="docter-name">
                  <p>Docter : Dr.Prasanna Dora</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="review-box">
            <Row>
              <Col sm={3} md={3}>
                <div className="reviewer-img">
                  <img src={reviewPicture} alt="" width={60} />
                </div>
              </Col>
              <Col sm={8} md={8}>
                <div className="reviewer-name">
                  <h5>Pritam Behera </h5>
                </div>
                <div className="rating-container">
                  <div className="star">
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={wightStar} alt="" width={10} />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="review-text">
                <p>
                  Dr.Prasanna Dora is a very nice doctor. Very cordial and
                  helpful. He is very experienced too. I am very much
                  satisfied with my surgery. I will recommend everyone who
                  is suffering from piles or fistula to consult Dr.Dora
                  sir. U will see the difference before surgery and after
                  surgery life. A big thanks 2 u Sir.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="under-line" />
            </Row>
            <Row>
              <Col>
                <div className="docter-name">
                  <p>Docter : Dr.Prasanna Dora</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="review-box">
            <Row>
              <Col sm={3} md={3}>
                <div className="reviewer-img">
                  <img src={reviewPicture} alt="" width={60} />
                </div>
              </Col>
              <Col sm={8} md={8}>
                <div className="reviewer-name">
                  <h5>Pritam Behera </h5>
                </div>
                <div className="rating-container">
                  <div className="star">
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={yellowStar} alt="" width={10} />
                  </div>
                  <div>
                    <img src={wightStar} alt="" width={10} />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="review-text">
                <p>
                  Dr.Prasanna Dora is a very nice doctor. Very cordial and
                  helpful. He is very experienced too. I am very much
                  satisfied with my surgery. I will recommend everyone who
                  is suffering from piles or fistula to consult Dr.Dora
                  sir. U will see the difference before surgery and after
                  surgery life. A big thanks 2 u Sir.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="under-line" />
            </Row>
            <Row>
              <Col>
                <div className="docter-name">
                  <p>Docter : Dr.Prasanna Dora</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>{' '}
      </div>
    </Row>
    <Container>
      <Row>
        <Col sm={12} md={12} className="line" />
      </Row>
    </Container>
  </Container>
      </section>
      


      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Docter;
