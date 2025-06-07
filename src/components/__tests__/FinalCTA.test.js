import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FinalCTA from '../FinalCTA';

test('renders final CTA', () => {
  render(
    <MemoryRouter>
      <FinalCTA />
    </MemoryRouter>
  );
  expect(screen.getByText(/get started today!/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /contact us/i })).toBeInTheDocument();
});
