import { SubjectContext } from "./contextData";
import { useContext } from "react";

function Subject() {

  const subject=useContext(SubjectContext)
 
  return (
    <div style={{backgroundColor:'red',padding:10}}>
      <h1>Subject is {subject}</h1>
    </div>
  );
}


export default Subject;
