import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  const increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const equal = () => {
    setCount(0);
  };
  return (
    <div>
      <div className="container">
        <h1>Counter</h1>
        <span style={{ color: color }} id="value">
          {count}
        </span>
        <div className="btn-group">
          <button onClick={decrease} className="btn btn-decrease">
            decrease
          </button>
          <button onClick={equal} className="btn btn-reset">
            reset
          </button>
          <button onClick={increment} className="btn btn-increase">
            increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
