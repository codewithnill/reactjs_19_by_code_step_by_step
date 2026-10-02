import College from "./College";

function App() {
  const CollegeData=[
    { name: "Dhaka College",
      city: "Dhaka",
      website: "https://www.dhakacollege.edu.bd",
      student:[
        {
          name: "John Doe",
          age: 20,
          email: "john.doe@example.com"
        },
        {
          name: "Bruce Lee",
          age: 30,
          email: "bruce.lee@example.com"
        },
        {
          name: "Peter Parker",
          age: 40,
          email: "peter.parker@example.com"
        }
      ]
    },
    { name: "Chittagong College", 
      city: "Chittagong", 
      website: "https://www.chittagongcollege.edu.bd", 
      student: [
        { name: "Alice Smith", age: 25, email: "alice.smith@example.com" },
        { name: "Bob Johnson", age: 35, email: "bob.johnson@example.com" },
        { name: "Charlie Brown", age: 45, email: "charlie.brown@example.com" }
      ] 
    },
    { name: "Rajshahi College", 
      city: "Rajshahi", 
      website: "https://www.rajshahic college.edu.bd", 
      student: [
        { name: "David Lee", age: 28, email: "david.lee@example.com" },
        { name: "Eva Green", age: 32, email: "eva.green@example.com" },
        { name: "Frank Miller", age: 38, email: "frank.miller@example.com" }
      ] }
  ];
  return (
    <div>
      <h1>Nested looping with component</h1>
      {
        CollegeData.map((college,index) => (
          <div key={index}>
            <College college={college} />
          </div>
        ))
      }
    </div>
  );
}

export default App;