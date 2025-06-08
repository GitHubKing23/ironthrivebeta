// src/googleAnalytics.js
import ReactGA from 'react-ga4';

// Initialize Google Analytics with your GA4 Measurement ID
export const initGA = () => {
  ReactGA.initialize('G-JGMK81K12C');  // Replace with your GA4 Measurement ID
};

// Log page views
export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};
