import {useState} from "react";
function App() {

  // const [name,setName]=useState("Nill")
  const [data,setData]=useState(['Nill','Anil','Sidhu'])


  const handleUser=(name)=>{
    data[data.length-1]=name;
    console.log(data);
    setData([...data])
  }


  return (
    <div>
      <h1>Updating array in state</h1>
      {/* <h2>{name}</h2>
      <button onClick={()=>setName("NB Nill")}>Update name</button> */}

      <input type="text" placeholder="Enter last username : " onChange={(e)=>handleUser(e.target.value)}></input>
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
    </div>
  );
}


export default App;
