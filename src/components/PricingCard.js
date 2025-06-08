// src/components/PricingCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PricingCard.css'; // Import the CSS for this component

const PricingCard = ({ title, price, duration, description, ctaText }) => {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="pricing-info">
        <span className="price">${price}</span>
        <span className="duration">{duration}</span>
      </div>
      <p className="description">{description}</p>
      {/* CTA Button */}
      <Link to="/signup">
        <button className="cta-button">{ctaText}</button>
      </Link>
    </div>
  );
};

export default PricingCard;
