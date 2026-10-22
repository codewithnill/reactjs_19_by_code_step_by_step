import useToggle from "./useToggle"

function App() {

  const [value,toggleValue]=useToggle(true)
  const [data,setData]=useToggle(true)
  // console.log("val-----",value);
 
  return (
    <div>
      <button onClick={toggleValue}>Toggle heading</button>
      <button onClick={()=>toggleValue(false)}>Hide heading heading</button>
      <button onClick={()=>toggleValue(true)}>Show heading</button>
      
      {
        value?<h1>Custom hooks in react js</h1>:null
      }


      <hr></hr>
      <button onClick={setData}>Toggle heading</button>
      <button onClick={()=>setData(false)}>Hide heading heading</button>
      <button onClick={()=>setData(true)}>Show heading</button>
      {
        data?<h1>Second heading</h1>:null
      }
      
    </div>
  );
}


export default App;
