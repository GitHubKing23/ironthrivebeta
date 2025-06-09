import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AffiliateCMS from '../AffiliateCMS';

beforeEach(() => {
  localStorage.setItem('affiliateCmsAuth', 'true');
});

afterEach(() => {
  localStorage.clear();
});

test('renders Affiliate CMS heading', () => {
  render(
    <BrowserRouter>
      <AffiliateCMS />
    </BrowserRouter>
  );
  expect(screen.getByText(/manage affiliates/i)).toBeInTheDocument();
});
