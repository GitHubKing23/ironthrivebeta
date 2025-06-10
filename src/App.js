// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { initGA, logPageView } from './googleAnalytics';

import Home from './pages/Home';
import Blog from './pages/Blog';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import WeightLossTool from './pages/WeightLossTool';
import Affiliates from './pages/Affiliates';
import AffiliateCMS from './pages/AffiliateCMS';
import BlogCMS from './pages/BlogCMS';

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

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tool" element={<WeightLossTool />} />
      <Route path="/affiliates" element={<Affiliates />} />
      <Route path="/admin/affiliates" element={<AffiliateCMS />} />
      <Route path="/admin/blog" element={<BlogCMS />} />
    </Routes>
  );
};

export default App;
