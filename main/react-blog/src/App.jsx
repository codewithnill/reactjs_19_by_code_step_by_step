import { Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';

function App() {
    

  return (
    <div>
      <h1>Styled component with react js</h1>
      <Button>Ok</Button>
      <Alert variant="success">Hello, BT installed</Alert>
      <Button onClick={()=>alert("Bootstrap button")} variant="danger">Bootstrap button</Button>
      <Button variant="success">Ok</Button>
      <Button variant="warning">Ok</Button>
      <button onClick={()=>alert("Simple button")} variant="danger">Simple button</button>
    </div>
  );
}

export default App;
