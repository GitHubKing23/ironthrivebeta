import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Blog from '../Blog';

test('renders Blog page heading', () => {
  render(
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  );
  expect(screen.getByText(/our blog/i)).toBeInTheDocument();
});
