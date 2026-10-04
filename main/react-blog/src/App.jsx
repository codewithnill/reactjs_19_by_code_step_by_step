import UserProfile from "./Userprofile"

function App() {

  return (
    <div>
      {/* <h1 className='heading'>Style with css modules in react</h1> */}
      {/* <h1 className={style.heading}>Style with css modules in react</h1> */}
      <div style={{display:"flex",flexWrap:"wrap"
      }}>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
      </div>
      
    </div>
  );
}

export default App;
