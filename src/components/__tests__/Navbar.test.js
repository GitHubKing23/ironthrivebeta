import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

test('renders navbar links', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Pricing')).toBeInTheDocument();
  expect(screen.getByText('Admin ▾')).toBeInTheDocument();
});
