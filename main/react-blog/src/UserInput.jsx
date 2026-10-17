import { forwardRef } from "react";

const UserInput=(props,ref)=> {
  return (
    <div>
      {/* <h1>UserInput</h1> */}
      <input type="text" ref={ref}></input>
    </div>
  );
}

export default forwardRef(UserInput);