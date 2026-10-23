import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit() {


    const {id}=useParams();
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const navigate=useNavigate();
    const url="http://localhost:3000/users/"+id;
    useEffect(()=>{
        getUserData();
    },[]);

    const getUserData=async()=>{
        console.log(id);
        
        let response=await fetch(url);
        response=await response.json();
        console.log(response);
        setName(response.name);
        setAge(response.age);
        setGender(response.gender);
    }


    const updateUserData=async()=>{
        console.log(name,age,gender);
        let response=await fetch(url,{
            method:'PUT',
            body:JSON.stringify({name,age,gender})
        });

        response=await response.json();
        console.log(response);
        if(response) {
            alert("Updated.");
            navigate('/');
        }
    }


    return (
        <div>
            <h1>Edit user</h1>
            <input  value={name} className="w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200" type="text" onChange={(event)=>setName(event.target.value)} placeholder="user name" />
            
            <br></br>

            <input  value={age} className="w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200" type="text" onChange={(event)=>setAge(event.target.value)} placeholder="user age" />


            <br></br>
            <input value={gender} className="w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200" type="text" onChange={(event)=>setGender(event.target.value)} placeholder="user gender" />

            <br></br>
            <br></br>

            <button onClick={updateUserData} className="w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Update</button>
        </div>
  );
}

export default UserEdit;