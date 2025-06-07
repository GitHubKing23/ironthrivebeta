import React from 'react';
import '../styles/Affiliates.css';

const Affiliates = () => {
  return (
    <div className="affiliates-page">
      <h1>Affiliates</h1>
      <p>These are our recommended products to level up your training.</p>
      <div className="affiliate-item">
        <img
          src="https://images.unsplash.com/photo-1600185365525-61df8b9baa20?w=640"
          alt="Jump Rope"
        />
        <h2>Jump Rope</h2>
        <p>A simple tool for effective cardio and coordination.</p>
        <a
          href="https://example.com/jump-rope"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Affiliates;
