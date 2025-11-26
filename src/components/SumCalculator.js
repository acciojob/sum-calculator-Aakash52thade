import React, { useEffect, useState } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    const num = parseInt(value);
    
    if (!isNaN(num)) {
      // Add the new number to our array (accumulate)
      setNumbers(prev => [...prev, num]);
    }
  };

  // Async sum calculation
  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sum Calculator</h2>
      <input 
        type="number" 
        value={inputValue} 
        onChange={handleChange}
      />
      <h3>Total Sum: {sum}</h3>
      {/* <div>
        <p>All numbers: {numbers.join(' + ')}</p>
      </div> */}
    </div>
  );
};

export default SumCalculator;