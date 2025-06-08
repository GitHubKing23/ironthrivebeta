import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('renders Footer contact info', () => {
  render(<Footer />);
  expect(screen.getByText(/ironthrive/i)).toBeInTheDocument();
});
