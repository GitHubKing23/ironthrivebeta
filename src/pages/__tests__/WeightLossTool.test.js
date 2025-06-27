import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WeightLossTool from '../WeightLossTool';

test('displays BMI category table after calculation', () => {
  render(
    <BrowserRouter>
      <WeightLossTool />
    </BrowserRouter>
  );

  expect(screen.getByText(/bmi calculator/i)).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText(/height/i), {
    target: { value: '170' },
  });
  fireEvent.change(screen.getByPlaceholderText(/weight/i), {
    target: { value: '65' },
  });
  fireEvent.click(screen.getByRole('button', { name: /calculate/i }));

  expect(screen.getByText(/bmi categories/i)).toBeInTheDocument();
  expect(screen.getByText(/normal weight/i)).toBeInTheDocument();
});
