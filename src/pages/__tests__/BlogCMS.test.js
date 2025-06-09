import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogCMS from '../BlogCMS';

test('renders Blog CMS heading', () => {
  render(
    <BrowserRouter>
      <BlogCMS />
    </BrowserRouter>
  );
  expect(screen.getByText(/manage blog posts/i)).toBeInTheDocument();
});
