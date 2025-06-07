import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Affiliates from '../Affiliates';

test('renders Affiliates page heading', () => {
  render(
    <BrowserRouter>
      <Affiliates />
    </BrowserRouter>
  );
  expect(screen.getByText(/affiliates/i)).toBeInTheDocument();
});
