import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< ours
<<<<<<< ours
  const [adminOpen, setAdminOpen] = useState(false);
=======
  const [isAdminOpen, setIsAdminOpen] = useState(false);
>>>>>>> theirs
=======
  const [isAdminOpen, setIsAdminOpen] = useState(false);
>>>>>>> theirs

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
<<<<<<< ours
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
=======
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
>>>>>>> theirs
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
