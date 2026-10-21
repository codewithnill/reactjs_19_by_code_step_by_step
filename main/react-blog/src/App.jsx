import {useActionState} from "react";
function App() {


  const handleSubmit=async(previousData,formData)=>{
    let name=formData.get('name');
    let password=formData.get('password');


    await new Promise(res=>setTimeout(res,2000))
    // console.log("handlesubmit called",name,password);

    if(name && password) {
      return {message:'Data submitted',name,password}
    } else {
      return {error:'Failed to submit. Enter proper data',name,password}
    }
  }


  


  const [data,action,pending]=useActionState(handleSubmit,undefined)
  console.log(data);
  return (
    <div>
      <h1>useActionState hook in react js</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="Enter name" name="name"></input>
        <br></br>

        <input defaultValue={data?.password} type="password" placeholder="Enter password" name="password"></input>
        <br></br>

        <button disabled={pending}>Submit data</button>
        <br></br>

        
      </form>


      {
          data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }
      {
        data?.message&& <span style={{color:'green'}}>{data?.message}</span>
      }

      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>

    </div>
  );
}


export default App;
