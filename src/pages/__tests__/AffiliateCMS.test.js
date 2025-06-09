import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AffiliateCMS from '../AffiliateCMS';

test('renders Affiliate CMS heading', () => {
  render(
    <BrowserRouter>
      <AffiliateCMS />
    </BrowserRouter>
  );
  expect(screen.getByText(/manage affiliates/i)).toBeInTheDocument();
});
