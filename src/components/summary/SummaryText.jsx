import React from 'react';
import './summary.css';
import { FadeLeftSection } from '../animations/FadeLeftSection';

const SummaryText = () => (
  <div className="syc__features-container__summary">
    <div className="syc__features-container_summary-text"  style={{ animation: 'slideInFromLeft 1s ease-in-out', position: 'relative', zIndex: 1 }}>
      <FadeLeftSection>
        <p>Our company leverages the expertise of a dedicated development team to provide comprehensive solutions for our clients in the realm of cyber-physical systems. By strategically combining the skills of front-end and back-end developers, along with proficiency in various technologies, we offer the capabilities of a full-stack team. This approach not only ensures end-to-end development but also optimizes costs for our clients. Our experienced professionals bring versatility, efficiency, and a deep understanding of both hardware and software aspects, delivering high-quality solutions without the need for clients to assemble and manage an entire in-house development team. We enable businesses to harness the power of full-stack development at a fraction of the cost, making the development and management of advanced cyber-physical systems accessible and affordable.</p>
      </FadeLeftSection>
    </div>
  </div>
);

export default SummaryText;
