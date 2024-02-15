import React from 'react';
import ai from '../../assets/ai3.png';
import './header.css';
import { TypingTextAnimation } from '../../components/animations/TypingTextAnimation';

const Header = () => (

  <div className="syc__header section__padding" id="home">
    <div className="syc__header-content" style={{ animation: 'slideInFromLeft 1s ease-in-out', position: 'relative', zIndex: 1 }}>
      <h1 className="gradient__text" style={{ letterSpacing: '10px' }}>SYC</h1>
      <TypingTextAnimation />
      <h4 className="gradient__text" style={{ letterSpacing: '2px' }}>The Future Is Now</h4>
      <p style={{textAlign:"justify", fontFamily:"sans-serif", fontSize:"18px", color:"#f3efef"}}>SYC Corp is a cutting-edge technology company specializing in the design and development of advanced Cyber-Physical Systems (CPS). Our unique approach revolves around a modular development strategy, strategically crafted to minimize costs and time while delivering highly scalable and complex systems.</p>
    </div>
    <div className="syc__header-image" style={{ animation: 'slideInFromRight 1s ease-in-out', position: 'relative', zIndex: 1 }}>
      <img src={ai} alt="AI" />
    </div>
  </div>
);

export default Header;


