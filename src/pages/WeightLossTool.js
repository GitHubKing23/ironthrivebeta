import React, { useState } from 'react';
import '../styles/WeightLossTool.css';

const WeightLossTool = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const categories = [
    {
      label: 'Underweight',
      range: 'Less than 18.5',
      meaning: 'May indicate nutritional deficiency or underlying issue',
      recommendation: '🥗 Add calorie-dense, nutritious foods; consult a doctor',
      min: 0,
      max: 18.5,
    },
    {
      label: 'Normal weight',
      range: '18.5 – 24.9',
      meaning: 'Ideal range for most adults',
      recommendation: '🏃 Maintain current activity and eating habits',
      min: 18.5,
      max: 25,
    },
    {
      label: 'Overweight',
      range: '25.0 – 29.9',
      meaning: 'Higher risk of heart disease, diabetes, etc.',
      recommendation: '🚶 Increase physical activity; monitor food intake',
      min: 25,
      max: 30,
    },
    {
      label: 'Obesity Class I',
      range: '30.0 – 34.9',
      meaning: 'Moderate obesity; elevated health risk',
      recommendation: '🥦 Adopt a weight loss plan; consult a health professional',
      min: 30,
      max: 35,
    },
    {
      label: 'Obesity Class II',
      range: '35.0 – 39.9',
      meaning: 'Severe obesity; high risk',
      recommendation: '🏥 Supervised weight loss program strongly recommended',
      min: 35,
      max: 40,
    },
    {
      label: 'Obesity Class III',
      range: '40.0 and above',
      meaning: 'Very severe risk; often called “morbid obesity”',
      recommendation: '🩺 Immediate medical intervention advised',
      min: 40,
      max: Infinity,
    },
  ];

  const calculateBMI = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!isNaN(h) && !isNaN(w) && h > 0) {
      const bmiValue = w / ((h / 100) ** 2);
      const rounded = parseFloat(bmiValue.toFixed(2));
      setBmi(rounded);
      const match = categories.find((c) => rounded >= c.min && rounded < c.max);
      setCategory(match ? match.label : '');
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
      {bmi && (
        <>
          <p className="bmi-result">Your BMI is {bmi}</p>
          <h2>BMI Categories &amp; Recommendations</h2>
          <table className="bmi-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>BMI Range</th>
                <th>Health Meaning</th>
                <th>Recommendations</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr
                  key={c.label}
                  className={c.label === category ? 'highlight' : undefined}
                >
                  <td>{c.label}</td>
                  <td>{c.range}</td>
                  <td>{c.meaning}</td>
                  <td>{c.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default WeightLossTool;
