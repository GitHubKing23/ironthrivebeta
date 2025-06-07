import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

test('renders home page hero section', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const heading = screen.getByText(/transform your fitness journey/i);
  expect(heading).toBeInTheDocument();
});
