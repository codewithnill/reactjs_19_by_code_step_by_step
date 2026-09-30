import { useState } from "react";
import User from "./User";
function App() {

  const [display,setDisplay] = useState(true);
  // const [display,setDisplay] = useState(false);
  return (
    <div>
      <h1>Toggle in react</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        display?<User/>:null
      }
      
    </div>
  );
}

export default App;