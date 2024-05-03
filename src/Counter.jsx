import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <div className="container">
        <p>{count}</p>
        <div className="buttons">
          <button onClick={() => setCount((a) => a + 1)}>Increse</button>
          <button
            style={{ backgroundColor: "#C65BCF" }}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            style={{ backgroundColor: "#C40C0C" }}
            onClick={() => setCount(count - 1)}
          >
            Decrese
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
