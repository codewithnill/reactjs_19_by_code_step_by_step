function App() {
  return (
    <div>
      <h1>first component</h1>
      <Fruit></Fruit>
      <Colors/>
    </div>
    
  );
}

function Fruit() {
  return (
    <h1>Apple</h1>
  );
}

function Colors() {
  return (
    <h1>Red</h1>
  );
}

export default App;