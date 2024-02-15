import React from 'react';
import './MissionStatement.css';

const MissionStatement = ({ image, title, text }) => (
  <div className="syc__features-container__feature">
    <div className="syc__features-container__feature-title"> <div />
      <span style={{ display: "flex", flexDirection: "row", marginLeft: "-10px" }}>
        <img src={image} width="50px" height="50px" />
        <h1 style={{ lineHeight: "50px" }} className='ml-2'>{title}</h1>
      </span>
    </div>
    <div className="syc__features-container_feature-text" style={{ marginTop: "-10px" }}>
      <p>{text}</p>
    </div>
  </div>
);

export default MissionStatement;
