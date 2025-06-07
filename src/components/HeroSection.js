// src/components/HeroSection.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../styles/HeroSection.css'; // Import the HeroSection CSS file

const HeroSection = () => {
  useEffect(() => {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const button = document.querySelector('.cta-button');

    setTimeout(() => {
      title.classList.add('animate-title');
      subtitle.classList.add('animate-subtitle');
      button.classList.add('animate-button');
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Fitness Journey with IronThrive</h1>
        <p className="hero-subtitle">Personalized training and expert advice to help you succeed.</p>

        {/* Use Link for navigation to Contact page */}
        <Link to="/contact" className="cta-button">Get Started</Link>
      </div>
    </div>
  );
};

export default HeroSection;

