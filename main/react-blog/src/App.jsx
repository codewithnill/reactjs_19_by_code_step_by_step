import UserForProp from "./UserForProp";
function App() {
  let name ="NB Nill";
  let age = 25;
  let email = "nbnill.hmlnmh@gmail.com";
  return (
    <div>
      <h1>Props in react js</h1>
      {/* <h2>{name}</h2> */}
      <UserForProp name={name} age={age} email={email} />
    </div>
  );
}

export default App;