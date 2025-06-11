import React, { useState, useEffect } from 'react';
import '../styles/Affiliates.css';

const getEmbedUrl = (url) => {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const defaultAffiliates = [
  {
    name: 'Jump Rope',
    image: 'https://images.unsplash.com/photo-1600185365525-61df8b9baa20?w=640',
    description: 'A simple tool for effective cardio and coordination.',
    link: 'https://example.com/jump-rope',
  },
];

const Affiliates = () => {
  const [affiliates, setAffiliates] = useState(defaultAffiliates);

  useEffect(() => {
    const stored = localStorage.getItem('affiliates');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.length) {
        setAffiliates(parsed);
      }
    }
  }, []);

  return (
    <div className="affiliates-page">
      <h1>Affiliates</h1>
      <p>These are our recommended products to level up your training.</p>
      <div className="affiliate-grid">
        {affiliates.map((a, index) => (
          <div className="affiliate-item" key={index}>
            <img src={a.image} alt={a.name} />
            <h2>{a.name}</h2>
            <p>{a.description}</p>
            {a.video && (
              <iframe
                src={getEmbedUrl(a.video)}
                title={a.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <a href={a.link} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliates;
