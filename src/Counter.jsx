import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => setCount(0);
  return (
    <div>
      <p>No of Clicks: {count}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
