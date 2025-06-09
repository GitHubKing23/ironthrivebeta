import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pricing from '../Pricing';

test('renders Pricing page heading', () => {
  render(
    <BrowserRouter>
      <Pricing />
    </BrowserRouter>
  );
  expect(screen.getByText(/our pricing/i)).toBeInTheDocument();
});
