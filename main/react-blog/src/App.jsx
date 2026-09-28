import {createElement} from "react";

function App() {
    // const username = "NB Nill";
    // return(
    //   <div>
    //     <h1>JSX in react, {username}!</h1>
    //     <button onClick={() => alert(`Hello, ${username}!`)}>Click me</button>
    //   </div>
    // );

    return createElement("div",{id:"rootdiv"}, createElement("h1",{class:'h1tag'},"heading"));

    // return (
    //   <div className="root_other">Hello other</div>
    // )
}

export default App;