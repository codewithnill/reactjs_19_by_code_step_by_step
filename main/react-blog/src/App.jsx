let count=0;

function App() {
  

  return (
    <div>
      <h1>Keeping components pure</h1>
      {/* wrong approach */}
      {/* <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}


      {/* correct approach using props */}
      <Counter count={1}/>
      <Counter count={2}/>
      <Counter count={3}/>
      <Counter count={4}/>
    </div>
  )
}

const Counter=({count})=>{
  count=count+1;
  return <h1>Counter {count}</h1>
}

export default App;
