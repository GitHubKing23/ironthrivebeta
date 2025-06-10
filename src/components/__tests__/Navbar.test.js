import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

test('renders navbar links including admin dropdown', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Check top-level links
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Pricing')).toBeInTheDocument();

  // Use flexible matcher for "Admin ▾" to avoid exact text issues
  expect(screen.getByText((_, node) => node?.textContent === 'Admin ▾')).toBeInTheDocument();

  // Click the Admin dropdown
  fireEvent.click(screen.getByText((_, node) => node?.textContent === 'Admin ▾'));

  // Check dropdown links
  expect(screen.getByText(/manage blog posts/i)).toBeInTheDocument();
  expect(screen.getByText(/manage affiliate products/i)).toBeInTheDocument();
});
