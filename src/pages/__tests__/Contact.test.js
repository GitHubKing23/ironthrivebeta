import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactForm from '../Contact';

test('renders Contact page heading', () => {
  render(
    <BrowserRouter>
      <ContactForm />
    </BrowserRouter>
  );
  expect(screen.getByText(/contact us/i)).toBeInTheDocument();
});

