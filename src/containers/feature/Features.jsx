import React from 'react';
import Article from '../../components/article/Article';
import { Modular, Cost, Time, Scalibility, Inter, Client } from './imports';
import './feature.css';
import { FadeInDelaySection } from '../../components/animations/FadeInDelaySection';


const Features = () => {

  return (
    <>
      <div className="syc__card section__padding" id="features">
        <br />
        <div className="syc__features-heading">
          <h1 className="gradient__text">Key Features of Our Approach</h1>
        </div>
        <br />
        <br />
        <div className="syc__card-container">
          <div className="syc__card-container_groupB">
            <FadeInDelaySection delay={1.0}>
              <Article imgUrl={Modular} heading="Modular Development" text="We embrace a modular design philosophy that allows us to break down complex systems into interconnected, interchangeable modules. This not only accelerates development but also facilitates scalability and ease of maintenance" />
            </FadeInDelaySection>
            <FadeInDelaySection delay={2.0}>
              <Article imgUrl={Cost} heading="Cost Efficiency" text="By leveraging a modular strategy, we significantly reduce development costs. The reuse of standardized modules across projects minimizes redundancies, optimizes resource utilization, and ultimately provides cost-effective solutions for our clients" />
            </FadeInDelaySection>
            <FadeInDelaySection delay={3.0}>
              <Article imgUrl={Time} heading="Time Optimization" text="Our streamlined modular development process expedites project timelines. By eliminating the need to reinvent the wheel for each project, we can deliver high-quality solutions in shorter timeframes, enabling our clients to stay ahead in their rapidly evolving industries" />
            </FadeInDelaySection>
            <FadeInDelaySection delay={4.0}>
              <Article imgUrl={Scalibility} heading="Scalability" text="The modular nature of our systems inherently supports scalability. Whether our clients require an initial deployment or aim for extensive expansions, our solutions can seamlessly grow to meet their evolving needs without compromising efficiency" />
            </FadeInDelaySection>
            <FadeInDelaySection delay={5.0}>
              <Article imgUrl={Inter} heading="Interdisciplinary Expertise" text="Our team comprises experts with diverse skills, from software and hardware engineering to data science and cybersecurity. This interdisciplinary approach ensures that our CPS solutions are robust, secure, and at the forefront of technological innovation" />
            </FadeInDelaySection>
            <FadeInDelaySection delay={9.0}>
              <Article imgUrl={Client} heading="Client-Centric Solutions" text="We prioritize understanding the unique requirements of each client. Our solutions are tailor-made to address specific industry challenges, providing a competitive edge and ensuring maximum value for our clients" />
            </FadeInDelaySection>
          </div>
        </div>
      </div>
    </>
  )


};

export default Features;
