import React, { useEffect, useState } from 'react';
import { Footer, Features, CostHiring, Mission, Header } from './containers';
import { Navbar } from './components';
import './App.css';
import Summary from './containers/summary/Summary';
import { FadeInSection } from './components/animations/FadeInSection';
import { ParticleEffect } from './components/animations/ParticleEffect';
import Future from './containers/future/Future';
import ChooseUs from './containers/choose/ChooseUs';
import Tailored from './containers/tailored/Tailored';
import AboutUS from './containers/about/AboutUS';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in your actual implementation)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (

    <>
      {isLoading ? (
        <div className="custom-loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <ParticleEffect />
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <FadeInSection>
            <Mission />
          </FadeInSection>
          <FadeInSection>
            <AboutUS />
          </FadeInSection>
          <FadeInSection>
            <CostHiring />
          </FadeInSection>
          {/* <FadeInSection> */}
          <Features />
          {/* </FadeInSection> */}
          <FadeInSection>
            <Summary />
          </FadeInSection>
          <FadeInSection>
            <Future />
          </FadeInSection>
          <FadeInSection>
            <ChooseUs />
          </FadeInSection>
          <FadeInSection>
            <Tailored />
          </FadeInSection>
          <FadeInSection>
            <Footer />
          </FadeInSection>
        </>
      )}
    </>
  )

};

export default App;
