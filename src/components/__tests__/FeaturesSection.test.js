import { render, screen } from '@testing-library/react';
import FeaturesSection from '../FeaturesSection';

test('renders features heading', () => {
  render(<FeaturesSection />);
  expect(screen.getByText(/our services/i)).toBeInTheDocument();
  expect(screen.getAllByText(/personalized training/i).length).toBeGreaterThan(0);
});
