import { render, screen } from '@testing-library/react';
import BlogCMS from '../BlogCMS';

test('shows Blog CMS dashboard content', () => {
  render(<BlogCMS />);

  expect(screen.getByText(/manage blog posts/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/summary/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/full content/i)).toBeInTheDocument();
});
