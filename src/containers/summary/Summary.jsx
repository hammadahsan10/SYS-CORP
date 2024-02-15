import React from 'react';
import SummaryText from '../../components/summary/SummaryText';
import './summary.css';

const Summary = () => (
  <div className="syc__summary section__margin" id="summary">
    <div className="syc__summary-heading">
      <h1 className="gradient__text">Summary</h1>
    </div>
    <div className="syc__summary-container">
      <SummaryText />
    </div>
</div>
);

export default Summary;
