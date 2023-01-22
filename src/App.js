import "./styles.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const setIncrease = () => {
    setNumber(number + 1);
  };

  const setDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <div className="App">
      <button onClick={setDecrease}>-</button>
      <span>{number}</span>
      <button onClick={setIncrease}>+</button>

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
