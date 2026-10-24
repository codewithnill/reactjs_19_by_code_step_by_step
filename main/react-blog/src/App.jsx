import { useState } from "react";
import './css/validation.css'


function App() {

  
  const [name,setName]=useState('');
  const [nameErr,setNameErr]=useState('');

  const [password,setPassword]=useState('');
  const [passwordErr,setPasswordErr]=useState('');

  const handlename=(event)=>{
    console.log(event.target.value);
    
    if(event.target.value.length>5) {
      setNameErr("Please enter valid username. Only 5 characters.")
    } else {
      setNameErr()
    }
  }


  const handlepassword=(event)=>{
    let regex=/^[A-Z0-9]+$/i
    console.log(event.target.value);
    if(regex.test(event.target.value)) {
      setPasswordErr()
      
    } else {
      setPasswordErr("Please enter valid password. Only numbers and alphabets allowed.")
    }
  }


  return (
    <div>
      <input className={`${nameErr ? 'error' : ''} w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter name" onChange={handlename} />
      <br></br>
      <span className="red-color">{nameErr && nameErr}</span>
      <br></br>
      <br></br>


      <input className={`${passwordErr ? 'error' : ''} w-72 max-w-full rounded border border-gray-500 bg-white px-3 py-2 text-black placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200`} type="text" placeholder="Enter password" onChange={handlepassword}></input>
      <br></br>
      <span className="red-color">{passwordErr && passwordErr}</span>
      <br></br>
      <br></br>

      <button disabled={passwordErr || nameErr} className="w-72 max-w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Login</button>

    </div>
  );
}


export default App;
