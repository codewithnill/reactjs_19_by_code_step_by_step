import { Suspense, use } from "react";

const fetchData=()=>fetch('https://dummyjson.com/users').then((response)=>response.json());
const userResource=fetchData();


function App() {



  return (
    <div>
      
      <h1>'use' API in react</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Users userResource={userResource}/>
      </Suspense>
      
      
    </div>
  );
}

const Users=({userResource})=>{
  // console.log(userResource);
  const userData=use(userResource);
  console.log(userData.users);
  return(
    <div>
      <h1>Users list</h1>
      {
        userData?.users?.map((user)=>(
          <h1>{user.firstName}</h1>
        ))
      }
    </div>
  )
}




export default App;
