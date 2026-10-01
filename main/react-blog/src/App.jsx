import { useState } from "react";

function App() {
  const [val,setVal] = useState("NB Nill");
  return (
    <div >
      <h1>Get input field value</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter your name"/>
      <button onClick={()=>setVal("")}>Clear</button>
      <h1>{val}</h1>
    </div>
  );
}

export default App;