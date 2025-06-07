// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Home;
