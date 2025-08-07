import React, { useState, useEffect } from 'react';
import '../styles/ShopCMS.css';

const ADMIN_PASSWORD = '7vY3p$92q';

const ShopCMS = () => {
  const [authenticated, setAuthenticated] = useState(() => localStorage.getItem('shopAdmin') === 'true');
  const [password, setPassword] = useState('');

  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem('shopItems');
    return stored ? JSON.parse(stored) : [];
  });

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    localStorage.setItem('shopItems', JSON.stringify(items));
  }, [items]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem('shopAdmin', 'true');
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = { name, image, description, price };
    setItems([...items, newItem]);
    setName('');
    setImage('');
    setDescription('');
    setPrice('');
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  if (!authenticated) {
    return (
      <div className="shop-cms-page">
        <h1>Admin Login</h1>
        <form className="shop-form" onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="shop-cms-page">
      <h1>Manage Shop Items</h1>
      <form className="shop-form" onSubmit={handleAdd}>
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
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>

      <div className="shop-list">
        {items.map((item, index) => (
          <div key={index} className="shop-item">
            {item.image && <img src={item.image} alt={item.name} />}
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {item.price && <p className="price">${item.price}</p>}
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

export default ShopCMS;
