import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './pages/Home';

test('renders home page hero section', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const heading = screen.getByText(/transform your fitness journey/i);
  expect(heading).toBeInTheDocument();
});
