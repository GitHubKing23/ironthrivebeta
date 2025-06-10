import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogCMS from '../BlogCMS';

test('renders Blog CMS heading after login', () => {
  localStorage.clear(); // Ensure a clean login state

  render(
    <BrowserRouter>
      <BlogCMS />
    </BrowserRouter>
  );

  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInput, { target: { value: '7vY3p$92q' } });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(screen.getByText(/manage blog posts/i)).toBeInTheDocument();
});
