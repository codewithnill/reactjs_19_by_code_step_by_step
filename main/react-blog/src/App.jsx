import User from "./User";

function App() {
  const user_data=[
    {
      name:"NB Nill",
      age:25,
      email:"nbnill.hmlnmh@gmail.com",
      id:1
    },
    {
      name:"Sam",
      age:30,
      email:"sam@gmail.com",
      id:2
    },
    {
      name:"John",
      age:35,
      email:"john@gmail.com",
      id:3
    },
    {
      name:"Doe",
      age:40,
      email:"doe@gmail.com",
      id:4
    }
  ]

  return (
    <div>
      <h1>Reuse component in loop</h1>
      {user_data.map((user) => (
        <div key={user.id}>
          <User user={user}/>
        </div>
      ))}
      
    </div>
  );
}

export default App;