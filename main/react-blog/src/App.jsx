function App() {
    // function callFun() {
    //     alert("Function called!");
    // }

    const fruit=(name)=>{
        alert(name);
    };
  return (
    <div>
      <h1>Event and function call</h1>
      <button onClick={()=>fruit("apple")}>Apple</button>
      <button onClick={()=>fruit("banana")}>Banana</button>
    </div>
  );
}

export default App;