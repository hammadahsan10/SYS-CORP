import React from 'react';
import './Mission.css';
import 'animate.css';
import { FadeRightSection } from '../../components/animations/FadeRightSection';
import MissionStatement from '../../components/MissionStatement/MissionStatement';
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon9.png"
import icon3 from "../../assets/icon13.png"

const Mission = () => (

  <div className="syc__whatsyc section__margin" id="mission">
    <div className="syc__whatsyc-heading">
      <h1 className="gradient__text">Mission Statement</h1>
    </div>
    <FadeRightSection>
      <div className="syc__whatsyc-container"  style={{ animation: 'slideInFromRight 1s ease-in-out', position: 'relative', zIndex: 1 }}>
        <MissionStatement image={icon1} title="Digitize" text="Transforming physical processes into efficient, intelligent digital experiences." />
        <MissionStatement image={icon2} title="Integrate" text="Creating cohesive and interconnected environments for optimized performance." />
        <MissionStatement image={icon3} title="Animate" text="Infusing applications with dynamic elements to captivate and engage users." />
      </div>
    </FadeRightSection>
  </div>
);

export default Mission;
