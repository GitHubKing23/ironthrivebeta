import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AffiliateCMS from '../AffiliateCMS';

<<<<<<< ours
beforeEach(() => {
  localStorage.clear();
});

test('shows CMS dashboard after login', async () => {
=======
test('renders Affiliate CMS heading after login', () => {
>>>>>>> theirs
  render(
    <BrowserRouter>
      <AffiliateCMS />
    </BrowserRouter>
  );
<<<<<<< ours
=======

  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInput, { target: { value: '7vY3p$92q' } });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(screen.getByText(/manage affiliates/i)).toBeInTheDocument();
});
>>>>>>> theirs

  // Simulate login
  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInput, { target: { value: 'secret' } });

  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);

  // Wait for dashboard items
  expect(await screen.findByText(/manage blog posts/i)).toBeInTheDocument();
  expect(await screen.findByText(/manage affiliates/i)).toBeInTheDocument();
});
