// src/components/TestimonialsSection.js
import React from 'react';
import '../styles/TestimonialsSection.css'; // Import the TestimonialsSection CSS file

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        <div className="testimonial-item">
          <p>"IronThriveBeta helped me get the results I wanted. The personalized workouts were a game-changer!"</p>
          <p>- Jane Doe</p>
        </div>
        <div className="testimonial-item">
          <p>"The expert advice and tracking kept me motivated throughout my fitness journey. Highly recommend!"</p>
          <p>- John Smith</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
