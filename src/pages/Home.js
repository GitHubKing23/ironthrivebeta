import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WeightLossTool from './WeightLossTool';
import heroImage from '../assets/hero.png'; // Correct path
import '../styles/HeroSection.css';
import '../styles/HomeExtras.css';

const Home = () => {
  useEffect(() => {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const button = document.querySelector('.cta-button');

    setTimeout(() => {
      title?.classList.add('animate-title');
      subtitle?.classList.add('animate-subtitle');
      button?.classList.add('animate-button');
    }, 300);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="section hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to IronThrive</h1>
          <p className="hero-subtitle">Your journey to fitness starts now</p>
          <Link to="/signup" className="cta-button">Join Now</Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section who-we-are-section">
        <h2>Who We Are</h2>
        <p>
          IronThrive is a passionate community dedicated to helping you become your strongest self—
          mentally and physically. Join us as we build lasting habits, powerful workouts, and
          healthy routines.
        </p>
      </section>

      {/* BMI Section */}
      <section className="section home-bmi-section">
        <h2>Try Our BMI Calculator</h2>
        <WeightLossTool />
      </section>

      {/* Blog Section */}
      <section className="section home-blog-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-preview-container">
          <div className="blog-preview">Blog post 1 coming soon</div>
          <div className="blog-preview">Blog post 2 coming soon</div>
          <div className="blog-preview">Blog post 3 coming soon</div>
        </div>
        <Link to="/blog" className="more-link">Read our Blog</Link>
      </section>

      {/* Affiliates Section */}
      <section className="section home-affiliates-section">
        <h2>Our Affiliates</h2>
        <p>Explore products we recommend to enhance your training.</p>
        <Link to="/affiliates" className="more-link">View Affiliates</Link>
      </section>

      {/* Final Call to Action */}
      <section className="section final-cta">
        <h2>Ready to Thrive?</h2>
        <p>Take the first step towards transforming your life today.</p>
        <Link to="/signup" className="cta-circle-button" aria-label="Get Started">→</Link>
      </section>
    </div>
  );
};

export default Home;
