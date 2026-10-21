import {useId} from "react";
function App() {
 

  
  


 
  return (
    <div>
      <UserForm/>
      <br></br>
      <UserForm/>
    </div>
  );
}




function UserForm() {
  const user=useId();
  // const password=useId();
  // const terms=useId();
  // const skills=useId();

  
  


 
  return (
    <div>
      <form action="">
        <label htmlFor={user+"name"}>Enter user name</label>
        <input id={user+"name"} type="text" placeholder="Enter name"></input>

        <br></br>
        <label htmlFor={user+"password"}>Enter user password</label>
        <input id={user+"password"} type="text" placeholder="Enter password"></input>


        <br></br>
        <label htmlFor={user+"terms"}>Enter user terms</label>
        <input id={user+"terms"} type="checkbox" placeholder="Enter terms"></input>

        <br></br>
        <label htmlFor={user+"skills"}>Enter user skills</label>
        <input id={user+"skills"} type="text" placeholder="Enter skills"></input>

      </form>

    </div>
  );
}


export default App;
