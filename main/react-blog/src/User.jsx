const User=({user})=>{
  return (
    <div style={{
      border:"1px solid green",
      margin:"10px",
      padding:"10px",
      width:"400px",
      borderRadius:"10px"
    }}>
      <h1>User component</h1>
      <h1>Name: <span style={{ color: 'blue' }}>{user.name}</span></h1>
      <h1>Age: <span style={{ color: 'green' }}>{user.age}</span></h1>
      <h1>Email: <span style={{ color: 'red' }}>{user.email}</span></h1>
    </div>
  );
}

export default User;