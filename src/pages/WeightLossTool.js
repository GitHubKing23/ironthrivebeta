import React, { useState } from 'react';
import '../styles/WeightLossTool.css';

const WeightLossTool = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!isNaN(h) && !isNaN(w) && h > 0) {
      const bmiValue = w / ((h / 100) ** 2);
      setBmi(bmiValue.toFixed(2));
    }
  };

  return (
    <div className="weight-loss-tool">
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI} className="bmi-form">
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      {bmi && <p className="bmi-result">Your BMI is {bmi}</p>}
    </div>
  );
};

export default WeightLossTool;
