import UserForMoreAboutProps from './UserForMoreAboutProps';
function App() {
  return (
    <div>
      <h1>Props in react js</h1>
      <UserForMoreAboutProps name="Ali"/>


      <UserForMoreAboutProps name="Sam"/>
      {/* suppose forgot to pass username */}
      {/* <UserForMoreAboutProps /> */}
    </div>
  );
}

export default App;