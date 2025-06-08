// src/pages/Pricing.js
import React from 'react';
import PricingCard from '../components/PricingCard';
import '../styles/Pricing.css'; // Import the CSS for Pricing Page

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h1>Our Pricing</h1>

      {/* Container for pricing cards */}
      <div className="pricing-container">
        {/* Personal Session Card */}
        <PricingCard
          title="Personal Sessions"
          price="60"
          duration="per 1 Hour"
          description="Experience personalized training with our expert trainers. Achieve your goals faster with dedicated attention."
          ctaText="Book Personal Session"
        />

        {/* Group Session Card */}
        <PricingCard
          title="Group Sessions"
          price="25"
          duration="per Person"
          description="Work out in a group environment with a maximum of 5 people per session. Stay motivated while achieving your goals."
          ctaText="Book Group Session"
        />
      </div>
    </div>
  );
};

export default Pricing;
