import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ShopCMS from '../ShopCMS';

beforeEach(() => {
  localStorage.clear();
});

test('shows CMS dashboard after login', async () => {
  render(
    <BrowserRouter>
      <ShopCMS />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInput, { target: { value: '7vY3p$92q' } });

  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);

  expect(await screen.findByText(/manage shop items/i)).toBeInTheDocument();
});
