import React, { useState, useEffect } from 'react';
import Logo from '../../Assets/Images/The life Plus-all logo_Page_3.png';
import DropDown from '../../Components/Dropdown/DropDown';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import PackageDetails from '../../Components/PackageDetails/PackageDetails.jsx';
import {IoSearch} from 'react-icons/io5';
import {Card} from 'react-bootstrap'
import DesktopDropdown from '../../Components/Dropdown/DesktopDropdown';
import CityDropdown from '../../Components/Dropdown/CityDropdown';
import Proctology from '../../Components/Dropdown/Proctology';
import Laparoscopy from '../../Components/Dropdown/Laparoscopy';
import Genecology from '../../Components/Dropdown/Genecology';
import Ent from '../../Components/Dropdown/Ent';
import Urology from '../../Components/Dropdown/Urology';
import Aesthetics from '../../Components/Dropdown/Aesthetics';
import { BsCart3 } from 'react-icons/bs';
import Pharmacy from '../../Components/Dropdown/Pharmacy';
import Doctors from '../../Components/Dropdown/Doctors';
import Lab from '../../Components/Dropdown/Lab';
import Footer from '../../Components/Footer/Footer';
import { useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Labs/Labs.css';

import LabHeader1 from '../../Assets/about_assets/lab_head1-removebg-preview.png';

import LabHeader2 from '../../Assets/about_assets/lab_head2-removebg-preview.png'
import LabHeader3 from '../../Assets/about_assets/lab_head3-removebg-preview.png';
import LabHeader4  from '../../Assets/about_assets/lab_head4-removebg-preview.png';
import LabScheduler from '../../Components/LabSchedule/LabSchedule.jsx';
import LabTest from '../../Assets/about_assets/labtest.jfif';


















const Labs = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState ('');
    const [cardHeight, setCardHeight] = useState ('auto');
const [showLabSchedule, setShowLabSchedule] = useState (false);

const [sections, setSections] = useState ({
  description: false,
  benefitsUsage: false,
  testDuration: false,
});

const handleInputChange = e => {
  setSearchQuery (e.target.value);
};


  const lines = [
    'State-of-the-Art Laboratory Technology',
    'Accurate Results, Timely Reporting',
    'Committed to Excellence in Lab Services',
  ];

  const bannerData = [
  {image: LabHeader1, text: 'Discover our cutting-edge technology.'},
  {
    image: LabHeader2,
    text: 'Experience accurate results and timely reporting.',
  },
  {image: LabHeader3, text: 'Our commitment to excellence sets us apart.'},
  {
    image: LabHeader4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000, // Set the autoplay speed in milliseconds (e.g., 5000 = 5 seconds)
};

  const handleScheduleClick = () => {
setShowLabSchedule (prevState => !prevState);
};


  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentLine = lines[currentLineIndex];
      const nextCharIndex = currentText.length + 1;

      if (nextCharIndex <= currentLine.length) {
        setCurrentText(currentLine.substring(0, nextCharIndex));
      } else {
        // Move to the next line
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
        setCurrentText('');
      }
    }, 50); // Adjust the typing speed as needed

    return () => clearInterval(typingInterval);
  }, [currentLineIndex, currentText]);



  const toggleSection = section => {
  setSections (prevSections => ({
    ...prevSections,
    [section]: !prevSections[section],
  }));
      setCardHeight('auto'); // Reset height to auto
    setTimeout(() => {
      const card = document.getElementById('lab-card');
      if (card) {
        setCardHeight(`${card.scrollHeight}px`);
      }
    }, 0);
  };




  const buttonStyles = {
    fontSize: '8px',
    border: '1px solid #e74c3c',
    borderRadius: '4px',
    backgroundColor: '#e74c3c',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
  };

  return (
    <>
      {/* Header */}
      <div className="header" style={{ width: '1060px', marginLeft: '-4%' }}>
        <div className="header_container">
          <div className={`header ${isMobile ? 'mobile-header' : ''}`}>
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="menu-container">
              {isMobile ? (
                <div className="mobile-menu">
                  <DropDown />
                </div>
              ) : (
                <ul className="desktop-menu ">
                  <li style={{ margin: '4px' }}>
                    <Proctology />
                  </li>
                  <li style={{ margin: '4px' }}>
                    <Laparoscopy />
                  </li>
                  <li style={{ margin: '4px' }}>
                    <Genecology />
                  </li>
                  <li style={{ margin: '4px' }}>
                    <Ent />
                  </li>
                  <li style={{ margin: '4px' }}>
                    <Urology />
                  </li>
                  <li style={{ margin: '4px' }}>
                    <Aesthetics />
                  </li>
                  <li style={{ margin: '4px' }}>
                    <Pharmacy />
                  </li>
                  <li style={{ margin: '4px' }}>
                    <Doctors />
                  </li>
                  <li style={{ margin: '4px' }}>
                    <Lab />
                  </li>
                </ul>
              )}
            </div>
            <div className="utilities-container">
              <ul className="desktop-menu utilities" style={{ marginLeft: '40%' }}>
                <li>
                  <button
                    className="book-appoinmnet"
                    style={buttonStyles}
                    onClick={() => {
                      navigate('/packages');
                    }}
                  >
                    Packages
                  </button>
                </li>

                <li style={{ margin: '8px' }}>
                  <DesktopDropdown />
                </li>
                <li style={{ margin: '8px' }}>
                  <CityDropdown />
                </li>
                <li style={{ margin: '8px' }}>
                  <BsCart3 fontSize={25} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Slider {...sliderSettings}>
  {bannerData.map ((banner, index) => (
    <div key={index}>
      <div
        className="banner_container"
        style={{ width: '1060px', marginLeft: '-4%',height:"300px"}}
      >
        <div
          className="banner_img"
          style={{float: 'left'}}
        >
          <img src={banner.image} alt={`Header${index + 1}`} width={350} className="banner-img" />
        </div>
        <div
          className="banner_text"
          style={{
            float: 'right',
            display: 'inline-block',
            width: '50%',
            padding: '20px',
            marginRight:"50px",
            marginTop:"50px"
          }}
        >
          <span>{banner.text}</span>

        </div>
      </div>
    </div>
  ))}
</Slider>

<div className="lab_search_box">
  <div className="search_container">
    <input type="text" placeholder="Search with Test Name" value = {searchQuery}
onChange = {handleInputChange} className="lab_search"
/>
    <IoSearch className="search_icon" />
  </div>
</div>

      <div className="lab_btns">
        <button className="home_btn" style={{width:"150px",height:"40px",borderRadius:"25px",marginLeft:"80px"}}>In Home</button>
        <button className="hospital_btn" style={{width:"150px",height:"40px",borderRadius:'25px'}}>In Hospital</button>
      </div>

      <PackageDetails Id={1}/>
      <PackageDetails Id={2}/>
<PackageDetails Id={3}/>
<PackageDetails Id={4}/>

      <PackageDetails Id={5} />




      {/* Footer */}
      <div className="footer" style={{ width: '1060px', marginLeft: '-6.5%' }}>
        <Footer />
      </div>
    </>
  );
};

export default Labs;
