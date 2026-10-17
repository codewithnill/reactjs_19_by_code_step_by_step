import User from "./User"

function App() {
  const displayName=(name)=>{
    alert(name);
  }

  const getUser=()=>{
    alert("get user function called");
  }


  return (
    <div>
      <h1>Call parent component function from child component</h1>
      <User displayName={displayName} name="Nb" getUser={getUser}/>
      <User displayName={displayName} name="Nill" getUser={getUser}/>
    </div>
  );
}

export default App;
