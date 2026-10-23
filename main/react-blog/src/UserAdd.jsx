import { useState } from "react";

function UserAdd() {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')




    const createUser=async()=>{
        console.log(name,age,gender);
        const url="http://localhost:3000/users";
        let response=await fetch(url,{
            method:'Post',
            body:JSON.stringify({name,age,gender}),
        });

        response=await response.json();
        if(response) {
            alert("new user added.")
        }
    }

    



  return (
    <div className="mx-auto max-w-md px-4 text-center">
        <h1>Add new user</h1>
        <div className="grid gap-4">
          <input
            className="w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            onChange={(event)=>setName(event.target.value)}
            placeholder="Enter name"
          />

          <input
            className="w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            onChange={(event)=>setAge(event.target.value)}
            placeholder="Enter age"
          />

          <input
            className="w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            onChange={(event)=>setGender(event.target.value)}
            placeholder="Enter gender"
          />

          <button onClick={createUser} className="w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Add user
          </button>
        </div>
      
    </div>
  );
}

export default UserAdd;