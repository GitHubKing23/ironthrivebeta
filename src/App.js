// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { initGA, logPageView } from './googleAnalytics';  // Import GA functions

import Home from './pages/Home';
import Blog from './pages/Blog';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <AppContent />
      <Footer />
    </Router>
  );
}

// A new component to handle page view logging
const AppContent = () => {
  const location = useLocation(); // useLocation hook to track route changes

  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view

    // Log page view whenever the location changes
    logPageView();
  }, [location]); // Trigger this effect when location changes

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
