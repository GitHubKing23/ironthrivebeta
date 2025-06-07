import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from '../HeroSection';

test('renders hero heading and button', () => {
  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  );
  expect(
    screen.getByText(/transform your fitness journey/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /get started/i })
  ).toBeInTheDocument();
});
