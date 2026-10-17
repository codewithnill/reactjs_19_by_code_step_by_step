import {useState} from "react";
function App() {
  
  // const [name,setName]=useState('NB Nill')

  const [data,setData]=useState(
    {
      name: 'Nill',
      address:{
        city : "Dhaka",
        country:'BD'
      }
    }
  )

  const handleName=(val)=>{
    data.name=val
    console.log(data);
    // setName("Nill")

    setData({...data})
  }


  const handleCity=(city)=>{
    data.address.city=city
    console.log(data);
    // setName("Nill")

    setData({...data,address:{...data.address,city}})
  }


  return (
    <div>
      <h1>Updating objects in state</h1>
      
      {/* <button onClick={handleName}>Update name</button> */}
      <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)}></input>


      <input type="text" placeholder="update city" onChange={(event)=>handleCity(event.target.value)}></input>

      <h2>Name : {data.name}</h2>
      <h2>City : {data.address.city}</h2>
      <h2>Country : {data.address.country}</h2>
    </div>
  );
}


export default App;
