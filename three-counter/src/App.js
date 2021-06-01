import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter App using State</h1>
      </header>
      <h2>Counter Value: {count}</h2>
      <button onClick={() => setCount(0)}>Reset Button</button>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>
        Increase Button
      </button>
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>
        Decrease Button
      </button>
    </div>
  );
};

export default App;
