import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TailwindHero = ({ backgroundImage, location = 'Your City', trainerName = 'Your Trainer' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 text-white">
          <Link to="/" className="font-bold text-2xl">IronThrive</Link>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/coaching" className="hover:text-yellow-400">Coaching</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-black/90 text-white p-4 space-y-2">
            <li><Link to="/about" className="block" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/coaching" className="block" onClick={() => setMenuOpen(false)}>Coaching</Link></li>
            <li><Link to="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/blog" className="block" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          </ul>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 items-center pl-6 md:pl-20 text-left text-white">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-yellow-500">Take Your Fitness</span>
            <br className="hidden sm:block" />
            <span> To The Next Level</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-xl">
            {`Premium Online Personal Training in ${location} with ${trainerName}`}
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-600"
          >
            Start Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TailwindHero;
