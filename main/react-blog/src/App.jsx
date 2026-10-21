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
  const name=useId();
  const password=useId();
  const terms=useId();
  const skills=useId();

  
  


 
  return (
    <div>
      <form action="">
        <label htmlFor={name}>Enter user name</label>
        <input id={name} type="text" placeholder="Enter name"></input>

        <br></br>
        <label htmlFor={password}>Enter user password</label>
        <input id={password} type="text" placeholder="Enter password"></input>


        <br></br>
        <label htmlFor={terms}>Enter user terms</label>
        <input id={terms} type="checkbox" placeholder="Enter terms"></input>

        <br></br>
        <label htmlFor={skills}>Enter user skills</label>
        <input id={skills} type="text" placeholder="Enter skills"></input>

      </form>

    </div>
  );
}


export default App;
