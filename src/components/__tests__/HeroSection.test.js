import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TailwindHero from '../TailwindHero';

test('renders hero heading and button', () => {
  render(
    <BrowserRouter>
      <TailwindHero backgroundImage="/test.jpg" />
    </BrowserRouter>
  );
  expect(
    screen.getByText(/take your fitness/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /start here/i })
  ).toBeInTheDocument();
});
