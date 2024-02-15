import React from 'react';
import './article.css';
import { FadeRightSection } from '../animations/FadeRightSection';

const Article = ({ imgUrl, heading, text }) => (
  <div className="syc__card-container_article">
    <div className="syc__card-container_article-image">
      <img src={imgUrl} alt="card_image" />
    </div>
    <div className="syc__card-container_article-content" >
      <FadeRightSection>
        <div style={{ animation: 'slideInFromRight 1s ease-in-out', position: 'relative', zIndex: 1 }}>
          <p className='gradient__text'>{heading}</p>
          <h3>{text}</h3>
        </div>
      </FadeRightSection>
    </div>
  </div>
);

export default Article;
