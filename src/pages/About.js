// src/pages/About.js
import React from 'react';
import '../styles/About.css';  // Import the About Page CSS file

const About = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <div className="about-section">
        <h1>About IronThrive</h1>
        <p>
          IronThrive is a leading personal training service focused on providing individuals with personalized workout plans, expert advice, and continuous support. Our goal is to help you reach your full potential, whether you're just starting your fitness journey or looking to push past a plateau.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At IronThrive, we believe that everyone has the potential to be their best self. Our mission is to make fitness accessible, fun, and achievable for everyone, regardless of their starting point. We aim to empower individuals with the tools, knowledge, and support to achieve their fitness goals.
        </p>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Start Your Fitness Journey Today!</h2>
        <p>Ready to take the first step? Get in touch with us and let's talk about your fitness goals!</p>
        <a href="/contact" className="cta-button">Contact Us</a> {/* Updated to link to the Contact page */}
      </div>
    </div>
  );
};

export default About;
