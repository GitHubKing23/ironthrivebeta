import React, { useState, useEffect } from 'react';
import '../styles/AffiliateCMS.css';

const AffiliateCMS = () => {
  const [affiliates, setAffiliates] = useState(() => {
    const stored = localStorage.getItem('affiliates');
    return stored ? JSON.parse(stored) : [];
  });

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    localStorage.setItem('affiliates', JSON.stringify(affiliates));
  }, [affiliates]);

  const handleAdd = (e) => {
    e.preventDefault();
    const newAffiliate = { name, image, description, link };
    setAffiliates([...affiliates, newAffiliate]);
    setName('');
    setImage('');
    setDescription('');
    setLink('');
  };

  const handleDelete = (index) => {
    setAffiliates(affiliates.filter((_, i) => i !== index));
  };

  return (
    <div className="affiliate-cms-page">
      <h1>Manage Affiliates</h1>
      <form className="affiliate-form" onSubmit={handleAdd}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit">Add Affiliate</button>
      </form>

      <div className="affiliate-list">
        {affiliates.map((a, index) => (
          <div key={index} className="affiliate-item">
            {a.image && <img src={a.image} alt={a.name} />}
            <h2>{a.name}</h2>
            <p>{a.description}</p>
            <a href={a.link} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
            <button
              type="button"
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateCMS;
