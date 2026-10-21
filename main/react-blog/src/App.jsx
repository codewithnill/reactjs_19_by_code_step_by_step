import {useState} from "react";
function App() {

  // const [name,setName]=useState("Nill")
  const [data,setData]=useState(['Nill','Anil','Sidhu'])


  const [dataDetails,setDataDetails]=useState([
    {name:'Nill',age:'30'},
    {name:'Anil',age:'40'},
    {name:'Sidhu',age:'50'},
  ])


  const handleUser=(name)=>{
    data[data.length-1]=name;
    console.log(data);
    setData([...data])
  }



  const handleAge=(age)=>{
    dataDetails[dataDetails.length-1].age=age;
    console.log(dataDetails);
    setDataDetails([...dataDetails])
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

      <hr></hr>

      <input type="text" placeholder="Enter last user age : " onChange={(e)=>handleAge(e.target.value)}></input>
      {
        dataDetails.map((item,index)=>(
          <h3 key={index}>{item.name},{item.age}</h3>
        ))
      }
    </div>
  );
}


export default App;
