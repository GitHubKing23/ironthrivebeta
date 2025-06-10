import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (adminOpen) setAdminOpen(false); // close admin if menu is toggled
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">IronThrive</Link>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/pricing" onClick={toggleMenu}>Pricing</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/tool" onClick={toggleMenu}>BMI Tool</Link></li>
          <li><Link to="/affiliates" onClick={toggleMenu}>Affiliates</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>

          {/* Admin Dropdown */}
          <li className="dropdown">
            <span onClick={() => setAdminOpen(!adminOpen)}>
              Admin ▾
            </span>
            {adminOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/blog-cms" onClick={() => { toggleMenu(); setAdminOpen(false); }}>
                    Manage Blog Posts
                  </Link>
                </li>
                <li>
                  <Link to="/affiliate-cms" onClick={() => { toggleMenu(); setAdminOpen(false); }}>
                    Manage Affiliate Products
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
