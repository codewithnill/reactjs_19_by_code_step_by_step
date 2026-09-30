function App() {
    function callFun() {
        alert("Function called!");
    }
  return (
    <div>
      <h1>Event and function call</h1>
      <button onClick={callFun}>Click Me</button>
    </div>
  );
}

export default App;