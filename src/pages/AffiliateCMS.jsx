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
    console.log('[AffiliateCMS] Updated localStorage:', affiliates);
  }, [affiliates]);

  const handleAdd = (e) => {
    e.preventDefault();
    const newAffiliate = { name, image, description, link };
    console.log('[AffiliateCMS] Adding affiliate:', newAffiliate);
    setAffiliates([...affiliates, newAffiliate]);
    setName('');
    setImage('');
    setDescription('');
    setLink('');
  };

  const handleDelete = (index) => {
    console.log('[AffiliateCMS] Deleting affiliate at index:', index);
    setAffiliates(affiliates.filter((_, i) => i !== index));
  };

  return (
    <div className="affiliate-cms-page" data-testid="affiliate-cms-page">
      <h1 data-testid="heading">Manage Affiliates</h1>

      <form className="affiliate-form" onSubmit={handleAdd}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="input-name"
          required
        />
        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          data-testid="input-image"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          data-testid="input-description"
          required
        />
        <input
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          data-testid="input-link"
          required
        />
        <button type="submit" data-testid="add-button">Add Affiliate</button>
      </form>

      <div className="affiliate-list" data-testid="affiliate-list">
        {affiliates.map((a, index) => (
          <div key={index} className="affiliate-item" data-testid="affiliate-item">
            {a.image && <img src={a.image} alt={a.name} />}
            <h2>{a.name}</h2>
            <p>{a.description}</p>
            <a href={a.link} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
            <button
              type="button"
              className="delete-button"
              data-testid={`delete-button-${index}`}
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
