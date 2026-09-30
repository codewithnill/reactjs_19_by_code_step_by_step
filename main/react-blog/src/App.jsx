import { useState } from "react";

function App() {
  const [count,setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {
        count == 0 ? <h1>Cond 0</h1> : count == 1 ? <h1>Cond 1</h1> : <h1>Cond 2</h1>
      }
    </div>
  );
}

export default App;