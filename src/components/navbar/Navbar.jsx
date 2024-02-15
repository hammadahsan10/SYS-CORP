import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.jpeg';
import './navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="syc__navbar" style={{ animation: 'slideInFromRight 1s ease-in-out' }}>
      <div className="syc__navbar-links">
        <div className="syc__navbar-links_logo">
          <img src={logo} alt='logo' className='logo-style'/>
        </div>
        <div className="syc__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#mission">Mission</a></p>
          <p><a href="#aboutus">About Us</a></p>
          <p><a href="#cost">Cost</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#summary">Summary</a></p>
          <p><a href="#future">Future</a></p>
          <p><a href="#chooseus">Choose Us</a></p>
          <p><a href="#solutions">Solutions</a></p>
        </div>
      </div>
      <div className="syc__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="syc__navbar-menu_container scale-up-center" style={{ zIndex: "2" }}>
            <div className="syc__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#mission">Mission</a></p>
              <p><a href="#aboutus">About Us</a></p>
              <p><a href="#cost">Cost</a></p>
              <p><a href="#features">Features</a></p>
              <p><a href="#summary">Summary</a></p>
              <p><a href="#future">Future</a></p>
              <p><a href="#chooseus">Choose Us</a></p>
              <p><a href="#solutions">Solutions</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
