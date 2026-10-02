import Student from './Student';

function College({college}) {
  return (
    <div style={{
        backgroundColor: "#ccc", 
        margin: "20px", 
        padding: "20px",
        borderBottom: "2px solid #000",
        borderRadius: "10px"
      }}>
      <h2>College name : {college.name}</h2>
            <ul>
              <li><h3>City: {college.city}</h3></li>
              <li><h3>Website: <a href={college.website}>{college.website}</a></h3></li>
              <li>
                <Student student={college.student} />
              </li>
            </ul> 
    </div>
  );
}

export default College;