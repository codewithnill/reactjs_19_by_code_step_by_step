import { useState } from "react";
import { useEffect } from "react";
import './css/user_for_api.css'

export default function UserList2() {

  const [userData,setUserData]=useState([])
  const [loading,setLoading]=useState(false);

  const url="http://localhost:3000/users";

  useEffect(()=>{
    setLoading(true);
    getUserData();
  },[])
 
  const getUserData=async()=>{
    // const url="http://localhost:3000/users";
    let response=await fetch(url);
    response=await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  }



  const deleteUser=async(id)=>{
    // const url="http://localhost:3000/users";
    let response=await fetch(url+"/"+id,{method:'delete'});
    response=await response.json();

    if(response) {
        alert("record deleted");
        getUserData();
    }
    // console.log(response);
    // setUserData(response);
    // setLoading(false);
  }




  return (
    <div>

      <ul className="user-list user-list-head list-disc list-inside">
        <li>Name</li>
        <li>Age</li>
        <li>Gender</li>
        <li>Action</li>
      </ul>


      {
        loading?<h1>Data Loading...</h1>
        :
        userData.map((user) => (
          // <h3 key={user.id}>{user.name}</h3>

          // or

          <ul className="user-list list-disc list-inside" key={user.id}>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.gender}</li>
            <li><button onClick={()=>deleteUser(user.id)} className="w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Delete user</button></li>
          </ul>
        ))
      }
      
    </div>
  );
}


// export default App;
