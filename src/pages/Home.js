import React from 'react';
import TailwindHero from '../components/TailwindHero';
import heroImage from '../assets/hero.png';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <div>
      <TailwindHero backgroundImage={heroImage} location="Your City" trainerName="Your Trainer" />
      
      {/* Spacer to prevent overlap */}
      <div className="h-16 md:h-24" />

      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Home;
