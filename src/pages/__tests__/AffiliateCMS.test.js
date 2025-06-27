import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AffiliateCMS from '../AffiliateCMS';

beforeEach(() => {
  localStorage.clear();
});

test('shows CMS dashboard after login', async () => {
  render(
    <BrowserRouter>
      <AffiliateCMS />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInput, { target: { value: '7vY3p$92q' } });

  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);

  expect(await screen.findByText(/manage affiliates/i)).toBeInTheDocument();
});
