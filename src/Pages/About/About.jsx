import React from 'react'
import headerImg from '../../Assets/about_assets/bgv.png'
import './About.css'
import Message from '../../Components/Message/Message'
import AdminTeam from '../../Components/Teams/AdminTeam'
import Facility from '../../Components/Facilities/Facilities';
import Accordion from '../../Components/Accordion/Accordion';
import Excellence from '../../Assets/about_assets/excellence.jpg'
import {Row, Col, Container} from 'react-bootstrap';
import CoreValues from '../../Components/Corevalues/CoreValues'
import Insurance from '../../Components/InsuranceSlider/InsuranceSlider';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header'
import Question from '../../Components/Questions/Questions.jsx'

const About = () => {
  const header=[
    {
      headerImg: headerImg,
overlayTitle: "About LifePlus Hospital",
  overlayDescription:
    "Empowering Health, Enriching Lives",
}  
  ]
  return (
    <>
  <Header />


    <Container>

      {
  header.map ((item, index) => (
<div className="header" key={index} style={{marginLeft:"-30px"}}>
  <div className="image-container" >
    <img
      src={item.headerImg}
      alt={item.overlayTitle}
      width={1200}
          className="header_img"
    />
<div className = 'text-container'>            
  <h1 className="overlay_header_title">{item.overlayTitle}</h1>
  <p className="overlay_header_description">{item.overlayDescription}</p>
</div>

  </div>
</div>
  ))}
      </Container>
      
      <Container>
        <Message/>
        <AdminTeam />
        <Facility />
        <Row>
          <Col>
          <img src={Excellence} alt="Our Excellence"  className="excellence_img"  />
          </Col>
          <Col>
          <div className="accordion_value">
  <h1 className="accordion_value_heading">
    Vision,Mission & Quality Policy
  </h1>
  <div className="acc">
    <Accordion
      title="Vision"
      content="To become a trusted healthcare institution that consistently provides world-class medical services with a focus on patient well-being and satisfaction."
    />
    <Accordion
      title="Mission"
      content="Our mission is to offer comprehensive healthcare solutions that are accessible, affordable, and of the highest quality. We strive to continuously improve our services and maintain a patient-centric approach."
    />
    <Accordion
      title="Quality Policy"
      content="We are committed to upholding the highest standards of medical care and safety. Our quality policy includes a dedication to evidence-based practices, ethical conduct, and continuous improvement. We prioritize the well-being of our patients."
    />

  </div>
</div>
          </Col>
          </Row>
          <CoreValues/>
        <Insurance />
        <Question/>
        <Footer/>
      </Container>

</>
  )
}

export default About