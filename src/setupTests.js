// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock react-router-dom to avoid issues importing it in tests
// The mock provides minimal implementations of the components
// used in the app so that rendering does not fail in Jest.
jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Route: () => null,
    Routes: ({ children }) => <div>{children}</div>,
    Link: ({ children, to }) => <a href={to}>{children}</a>,
    useLocation: jest.fn(),
    useNavigate: () => jest.fn(),
  };
}, { virtual: true });
