import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <p>No of Clicks: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
