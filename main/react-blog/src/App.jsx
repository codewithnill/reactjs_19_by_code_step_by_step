import UserForProp from "./UserForProp";
function App() {
  // let name ="NB Nill";
  // let age = 25;
  // let email = "nbnill.hmlnmh@gmail.com";
  let userObj = {
    name: "NB Nill",
    age: 25,
    email: "nbnill.hmlnmh@gmail.com"
  };

  let userObj2 = {
    name: "Nujhat Tasnim",
    age: 25,
    email: "nujhat.tasnim@gmail.com"
  };


  return (
    <div>
      <h1>Props in react js</h1>
      {/* <h2>{name}</h2> */}
      {/* <UserForProp name={userObj.name} age={userObj.age} email={userObj.email} /> */}
      <UserForProp user={userObj} />
      <UserForProp user={userObj2} />
    </div>
  );
}

export default App;