import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

test('renders about section heading', () => {
  render(<AboutSection />);
  expect(screen.getByText(/who we are/i)).toBeInTheDocument();
});
