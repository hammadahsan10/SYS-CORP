import React from 'react';
import './cost.css';

const Cost = ({ title, text }) => (
  <div className="syc__features-container__feature">
    <div className="syc__features-container__feature-title">
      <h1>{title}</h1>
    </div>
    <div className="syc__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Cost;
