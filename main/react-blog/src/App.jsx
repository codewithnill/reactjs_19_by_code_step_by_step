import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div >
      <h1>Controller component</h1>
      <form action="" method="get"> 
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name" /> <br></br>
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter your password" /> <br></br>
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email" /> <br></br>
        <button type="submit">Submit</button>
        <button type="reset" onClick={() => {
          setName("");
          setPassword("");
          setEmail("");
        }}>Reset</button>
        <h2>name: {name}</h2>
        <h2>password: {password}</h2>
        <h2>email: {email}</h2>
      </form>
    </div>
  );
}

export default App;