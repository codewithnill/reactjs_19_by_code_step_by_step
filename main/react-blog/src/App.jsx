import { useRef } from "react";

function App() {



  const userRef=useRef();
  const passwordRef=useRef();
  
  const handleForm=(event)=>{
    // console.log(event)
    event.preventDefault();
    const user=document.querySelector("#user").value;
    console.log(user);
    const password=document.querySelector("#pasword").value;
    console.log(password);
  }


  const handleFormRef=(event)=>{
    event.preventDefault();
    const user=userRef.current.value;
    const password=passwordRef.current.value;
    console.log("handleFormRef",user,password);
    
  }

  return (
    <div>
      <h1>uncontroller component</h1>
      <form action="" method="post" onSubmit={handleForm}>
          <input type="text" id="user" placeholder="enter user name"></input>
          <br></br>
          <input type="password" id="password" placeholder="enter password"></input>
          <br></br>
          <button>Submit</button>
      </form>
     
      


      <hr></hr>
    <h1>Uncontrolled component with useRef</h1>
      <form action=""  method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id="userRef" placeholder="enter user name"></input>
        <br></br>
        <input type="password" ref={passwordRef} id="passwordRef" placeholder="enter password"></input>
        <br></br>
        <button>Submit with ref</button>
      </form>
      

    </div>

    
  );
}

export default App;
