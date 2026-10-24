import { useActionState, useState } from "react";
import './css/validation.css'
import { useReducer } from "react";

const emptyData={
  name:'',
  password:'',
  email:'',
  city:'',
  address:''
}

// always outside component
const reducer=(data,action)=>{
  // console.log(action);
  return {...data,[action.type]:action.val}
}

function App() {
  const [state,dispatch]=useReducer(reducer,emptyData)
  

  console.log(state);



  // const handleLogin=(prevData,formData)=>{
  //   let name=formData.get('name');
  //   let password=formData.get('password');
  //   let regex=/^[A-Z0-9]+$/i;
  //   if(!name || name.length>5) {
  //     return {error:'Name cannot be empty and should not contain more than 5 characters',name,password}
  //   }
  //   else if(!regex.test(password)) {
  //     return {error:'Password should contain only numbers and alphabets',name,password}
  //   } else {
  //     return {message:'done',name,password}
  //   }

  //   console.log(name,password);
  // }



  // const [data,action,pending]=useActionState(handleLogin);
  // console.log(data);

  
  


 


  return (
    <div>
      <h1>Validation with useReducer in react</h1>

      
      <input onChange={(event)=>dispatch({val:event.target.value,type:'name'})} className={`w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter name" />
      <br></br>
      <br></br>
      <br></br>


      <input onChange={(event)=>dispatch({val:event.target.value,type:'password'})}  className={`w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter password" />
      <br></br>
      <br></br>
      <br></br>


      <input onChange={(event)=>dispatch({val:event.target.value,type:'city'})} className={`w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter email" />
      <br></br>
      <br></br>
      <br></br>


      <input onChange={(event)=>dispatch({val:event.target.value,type:'email'})} className={`w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter city" />
      <br></br>
      <br></br>
      <br></br>


      <input onChange={(event)=>dispatch({val:event.target.value,type:'address'})} className={`w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter address" />
      <br></br>
      <br></br>
      <br></br>


      <ul>
        <li>Name:{state.name}</li>
        <li>Password:{state.password}</li>
        <li>Email:{state.email}</li>
        <li>City:{state.city}</li>
        <li>Address:{state.address}</li>
      </ul>


      <button onClick={()=>console.log(state)} className="w-72 max-w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Add details</button>

    </div>
  );
}


export default App;
