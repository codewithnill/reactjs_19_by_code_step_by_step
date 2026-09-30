function App() {
    // function callFun() {
    //     alert("Function called!");
    // }

    const fruit=()=>{
        alert("apple");
    };
  return (
    <div>
      <h1>Event and function call</h1>
      <button onClick={fruit}>Fruit</button>
    </div>
  );
}

export default App;