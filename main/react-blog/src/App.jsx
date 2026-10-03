import Counter from "./Counter";
import {useState} from "react";

function App() {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);
  
  return (
    <div>
      {
        display?<Counter count={count} data={data}/>:null
      }
      {/* <Counter count={count} data={data}/>   */}
      <button onClick={() => setCounter(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    </div>
  );
}

export default App;