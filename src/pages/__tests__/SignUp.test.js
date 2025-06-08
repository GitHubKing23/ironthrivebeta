import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios', () => ({ post: jest.fn() }));

import SignUp from '../SignUp';

test('renders Sign Up page heading', () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );
  expect(screen.getByText(/sign up for ironthrivebeta/i)).toBeInTheDocument();
});

