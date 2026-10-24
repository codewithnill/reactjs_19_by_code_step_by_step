import { useState } from "react";


function App() {
  const colors = JSON.parse(localStorage.getItem('color') ?? 'null');

  // const [r,setR]=useState(0);
  // const [g,setG]=useState(0);
  // const [b,setB]=useState(0);




  const [r,setR]=useState(colors && colors.r?colors.r:0);
  const [g,setG]=useState(colors && colors.g?colors.g:0);
  const [b,setB]=useState(colors && colors.b?colors.b:0);


  const save=()=>{
    localStorage.setItem("color", JSON.stringify({r,g,b}));
  };

  return (
    <div>
      
      <h1>Color mixture</h1>


      {/* <div style={{backgroundColor:'rgb(r,g,b)',height:200, width:200 }}> */}

      <div style={{backgroundColor:'rgb('+r+','+g+','+b+')',height:200, width:200 }}>

      </div>




      <label htmlFor="">Red</label>
      <input value={r} type="range" onChange={(event)=>setR(event.target.value)} min={0} max={255}></input>
      <br></br>
      <br></br>


      <label htmlFor="">Green</label>
      <input  value={g} type="range" onChange={(event)=>setG(event.target.value)} type="range" min={0} max={255}></input>
      <br></br>
      <br></br>



      <label htmlFor="">Blue</label>
      <input value={b} type="range" onChange={(event)=>setB(event.target.value)} type="range" min={0} max={255}></input>
      <br></br>
      <br></br>


      <button onClick={save} className="w-72 max-w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Save color combination</button>
      
      
      
    </div>
  );
}





export default App;
