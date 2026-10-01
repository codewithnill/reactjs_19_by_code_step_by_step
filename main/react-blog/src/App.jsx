
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
      <h1>Loop in jsx with map function</h1>


      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>

        </thead>

        <tbody>
          {user_data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>











      <h1>Dummy data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nill</td>
            <td>nbnill.hmlnmh@gmail.com</td>
            <td>25</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Nill</td>
            <td>nbnill.hmlnmh@gmail.com</td>
            <td>25</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Nill</td>
            <td>nbnill.hmlnmh@gmail.com</td>
            <td>25</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Nill</td>
            <td>nbnill.hmlnmh@gmail.com</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;