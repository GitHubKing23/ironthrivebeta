// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Correct path to Footer.css in the 'styles' folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 IronThrive</p>
        <p>Call us: <a href="tel:+14372395699">+1 (437) 239-5699</a></p>
      </div>
    </footer>
  );
};

export default Footer;
