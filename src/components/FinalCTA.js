// src/components/FinalCTA.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FinalCTA.css';  // Import the FinalCTA CSS file

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="final-cta">
      <h2>Get Started Today!</h2>
      <button className="cta-button" onClick={() => navigate('/contact')}>Contact Us</button>
    </div>
  );
};

export default FinalCTA;
