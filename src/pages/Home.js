import React from 'react';
import TailwindHero from '../components/TailwindHero';
import heroImage from '../assets/hero.png';
import BMICalculatorHome from '../components/BMICalculatorHome';
import FeaturedBlogs from '../components/FeaturedBlogs';

const Home = () => {
  return (
    <div>
      <TailwindHero backgroundImage={heroImage} location="Your City" trainerName="Your Trainer" />
      
      {/* Spacer to prevent overlap */}
      <div className="h-16 md:h-24" />

      <BMICalculatorHome />
      <FeaturedBlogs />
    </div>
  );
};

export default Home;
