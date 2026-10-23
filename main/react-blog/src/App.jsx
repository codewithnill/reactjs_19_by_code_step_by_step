import { useEffect, useState } from "react";
import './css/user_for_api.css'

function App() {
  const [usersData,setUsersData]=useState([]);
  useEffect(()=>{
    getUsersData();
  },[])


  async function getUsersData() {
    const url="https://dummyjson.com/users";
    let response=await fetch(url);
    response=await response.json();

    setUsersData(response.users);
  }

  console.log(usersData);


  return (
    <div>
      <h1>Fetch data from API</h1>
      <ul className="user-list user-list-head">
        <li>First name</li>
        <li>Last name</li>
        <li>Email</li>

      </ul>
      
        {usersData.map((user) => (
        <ul className="user-list list-disc list-inside">
          <li key={user.id}>{user.firstName}</li>
          <li key={user.id}>{user.lastName}</li>
          <li key={user.id}>{user.email}</li>
        </ul>
        ))}
    </div>
  );
}


export default App;
