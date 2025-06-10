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

  // Simulate login
  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInput, { target: { value: 'secret' } });

  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);

  // Wait for dashboard items
  expect(await screen.findByText(/manage blog posts/i)).toBeInTheDocument();
  expect(await screen.findByText(/manage affiliates/i)).toBeInTheDocument();
});
