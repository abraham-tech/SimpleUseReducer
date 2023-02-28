import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(0);
  function increment() {
    setState((preState) => preState + 1);
  }
  function decrement() {
    setState((preState) => preState - 1);
  }
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      {state}
      <button onClick={decrement}>-</button>
    </div>
  );
}
