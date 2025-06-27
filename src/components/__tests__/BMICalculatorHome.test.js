import { render, screen, fireEvent } from '@testing-library/react';
import BMICalculatorHome from '../BMICalculatorHome';
import { BrowserRouter } from 'react-router-dom';

test('calculates BMI and displays result', () => {
  render(
    <BrowserRouter>
      <BMICalculatorHome />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByPlaceholderText(/weight/i), {
    target: { value: '70' },
  });
  fireEvent.change(screen.getByPlaceholderText(/height/i), {
    target: { value: '170' },
  });
  fireEvent.click(screen.getByRole('button', { name: /calculate/i }));

  expect(screen.getByText(/your bmi is/i)).toBeInTheDocument();
});
