let guest=0;

function App() {
  

  return (
    <div>
      <h1>Keeping components pure</h1>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
    </div>
  )
}

const Cup=({guest})=>{
  // guest=guest+1;
  return (
    <h1>We have {guest} guest and we have to make {guest} cup of tea</h1>
  )
}


export default App;
