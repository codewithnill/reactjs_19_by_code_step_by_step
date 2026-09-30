function App() {
  let fruit="apple";
  const handleFruit=()=>{
    fruit="banana";
    console.log(fruit);
  }
  return (
    <div>
      <h1>State in react js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit name</button>
    </div>
  );
}

export default App;