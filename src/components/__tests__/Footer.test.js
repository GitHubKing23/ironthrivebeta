import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('renders footer content', () => {
  render(<Footer />);
  expect(screen.getByText(/ironthrive/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /\+1 \(437\) 239-5699/i })).toBeInTheDocument();
});
