import {useFormStatus} from 'react-dom'

function App() {
  const handleSubmit=async()=>{
    await new Promise(res=>setTimeout(res,2000));
    console.log("Submit");
  }

  function CustomerForm(){
    const {pending}=useFormStatus();
    console.log(pending);
    return(
      <div>
        <input type="text" placeholder="Enter name : "></input>
        <br/> <br/>
        <input type="password" placeholder="Enter password : "></input>
        <br/> <br/>
        <button disabled={pending}>{pending?'submitting...':'submit'}</button>
      </div>
    )
  }


  return (
    <div>
      <h1>useFormStatus Hook in react js 19</h1>
      <form action={handleSubmit}>
        <CustomerForm/>
      </form>
    </div>
  )
}

export default App;
