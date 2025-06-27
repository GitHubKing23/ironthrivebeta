import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="mt-0 md:mt-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-20 px-6 md:px-12 rounded-t-3xl shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        IronThrive is dedicated to helping you reach your fitness goals with personalized plans, expert advice, and consistent support. Whether you're just starting out or aiming for new milestones, we're here to guide you every step of the way.
      </p>
    </section>
  );
};

export default AboutSection;
