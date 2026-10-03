import { useState } from "react";

function App() {

  const [cardStyle,setCardStyle] = useState({
    border: "1px solid #b9b9b9",
    boxShadow: "1px 2px 3px 0px #cccccc16",
    width: "200px",
    margin: "10px",
  });


  // const cardStyle = {
  //   border: "1px solid #b9b9b9",
  //   boxShadow: "1px 2px 3px 0px #cccccc16",
  //   width: "200px",
  //   margin: "10px",
  // };




  const updateTheme=(bgcolor,textcolor)=>{
    setCardStyle({...cardStyle,backgroundColor:bgcolor})
    setTextColor(textcolor)
  }

  const [textColor,setTextColor] = useState("black");
  const [grid,setGrid] = useState(true);

  return (
    <div>
      {/* error version */}
      {/* <h1 style="color:red">Inline style in react js.</h1> */}

      {/* correct version */}
      <h1 style={{ color: "red" }}>Inline style in react js.</h1>
      <button onClick={() => updateTheme("#aaa","red")}>Red theme</button>
      <button onClick={() => updateTheme("white","black")}>Default theme</button>
      <button onClick={() => setGrid(!grid)}>toggle grid</button>

      <div style={{ 
          display: grid?'flex':'block', 
          flexWrap: "wrap" 
        }}>


        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            srcSet=""
          />
          <div style={{ padding: "5px",color:textColor }}>
            <h4>NB Nill</h4>
            <p>Laravel full stack developer</p>
          </div>
        </div>


        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            srcSet=""
          />
          <div style={{ padding: "5px",color:textColor }}>
            <h4>NB Nill</h4>
            <p>Laravel full stack developer</p>
          </div>
        </div>



        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            srcSet=""
          />
          <div style={{ padding: "5px",color:textColor }}>
            <h4>NB Nill</h4>
            <p>Laravel full stack developer</p>
          </div>
        </div>




        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            srcSet=""
          />
          <div style={{ padding: "5px",color:textColor }}>
            <h4>NB Nill</h4>
            <p>Laravel full stack developer</p>
          </div>
        </div>





        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            srcSet=""
          />
          <div style={{ padding: "5px",color:textColor }}>
            <h4>NB Nill</h4>
            <p>Laravel full stack developer</p>
          </div>
        </div>


        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            srcSet=""
          />
          <div style={{ padding: "5px",color:textColor }}>
            <h4>NB Nill</h4>
            <p>Laravel full stack developer</p>
          </div>
        </div>



        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            srcSet=""
          />
          <div style={{ padding: "5px",color:textColor }}>
            <h4>NB Nill</h4>
            <p>Laravel full stack developer</p>
          </div>
        </div>




        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            srcSet=""
          />
          <div style={{ padding: "5px",color:textColor }}>
            <h4>NB Nill</h4>
            <p>Laravel full stack developer</p>
          </div>
        </div>


      </div>


      


    </div>
  );
}

export default App;
