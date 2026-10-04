import styled from "styled-components"

function App() {


  //   const Heading=styled.h1`
  //   color:red
  //   border:1px solid green;
  //   border-radius:5px;
  //   margin:20px;
  //   padding:20px;
  // `

  const Heading=styled("h1")({
    color:'red',
    border:'1px solid green',
    borderRadius:'5px',
    margin:'20px',
    padding:'20px',
  })

  const StyleBtn=styled.button`
  color:red;
  width:130px;
  height:40px;
  margin:20px
  `
    

  return (
    <div>
      <h1>Styled component with react js</h1>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading 2</Heading>
      <Heading>Hello Heading 3</Heading>
      <Heading>Hello Heading 4</Heading>


      <StyleBtn>Login</StyleBtn>
      <StyleBtn>Login</StyleBtn>
      <StyleBtn>Login</StyleBtn>
      <StyleBtn>Login</StyleBtn>
    </div>
  );
}

export default App;
