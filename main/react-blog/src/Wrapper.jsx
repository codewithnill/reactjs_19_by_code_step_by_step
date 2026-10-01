function Wrapper({children}) {
  return (
    <div style={{color: "red", border: "5px solid red", margin:"10px", width: "300px"}}>
      <h1>Wrapper</h1>
      {children}
      {/* children is used to pass content between the opening and closing tags of the Wrapper component */}
    </div>
  );
}

export default Wrapper;