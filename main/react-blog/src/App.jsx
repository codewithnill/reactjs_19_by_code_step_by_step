import {useState} from "react";

function App() {
  
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState('');
  const handleAddUsers=()=>{
    setUsers([...users,user]) // taking the curr users array and append the current user value to the end
  }


  // derived states
  const total=users.length;
  const last=users[users.length-1];
  const unique=[...new Set(users)].length // set removes duplicate values


  return (
    <div>
      <h1>Total user : {total}</h1>
      <h1>Last user : {last}</h1>
      <h1>Unique total user : {unique}</h1>

      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user"></input>
      <button onClick={handleAddUsers}>Add user</button>
      {
        users.map((item,index)=>(
            <h4 key={index}>{item}</h4>
        ))
      }
    </div>
  );
}


export default App;
