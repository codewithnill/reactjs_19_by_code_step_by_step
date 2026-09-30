import { useState } from "react";
function App() {

  const [display,setDisplay] = useState(true);
  // const [display,setDisplay] = useState(false);
  return (
    <div>
      <h1>Toggle in react</h1>
      {
        display? <h1>NB Nill</h1>:<h1>no username</h1>
      }
      
    </div>
  );
}

export default App;