import {useState} from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  
  const handleSkills=(event)=>{
    console.log(event.target.value,event.target.checked);
    if(event.target.checked){
      // setSkills([event.target.value]);
      setSkills([...skills,event.target.value]);
    } else {
      setSkills(skills.filter((item)=> item !== event.target.value)); // filter method is used to remove the unchecked value from the array. item !== event.target.value indicates that if the item is not equal to the value of the checkbox, it will be kept in the array. If it is equal, it will be removed from the array.
    }
  }
  
  return (
    <div>
      <h1>Skills</h1>
      <input type="checkbox"  id="html" name="html" value="HTML" onChange={handleSkills} /> <label htmlFor="html">HTML</label> <br></br>
      <input type="checkbox" id="css" name="css" value="CSS" onChange={handleSkills} /> <label htmlFor="css">CSS</label> <br></br>
      <input type="checkbox" id="javascript" name="javascript" value="JavaScript" onChange={handleSkills} /> <label htmlFor="javascript">JavaScript</label>

      <h2>{skills.toString()}</h2>
    </div>
  );
}

export default Skills;