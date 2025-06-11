import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WeightLossTool from '../WeightLossTool';

<<<<<<< ours
test('displays BMI category table after calculation', () => {
=======
test('shows BMI category after calculation', () => {
>>>>>>> theirs
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

<<<<<<< ours
  expect(screen.getByText(/bmi categories/i)).toBeInTheDocument();
=======
  expect(screen.getByText(/your bmi is/i)).toBeInTheDocument();
>>>>>>> theirs
  expect(screen.getByText(/normal weight/i)).toBeInTheDocument();
});
