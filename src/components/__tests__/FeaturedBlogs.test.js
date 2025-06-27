import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedBlogs from '../FeaturedBlogs';

test('renders featured blogs header', () => {
  render(
    <BrowserRouter>
      <FeaturedBlogs />
    </BrowserRouter>
  );
  expect(screen.getByText(/latest from the blog/i)).toBeInTheDocument();
});
