

function AddUser({setUser}) {

    
    return (
    <div>
      <h1>Add user</h1>
      <input type="text"  onChange={(event)=>setUser(event.target.value)} placeholder="Enter user name"></input>
      <br></br>
      <br></br>
    </div>
  );
}

export default AddUser;