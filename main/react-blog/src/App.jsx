import { NavLink, Route, Routes } from "react-router";
import UserList2 from "./UserList2";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";

function App() {



  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink to="/">List</NavLink>
        </li>

        <li>
          <NavLink to="/add">Add Users</NavLink>
        </li>
      </ul>
      {/* <h1>Make routes and pages for add user and user list ui</h1> */}
      {/* <UserList2/> */}
      <Routes>
        <Route path="/" element={<UserList2/>}></Route>
        <Route path="/add" element={<UserAdd/>}></Route>
        <Route path="/edit/:id" element={<UserEdit/>}></Route>
        
      </Routes>

    </div>
  );
}


export default App;
