// src/components/FeaturesSection.js
import React from 'react';
import '../styles/FeaturesSection.css'; // Import the FeaturesSection CSS file

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <h2>Our Services</h2>
      <p>We provide expert guidance and personalized training to help you achieve your fitness goals.</p>
      <div className="features">
        <div className="feature-item">
          <h3>Personalized Training</h3>
          <p>Get custom workout plans tailored to your goals.</p>
        </div>
        <div className="feature-item">
          <h3>Expert Advice</h3>
          <p>Receive professional guidance on fitness and nutrition.</p>
        </div>
        <div className="feature-item">
          <h3>Progress Tracking</h3>
          <p>Track your fitness journey and measure your success.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
