import React, { useEffect, useState } from 'react';

export const TypingTextAnimation = () => {
  
  const text = "Cyber-Physical Systems Company";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[index]);
      index += 1;

      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <h2 className="gradient__text" style={{ letterSpacing: '6px' }}>
      {displayedText}
    </h2>
  );
};