import React from 'react';
import TailwindHero from '../components/TailwindHero';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';
import heroImage from '../assets/hero.png'; // ✅ Correct image import

const Home = () => {
  return (
    <div>
      <TailwindHero
        backgroundImage={heroImage}
        location="Your City"
        trainerName="Your Trainer"
      />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Home;
