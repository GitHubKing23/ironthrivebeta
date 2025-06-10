import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Title aligned to the left with margin */}
        <Link to="/" className="navbar-logo">IronThrive</Link>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
          <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/tool" onClick={() => setIsMenuOpen(false)}>BMI Tool</Link></li>
          <li><Link to="/affiliates" onClick={() => setIsMenuOpen(false)}>Affiliates</Link></li>
          <li className="dropdown">
            <span
              className="dropdown-toggle"
              onClick={() => setIsAdminOpen(!isAdminOpen)}
            >
              Admin ▾
            </span>
            <ul className={`dropdown-menu ${isAdminOpen ? 'show' : ''}`}>
              <li>
                <Link
                  to="/admin/blog"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAdminOpen(false);
                  }}
                >
                  Blog CMS
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/affiliates"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAdminOpen(false);
                  }}
                >
                  Affiliate CMS
                </Link>
              </li>
            </ul>
          </li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
