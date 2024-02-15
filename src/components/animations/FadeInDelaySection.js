import React, { useEffect, useRef } from 'react';

export const FadeInDelaySection = ({ children, delay }) => {
    
    const sectionRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            sectionRef.current.classList.add('visible');
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.2,
        }
      );
  
      observer.observe(sectionRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return (
      <div ref={sectionRef} className={`fade-in`} style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    );
  };