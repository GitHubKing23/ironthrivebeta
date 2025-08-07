import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

afterEach(() => {
  localStorage.clear();
});

test('displays blog posts from localStorage', () => {
  const posts = [
    { id: 1, title: 'Test Post', summary: 'Summary', fullContent: 'Content' },
  ];
  localStorage.setItem('blogPosts', JSON.stringify(posts));

  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText('Test Post')).toBeInTheDocument();
});
