import Counter from "./Counter";
import {useState} from "react";

function App() {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState(0);
  
  return (
    <div>
      <h1>handle props side effect with useEffect in component</h1>
      <Counter count={count} data={data}/>  
      <button onClick={() => setCounter(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  );
}

export default App;