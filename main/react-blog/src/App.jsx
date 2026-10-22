import College_for_contextAPI from "./College_for_contextAPI";
import { SubjectContext } from "./contextData";
import { useState } from "react";

function App() {

  const [subject,setSubject]=useState('English')
 
  return (
    <div style={{backgroundColor:'yellow',padding:10}}>
      {/* <h1>Context API</h1>
      <College_for_contextAPI/> */}

      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>

        <h1>Context API</h1>
        <button onClick={()=>setSubject('')}>Clear subject</button>
        <College_for_contextAPI/>
      </SubjectContext.Provider>
      
    </div>
  );
}


export default App;
