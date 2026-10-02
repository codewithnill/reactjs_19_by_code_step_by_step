import Clock from './Clock';
import { useState } from 'react';
function App() {


  const [color,setColor]=useState("red");
  return (
    <div>
      <h1>Digital clock in react js.</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"blue"}>Blue</option>
        <option value={"orange"}>Orange</option>
      </select>
      <Clock color={color}/>  
      
    </div>
  );
}

export default App;