import Login,{Profile,Setting} from './user_component';

function App() {
  alert(sum());
  return (
    <div>
      <h1>first component {sum()}</h1>
      <Fruit></Fruit>
      <Colors/>
      <Login/>
      <Profile/>
      <Setting/>
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

function sum() {
  let a = 10;
  let b = 20;
  return a + b;
}

export default App;