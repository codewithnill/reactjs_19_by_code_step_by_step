import { useActionState, useState } from "react";
import './css/validation.css'


function App() {
  const handleLogin=(prevData,formData)=>{
    let name=formData.get('name');
    let password=formData.get('password');
    let regex=/^[A-Z0-9]+$/i;
    if(!name || name.length>5) {
      return {error:'Name cannot be empty and should not contain more than 5 characters',name,password}
    }
    else if(!regex.test(password)) {
      return {error:'Password should contain only numbers and alphabets',name,password}
    } else {
      return {message:'done',name,password}
    }

    console.log(name,password);
  }



  const [data,action,pending]=useActionState(handleLogin);
  console.log(data);

  
  


 


  return (
    <div>
      <h1>Validation with useActionState in react</h1>

      {
        data?.message && <span style={{color:'green'}}>{data?.message}</span>
      }
      {
        data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }


      <form action={action}>
        <input defaultValue={data?.name} name='name' className={`w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter name" />
        <br></br>
        
        <br></br>
        <br></br>


        <input defaultValue={data?.password} name='password' className={`w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter password" ></input>
        <br></br>
        
        <br></br>
        <br></br>

        <button disabled={data?.error} className="w-72 max-w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Login</button>
      </form>

      

    </div>
  );
}


export default App;
