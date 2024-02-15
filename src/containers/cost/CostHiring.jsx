import React, { Fragment } from 'react';
import Cost from '../../components/cost/Cost';
import './costHiring.css';
import { FadeLeftSection } from '../../components/animations/FadeLeftSection';

const costData = [
  {
    title: 'Junior Full-Stack Developer',
    text: '● Entry-level or less than 2 years of experience',
    text2: '● Annual salary: $60,000 to $90,000',
  },
  {
    title: 'Mid-Level Full-Stack Developer',
    text: '● 2 to 5 years of experience',
    text2: '● Annual salary: $80,000 to $120,000',
  },
  {
    title: 'Senior Full-Stack Developer',
    text: '● 5+ years of experience',
    text2: '● Annual salary: $100,000 to $150,000 or more',
  },
  {
    title: 'Lead/Principal Full-Stack Developer',
    text: '● Extensive experience, possibly in a leadership role',
    text2: '● Annual salary: $120,000 to $180,000 and above',
  },
];

const CostHiring = () => (

  <div className="syc__features section__padding" id="cost">
    <div className="syc__features-heading" style={{ animation: 'slideInFromLeft 1s ease-in-out', position: 'relative', zIndex: 1 }}>
      <FadeLeftSection>
        <h1 className="gradient__text" style={{ fontSize: '18px', lineHeight: '30px' }}>The cost of hiring a full-stack developer in America can vary significantly based on several factors, including the developers experience, location, and the specific technologies involved. Here are some general ranges</h1>
      </FadeLeftSection>
    </div>
    <div className="syc__features-container">
      {costData.map((item, index) => (
        <Cost
          title={item.title}
          text={(
            <Fragment>
              {item.text}
              <br />
              {item.text2}
            </Fragment>
          )}
          key={item.title + index}
        />
      ))}
    </div>
  </div>
);

export default CostHiring;
