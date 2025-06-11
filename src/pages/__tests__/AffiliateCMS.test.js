import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as AffiliateCMSModule from '../AffiliateCMS.jsx';
const AffiliateCMS = AffiliateCMSModule.default;

test('renders Affiliate CMS heading after login', () => {
  localStorage.clear();
  render(
    <BrowserRouter>
      <AffiliateCMS />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInput, { target: { value: '7vY3p$92q' } });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(screen.getByText(/manage affiliates/i)).toBeInTheDocument();
});

