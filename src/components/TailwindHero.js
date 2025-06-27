// TailwindHero.js
import React from 'react';
import { Link } from 'react-router-dom';

const TailwindHero = ({ backgroundImage, location = 'Your City', trainerName = 'Your Trainer' }) => {
  const imageUrl =
    typeof backgroundImage === 'string' ? backgroundImage : backgroundImage?.default ?? '';

  return (
    <div className="relative w-full text-white min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center min-h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-yellow-500">Take Your Fitness</span>
          <br />
          To The Next Level
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
  );
};

export default TailwindHero;

