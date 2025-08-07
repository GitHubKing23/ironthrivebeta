import React, { useState, useEffect } from 'react';
import '../styles/Shop.css';

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('shopItems');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      {items.length === 0 && <p>No products available yet.</p>}
      <div className="shop-grid">
        {items.map((item, index) => (
          <div className="shop-item" key={index}>
            {item.image && <img src={item.image} alt={item.name} />}
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {item.price && <p className="price">${item.price}</p>}
            <a href={`mailto:shop@ironthrive.com?subject=Purchase%20Inquiry:%20${encodeURIComponent(item.name)}`}>Email to Purchase</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
