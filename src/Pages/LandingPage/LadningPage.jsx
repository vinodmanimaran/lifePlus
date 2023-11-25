
import React, { useState } from 'react';
import './LadingPage.css';
import {Link} from 'react-router-dom'
import Whyus from '../../Components/Whyus/Whyus.jsx'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shape1 from '../../Assets/Images/Vector.png';
import Shape2 from '../../Assets/Images/Vector (1).png';
import Shape3 from '../../Assets/Images/Vector (2).png';
import DoctorImage from '../../Assets/Images/unsplash_pTrhfmj2jDA 1.png';
import Category1 from '../../Assets/Images/Category1.png';
import Category2 from '../../Assets/Images/Category2.png';
import Category3 from '../../Assets/Images/Category3png.png';
import Category4 from '../../Assets/Images/Category4.png';
import Category5 from '../../Assets/Images/Category5.png';
// import { FaPercent } from 'react-icons/fa';
import Specialities from '../../Components/Specialities/Specialities';
import reviewPicture from '../../Assets/Images/Rectangle prifile.png';
import yellowStar from '../../Assets/Images/Star-yellow.png';
import wightStar from '../../Assets/Images/Star-Wight.png';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import offerSideImage from '../../Assets/Images/special-offer-side-image.png';
// imp  ort offerEndImg from '../../Assets/Images/offer-end-picture-removebg-preview.png';
import   DrImg from '../../Assets/Images/Doctors-removebg-preview.png';
import happyClient1 from '../../Assets/Images/Happy-Client-2.png';
import happyClient3 from '../../Assets/Images/Happy-Client-3-removebg-preview.png';
import InsuranceSlider from '../../Components/InsuranceSlider/InsuranceSlider.jsx'
import Symptoms from '../../Components/Symptoms/Symptoms.jsx'
import DoctorSlider from '../../Components/DoctorSlider/DoctorSlider.jsx';
import Testimonial from '../../Components/Testimonials/Testimonial.jsx';

