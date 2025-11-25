import React, { useEffect, useState } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Runs on every input change (typing or arrow key)
  const handleChange = (e) => {
    const val = e.target.value;

    setInputValue(val);

    const num = parseInt(val);

    if (!isNaN(num)) {
      setNumbers((prev) => [...prev, num]); // add value to array
    }
  };

  // async sum calculation
  useEffect(() => {
    const calculateSum = () => {
      setTimeout(() => {
        const total = numbers.reduce((acc, curr) => acc + curr, 0);
        setSum(total);
      }, 0);
    };

    if (numbers.length > 0) calculateSum();
  }, [numbers]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={inputValue}
        placeholder="Enter Number"
        onChange={handleChange}    // typing updates
        onKeyUp={handleChange}     // arrow up/down updates
      />

      <h3>Total Sum: {sum}</h3>
    </div>
  );
};

export default SumCalculator;
