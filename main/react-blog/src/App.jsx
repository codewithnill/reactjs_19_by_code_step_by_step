import {Fragment} from "react";
function App() {
 

  
  


 
  return (
    // <Fragment>
    //   <h1>Fragment in react js</h1>
    //   <h1>Fragment in react js</h1>
    // </Fragment>


    <Fragment>
      <Data/>
      <Data/>
      <Data/>
    </Fragment>


  );
}


function Data(){
  // return(
  //   // <div>
  //   //   <h1>Fragment in react js</h1>
  //   //   <h1>Fragment in react js</h1>
  //   // </div>


  //   <Fragment>
  //     <h1>Fragment in react js</h1>
  //     <h1>Fragment in react js</h1>
  //   </Fragment>
  // )

  return(
    <>
      <span>Hello</span><b>User</b>
    </>
  )
}




export default App;