const LadningPage = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState (false);


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen3 = () => {
  setOpen3 (true);
};
const handleClose3 = () => {
  setOpen3 (false);
};

  return (
    <>
      <div className='main'>
          <Header />

        {/* Offer and Slider section */}
        <section>
<DoctorSlider/>
        </section>

        {/* Category */}
<section>
  <Container className="category-container" style={{marginLeft:"-2%"}} >
    <Row>
      <Col className="how-can" sm={12} md={2}>
        <h3 style={{whiteSpace:"nowrap",fontSize:"16px"}}>How can I help you?</h3>
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
              <p style={{whiteSpace:"nowrap",fontSize:"12px"}}>Check your Symptoms</p>
            </Link>
          </div>
          <div className="category-2">
            <img src={Category2} alt="" />
            <Link to="/" style={{textDecoration: 'none'}}>
              <p style={{whiteSpace:"nowrap",fontSize:"12px"}}>Counsel With Experts</p>
            </Link>
          </div>
          <div className="category-3">
            <img src={Category3} alt="" />
            <Link to="/" style={{textDecoration: 'none'}}>
              <p style={{whiteSpace:"nowrap",fontSize:"12px"}}>Chat with your doctor</p>
            </Link>
          </div>
          <div className="category-4">
            <img src={Category4} alt="" />
            <Link to="" style={{textDecoration: 'none'}}>
              <p style={{whiteSpace:"nowrap",fontSize:"12px"}}>Book your scan now</p>
            </Link>
          </div>
          <div className="category-5">
            <img src={Category5} alt="" />
            <Link to="/labs" style={{textDecoration: 'none'}}>
              <p style={{whiteSpace:"nowrap",fontSize:"12px",marginTop:"10px"}}>Get your Prescription</p>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
       <Container>
  <Row>
    <Col sm={12} md={12} className="line" />
  </Row>
</Container>

   <InsuranceSlider/>
   <Container>
  <Row>
    <Col sm={12} md={12} className="line" />
  </Row>
</Container>
        {/* Symptoms */}
        <section>
<Symptoms/>

{/* <Container fluid>
  <Row>
    <Col sm={12} md={12}>
      <div className="symptoms-heading">
        <h2>Choose Your Symptoms</h2>
      </div>
      <div className="Symptoms-Container">
        <Row>
          <Col className="Symptoms">
            <img src={Symptoms1} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms2} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms3} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms4} alt="" />
          </Col>
        </Row>
        <Row>
          <Col className="Symptoms">
            <img src={Symptoms5} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms6} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms7} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms8} alt="" />
          </Col>
        </Row>
        <Row>
          <Col className="Symptoms">
            <img src={Symptoms9} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms10} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms11} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms12} alt="" />
          </Col>
        </Row>
        <Row>
          <Col className="Symptoms">
            <img src={Symptoms13} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms14} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms15} alt="" />
          </Col>
          <Col className="Symptoms">
            <img src={Symptoms16} alt="" />
          </Col>
        </Row>
      </div>
    </Col>
  </Row>

  <Row>
    <Col className="view">
      <button>view more</button>
    </Col>
  </Row>
</Container> */}


          {/* <Container>
            <Row>
              <br/>
              <Col sm={12} md={12} className='line line-2' style={{margin:"250px"}}></Col>
            </Row>
          </Container> */}
        </section>

        {/* Our Specialities */}
        <section>
          {/* <Container fluid>
            <Row>
              <div className='symptoms-heading'>
                <h2>Our Specialties</h2>
              </div>
              <Col sm={12} md={12} className='specialities-container'>
                <div className='specialities'>
                  <Row>
                    <Col sm={12} md={5}>
                      <div className='speciality-img'>
                        <img src={Speciality1} alt='' />
                      </div>
                    </Col>
                    <Col sm={12} md={7}>
                      <div className='arrow'>
                        <Link to="/Proctology">
                        <BsArrowRightShort fontSize={22} /></Link>
                      </div>
                      <div className='speciality-name'>
                        <h6>Proctology</h6>
                        <p>
                          Specialised & advanced treatment for Anorectal
                          Diseases ...
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='specialities'>
                  <Row>
                    <Col sm={12} md={5}>
                      <div className='speciality-img'>
                        <img src={Speciality2} alt='' />
                      </div>
                    </Col>
                    <Col sm={12} md={7}>
                      <div className='arrow'>
                        <Link to="/laparoscopy">
                          <BsArrowRightShort fontSize={22} />

                        </Link>
                        
                      </div>
                      <div className='speciality-name'>
                        <h6>Laparoscopy</h6>
                        <p>
                          Keyhole surgery for abdominal and pelvic disorders ...
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='specialities'>
                  <Row>
                    <Col sm={12} md={5}>
                      <div className='speciality-img'>
                        <img src={Speciality3} alt='' />
                      </div>
                    </Col>
                    <Col sm={12} md={7}>
                      <div className='arrow'>
                        <Link to="/gynecologists">
                          <BsArrowRightShort fontSize={22} />

                        </Link>
                      </div>
                      <div className='speciality-name'>
                        <h6>Gynecologists</h6>
                        <p>
                          Treatment of diseases related to female reproductive
                          organs ....
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='specialities'>
                  <Row>
                    <Col sm={12} md={5}>
                      <div className='speciality-img'>
                        <img src={Speciality4} alt='' />
                      </div>
                    </Col>
                    <Col sm={12} md={7}>
                      <div className='arrow'>
                        <Link to="/ent">
                          <BsArrowRightShort fontSize={22} />

                        </Link>
                      </div>
                      <div className='speciality-name'>
                        <h6>ENT</h6>
                        <p>
                          Minimal access surgery (MIS) for ear, nose and throat
                          (ENT) issues ...
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='specialities'>
                  <Row>
                    <Col sm={12} md={5}>
                      <div className='speciality-img'>
                        <img src={Speciality5} alt='' />
                      </div>
                    </Col>
                    <Col sm={12} md={7}>
                      <div className='arrow'>
                        <Link to="/urology">
<BsArrowRightShort fontSize={22} />

                        </Link>
                      </div>
                      <div className='speciality-name'>
                        <h6>Urology</h6>
                        <p>
                          Specialised & advanced treatment for Anorectal
                          Diseases Surgical treatment for in men and women
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='specialities'>
                  <Row>
                    <Col sm={12} md={5}>
                      <div className='speciality-img'>
                        <img src={Speciality6} alt='' />
                      </div>
                    </Col>
                    <Col sm={12} md={7}>
                      <div className='arrow'>
                        <Link to="/vascular">
<BsArrowRightShort fontSize={22} />

                        </Link>
                      </div>
                      <div className='speciality-name'>
                        <h6>Vascular</h6>
                        <p>
                          Surgical subspecialty that focuses on the vascular
                          system- arteries, veins and lymphatic...
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Row>
                <Col className='view-more'>
                  <button>view more</button>
                </Col>
              </Row>
              <Container>
                <Row>
                  <Col sm={12} md={12} className='line'></Col>
                </Row>
              </Container>
            </Row>
          </Container> */}
          <Specialities/>
        </section>

        {/* Happy Client */}
        <section>
          <Container fluid>
            <Row>
              <Col className='happy-clients'>
                <div className='client'>
                  <div>
                    <img
                      // style={{ height: '270px' }}
                      src={happyClient1}
                      width={200}
                      alt=''
                    />
                  </div>
                  <div className='client-heading'>
                    <h3>40+</h3>
                  </div>
                  <div className='client-subheading'>
                    <h4>Docters</h4>
                  </div>
                </div>
                <div className='client'>
                  <div>
                    <img
                      // style={{ height: '270px' }}
                      src={happyClient1}
                                            width={200}

                      alt=''
                    />
                  </div>
                  <div className='client-heading'>
                    <h3>80+</h3>
                  </div>
                  <div className='client-subheading'>
                    <h4>Diseases</h4>
                  </div>
                </div>
                <div className='client'>
                  <div>
                    <img
                      // style={{ height: '270px' }}
                                            width={200}

                      src={happyClient3}
                      alt=''
                    />
                  </div>
                  <div className='client-heading'>
                    <h3>200k+</h3>
                  </div>
                  <div className='client-subheading'>
                    <h4>Happy patient</h4>
                  </div>
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
  <Testimonial/>
<Container>
  <Row>
    <Col sm={12} md={12} className="line" />
  </Row>
</Container>



        {/* Google review */}
        <section style={{marginLeft:"-8%"}}>
          <Container>
            <Row>
              <div className='symptoms-heading' style={{textAlign:"center"}}>
                <h2>Our patient love us</h2>
              </div>
              <div>    
              <Col className='google-review-container' >
                <div className='review-box' >
                  <Row>
                    <Col sm={3} md={3}>
                      <div className='reviewer-img'>
                        <img src={reviewPicture} alt='' width={60} />
                      </div>
                    </Col>
                    <Col sm={8} md={8}>
                      <div className='reviewer-name'>
                        <h5>Pritam Behera </h5>
                      </div>
                      <div className='rating-container'>
                        <div className='star'>
                          <img src={yellowStar} alt='' width={10} />
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10} />
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10} />
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10} />
                        </div>
                        <div>
                          <img src={wightStar} alt='' width={10}/>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='review-text'>
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
                    <Col className='under-line'></Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className='docter-name'>
                        <p>Docter : Dr.Prasanna Dora</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='review-box'>
                  <Row>
                    <Col sm={3} md={3}>
                      <div className='reviewer-img'>
                        <img src={reviewPicture} alt='' width={60}/>
                      </div>
                    </Col>
                    <Col sm={8} md={8}>
                      <div className='reviewer-name'>
                        <h5>Pritam Behera </h5>
                      </div>
                      <div className='rating-container'>
                        <div className='star'>
                          <img src={yellowStar} alt=''  width={10} />
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10}/>
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10}/>
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10} />
                        </div>
                        <div>
                          <img src={wightStar} alt='' width={10}/>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='review-text'>
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
                    <Col className='under-line'></Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className='docter-name'>
                        <p>Docter : Dr.Prasanna Dora</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='review-box'>
                  <Row>
                    <Col sm={3} md={3}>
                      <div className='reviewer-img'>
                        <img src={reviewPicture} alt='' width={60}
                    />
                      </div>
                    </Col>
                    <Col sm={8} md={8}>
                      <div className='reviewer-name'>
                        <h5>Pritam Behera </h5>
                      </div>
                      <div className='rating-container'>
                        <div className='star'>
                          <img src={yellowStar} alt='' width={10} />
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10}/>
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10}/>
                        </div>
                        <div>
                          <img src={yellowStar} alt='' width={10}/>
                        </div>
                        <div>
                          <img src={wightStar} alt='' width={10} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='review-text'>
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
                    <Col className='under-line'></Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className='docter-name'>
                        <p>Docter : Dr.Prasanna Dora</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col> </div>
            </Row>
            <Container>
              <Row>
                <Col sm={12} md={12} className='line'></Col>
              </Row>
            </Container>
          </Container>
        </section>
        <section style={{margin:"100px"}}>
