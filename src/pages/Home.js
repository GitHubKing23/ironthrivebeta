import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TailwindHero from '../components/TailwindHero';
import heroImage from '../assets/fitness-hero.svg';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';
import WeightLossTool from './WeightLossTool';
import '../styles/HomeExtras.css';
import { defaultBlogPosts } from '../data/defaultBlogPosts';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('blogPosts');
    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      localStorage.setItem('blogPosts', JSON.stringify(defaultBlogPosts));
      setPosts(defaultBlogPosts);
    }
  }, []);

  const previewPosts = posts.slice(-3);

  return (
    <div>
      <TailwindHero backgroundImage={heroImage} location="Your City" trainerName="Your Trainer" />

      {/* Spacer to prevent overlap */}
      <div className="h-16 md:h-24" />

      <section className="home-bmi-section">
        <h2>Try Our BMI Calculator</h2>
        <WeightLossTool />
      </section>

      <section className="home-blog-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-preview-container">
          {previewPosts.map((post) => (
            <div key={post.id} className="blog-preview">
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </div>
          ))}
        </div>
        <Link to="/blog" className="more-link">Read our Blog</Link>
      </section>

      <section className="home-affiliates-section">
        <h2>Our Affiliates</h2>
        <p>Explore products we recommend to enhance your training.</p>
        <Link to="/affiliates" className="more-link">View Affiliates</Link>
      </section>

      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Home;
