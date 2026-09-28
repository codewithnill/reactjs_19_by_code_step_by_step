import {createElement} from "react";

function App() {
    // const username = "NB Nill";
    // return(
    //   <div>
    //     <h1>JSX in react, {username}!</h1>
    //     <button onClick={() => alert(`Hello, ${username}!`)}>Click me</button>
    //   </div>
    // );

    return createElement("div",{id:"rootdiv"}, "hello div");
}

export default App;