<Whyus />

        </section>



        {/* FAQ Section */}
        <section>
          <Container fluid>
            <Row>
              <Col className='faq-conatiner'>
                <div className='faq-heading'>
                  <h2>Frequently Asked Questions</h2>
                </div>
    <div className='faq-input-container faq-conatiner' style={{marginLeft:"10%"}}>
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
              <li>Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum and anus.</li>
              <li>They can occur in females due to various factors such as pregnancy, obesity, and a sedentary lifestyle.</li>
              <li>Symptoms may include pain, bleeding, and discomfort during bowel movements.</li>
              <li>Treatment options include lifestyle changes, medications, and in severe cases, surgical procedures.</li>
            </ul>
          </div>
        </>
      )}

      {open2 === false ? (
        <div className='faq-input'>
          <p>How can I prevent piles during pregnancy?</p>{' '}
          <span>
            {' '}
            <MdArrowDropDown onClick={handleOpen2} fontSize={24} />
          </span>
        </div>
      ) : (
        <>
          <div className='faq-input'>
            <p>How can I prevent piles during pregnancy?</p>{' '}
            <span>
              {' '}
              <MdArrowDropDown onClick={handleClose2} fontSize={24} />
            </span>
          </div>
          <div>
            <ul>
              <li>Stay hydrated by drinking plenty of water.</li>
              <li>Eat a high-fiber diet with fruits, vegetables, and whole grains.</li>
              <li>Avoid sitting or standing for long periods.</li>
              <li>Engage in regular exercise to improve blood circulation.</li>
              <li>Consult your healthcare provider for personalized advice.</li>
            </ul>
          </div>
        </>
      )}

      {open3 === false ? (
        <div className='faq-input'>
          <p>Are there surgical options for treating piles?</p>{' '}
          <span>
            {' '}
            <MdArrowDropDown onClick={handleOpen3} fontSize={24} />
          </span>
        </div>
      ) : (
        <>
          <div className='faq-input'>
            <p>Are there surgical options for treating piles?</p>{' '}
            <span>
              {' '}
              <MdArrowDropDown onClick={handleClose3} fontSize={24} />
            </span>
          </div>
          <div>
            <ul>
              <li>Yes, there are surgical options for treating piles.</li>
              <li>Hemorrhoidectomy is a surgical procedure to remove hemorrhoids.</li>
              <li>Other options include rubber band ligation and sclerotherapy.</li>
              <li>These procedures are usually considered when other treatments have not been successful.</li>
              <li>Consult with a colorectal surgeon for personalized advice.</li>
            </ul>
          </div>
        </>
      )}
    </div>

              </Col> 
            </Row>
          </Container>
        </section>

        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LadningPage;
