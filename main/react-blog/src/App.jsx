import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [fruit, setFruit] = useState("apple");
  const handleFruit = () => {
    setFruit("banana");
  }
  return (
    <div>
      <h1>State in react js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit name</button>
      <Counter/>
    </div>
  );
}

export default App;