const User=({displayName,name,getUser})=>{
  // const displayName=(name)=>{
  //   alert(name);
  // }

  // const getUser=()=>{
  //   alert("get user function called");
  // }

  return (
    <div>
      <button onClick={()=>displayName(name)}>Display name</button>
      <button onClick={()=>getUser()}>Get user</button>
    </div>
  );
}

export default User;