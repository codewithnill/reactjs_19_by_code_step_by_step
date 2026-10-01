import Wrapper from './Wrapper';
function App() {
  return (
    <div >
      <Wrapper>  
        <p>This is some content passed to the Wrapper component.</p>
      </Wrapper>

      <Wrapper>  
        <h1>Hello admin</h1>
      </Wrapper>
    </div>
  );
}

export default App;