import React from 'react';
import sycLogo from '../../assets/logo.jpeg';
import './footer.css';

const Footer = () => (

  <div className="syc__footer footer__padding">
    <div className="syc__footer-heading">
      <h1 className="gradient__text" style={{ fontSize: "16px", textAlign: "left" }}>Ready to embark on a journey into the future ? Let's redefine what's possible together. Contact Us and discover how SYC can transform your business into a beacon of innovation.
      </h1>
    </div>

    <div className="syc__footer-links">
      <div className="syc__footer-links_logo">
        <img src={sycLogo} alt="syc_logo" className='logo-footer' />
        {/* <p>Xyz K12 182 DK Alknjkcb, <br /> All Rights Reserved</p> */}
      </div>
      <div className="syc__footer-links_div">
        <h4>Follow us on Social Media</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="syc__footer-links_div">
        <h4>Explore Our Solutions</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="syc__footer-links_div">
        <h4>Contact US</h4>
        <p>Xyzzz K12 182 DK Alknjkcb</p>
        <p>051-xxxxx</p>
        <p>www.syc.com</p>
      </div>
    </div>

    <div className="syc__footer-copyright">
      <p>@2023 SYC. Pioneering Tomorrow's Connectivity, Today.</p>
    </div>
  </div>
);

export default Footer;
