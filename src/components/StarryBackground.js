// src/components/StarryBackground.js
import React, { useEffect } from 'react';
import './StarryBackground.css';

const StarryBackground = () => {
  useEffect(() => {
    const starsCount = 200; // Adjusted to make more stars
    const starContainer = document.getElementById('star-container');

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      star.style.top = `${Math.random() * 100}vh`; // Random vertical position
      star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random twinkling duration
      starContainer.appendChild(star);
    }
  }, []);

  return <div id="star-container" className="star-container"></div>;
};

export default StarryBackground;
