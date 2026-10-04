import { useRef } from "react";

function App() {
  
  const inputRef=useRef(null);
  const h1Ref=useRef(null);
  const inputHandler=()=>{
    inputRef.current.focus();
    inputRef.current.style.color='red';
    inputRef.current.placeholder="enter password";
    inputRef.current.value="123";
  }

  const toggleHandler=()=>{
    if(inputRef.current.style.display!='none') {
      inputRef.current.style.display='none'
    } else {
      inputRef.current.style.display='inline'
    }
  }

  const h1Handler=()=>{
    h1Ref.current.style.color='green';
  }

  return (
    <div>
      <h1>Styled component with react js</h1>
      <input ref={inputRef} type="text" placeholder="Enter a username"></input>
      <button onClick={toggleHandler}>Toggle</button>
      <button onClick={inputHandler}>Focus on input field</button>
      <h1 ref={h1Ref}>Hello world</h1>
      <button onClick={h1Handler}>Handler</button>
    </div>
  );
}

export default App;
