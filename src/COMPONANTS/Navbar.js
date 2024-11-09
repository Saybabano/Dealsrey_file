import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleImage = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='navbar'>
        <img className='img-logo' 
             src='https://media.licdn.com/dms/image/v2/C560BAQE0YLKt7EeMZw/company-logo_200_200/company-logo_200_200/0/1630645895449/dealsdray_logo?e=2147483647&v=beta&t=Wx__HB2mc1s25fWixbjB1xK9CnvugVlKnQhnKsRCtGI' 
             alt='company logo' 
             onClick={handleImage} 
        />
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/employee'>Employee List</NavLink>
        </div>

        <div className='hamburger' onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </>
  );
}
