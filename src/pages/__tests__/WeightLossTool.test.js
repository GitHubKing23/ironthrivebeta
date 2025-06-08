import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WeightLossTool from '../WeightLossTool';

test('renders BMI Calculator heading', () => {
  render(
    <BrowserRouter>
      <WeightLossTool />
    </BrowserRouter>
  );
  expect(screen.getByText(/bmi calculator/i)).toBeInTheDocument();
});

