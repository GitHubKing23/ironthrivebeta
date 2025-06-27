import React, { useState } from 'react';
import '../styles/BMICalculatorHome.css';

const BMICalculatorHome = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!isNaN(w) && !isNaN(h) && h > 0) {
      const bmi = w / ((h / 100) ** 2);
      const rounded = bmi.toFixed(1);
      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal Weight';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obesity';
      setResult(`Your BMI is ${rounded} - ${category}`);
    }
  };

  return (
    <section className="home-bmi">
      <h2>Check Your BMI</h2>
      <form onSubmit={calculateBMI} className="bmi-form">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      {result && <div className="bmi-result">{result}</div>}
    </section>
  );
};

export default BMICalculatorHome;
