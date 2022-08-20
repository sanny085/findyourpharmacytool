import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
    </div>
  );
}

export default App;
