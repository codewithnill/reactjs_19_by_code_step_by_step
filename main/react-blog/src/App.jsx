import { useEffect, useState } from "react";

function App() {
  const [counter,setCounter] = useState(0);
  const [data,setData] = useState(0);


  useEffect(() => {
    callOnce(); // Call the function when the component is mounted
  }, [data]); // Empty dependency array means this effect runs only once after the initial render
  // [data] means this effect runs only when the data state changes
  

  counterFunction(); // Call the function on every render
  function counterFunction() {
    console.log("Counter function",counter);
  }
  
  
  function callOnce() {
    console.log("This function is called only once when the component is mounted.");
  }
  
  // callOnce(); // Call the function when the component is mounted
  return (
    <div>
      <h1>Use effect hook</h1>
      <button onClick={()=>setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={()=>setData(data + 1)}>Data {data}</button>
    </div>
  );
}

export default App;