import React, { useEffect, useState } from 'react';
import './Header.css';
import Logo from '../../Assets/Images/The life Plus-all logo_Page_3.png';
import DropDown from '../Dropdown/DropDown';
import DesktopDropdown from '../Dropdown/DesktopDropdown';
import CityDropdown from '../Dropdown/CityDropdown';
import Proctology from '../Dropdown/Proctology';
import Laparoscopy from '../Dropdown/Laparoscopy';
import Genecology from '../Dropdown/Genecology';
import Ent from '../Dropdown/Ent';
import Urology from '../Dropdown/Urology';
import Aesthetics from '../Dropdown/Aesthetics';
import { BsCart3 } from 'react-icons/bs';
import Pharmacy from '../Dropdown/Pharmacy';
import Doctors from '../Dropdown/Doctors';
import Lab from '../Dropdown/Lab';
import { Link,useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate=useNavigate()

  const buttonStyles = {
  fontSize: '8px',
  border: '1px solid #e74c3c',
  borderRadius: '4px',
  backgroundColor: '#e74c3c',
  color: '#ffffff',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
};

  // Use useEffect to check window width on component mount and resize
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

  return (
            <div className='header' style={{width:"1060px",marginLeft:"-4.1%"}}>

    <div className="header_container"  >

      <div className={`header ${isMobile ? 'mobile-header' : ''}`}>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt=''/>
          </Link>
        </div>
        <div className='menu-container'>
          {isMobile ? (
            <div className='mobile-menu'>
              <DropDown />
            </div>
          ) : (
            <ul className='desktop-menu ' >
              <li style={{margin:"4px"}}>
                <Proctology />
              </li>
              <li style={{margin:"4px"}}>
                <Laparoscopy />
              </li>
              <li style={{margin:"4px"}}>
                <Genecology />
              </li>
              <li style={{margin:"4px"}}>
                <Ent />
              </li>
              <li style={{margin:"4px"}}>
                <Urology />
              </li>
              <li style={{margin:"4px"}}>
                <Aesthetics /> 
              </li >
              <li style={{margin: "4px"}}>
                <Pharmacy />
              </li>
              <li style={{margin:"4px"}}>
                <Doctors />
              </li>
              <li style={{margin:"4px"}}>
                <Lab />
              </li>
            </ul>
          )}
        </div>
        <div className='utilities-container'>
          <ul className='desktop-menu utilities' style={{marginLeft:"40%"}}>
            <li>
              <button className='book-appoinmnet' style={buttonStyles} onSubmit={()=>{
                navigate("/bookappointment")
              }}>
                Book Appointment
              </button>
            </li>
            
            <li style={{margin:"8px"}}>
              <DesktopDropdown  />
            </li>
            <li style={{margin:"8px"}}>
              <CityDropdown />
            </li>
            <li style={{margin:"8px"}}>
              <BsCart3 fontSize={25} />
            </li>
          </ul>
        </div>
      </div>
    </div>  
    </div>
  );
};

export default Header;
