import React from 'react';
import './future.css';
import { FadeLeftSection } from '../../components/animations/FadeLeftSection';

const Future = () => (
    <div className="syc__future section__margin" id="future">
        <div className="syc__future-heading">
            <h1 className="gradient__text" style={{fontSize:"26px"}}>Welcome to the Future of Connectivity!</h1>
        </div>
        <div className="syc__future-container">
            <div className="syc__features-container__future">
                <div className="syc__features-container_future-text" style={{ animation: 'slideInFromRight 1s ease-in-out', position: 'relative', zIndex: 1 }}>
                    <FadeLeftSection>
                        <p>At SYC CORP, we're not just in the business of technology - we're in the business of shaping the future. Welcome to the cutting edge, where cyber and physical worlds seamlessly merge to create a symphony of innovation. Elevate your operations, transcend limitations, and embrace the next frontier with our state-of-the-art Cyber-Physical Systems</p>
                    </FadeLeftSection>
                </div>
            </div>
        </div>
    </div>
);

export default Future;
