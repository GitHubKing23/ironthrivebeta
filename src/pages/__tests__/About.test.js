import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../About';

test('renders About page heading', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(screen.getByText(/about ironthrive/i)).toBeInTheDocument();
});
