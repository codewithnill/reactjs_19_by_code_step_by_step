import {Route,Routes} from 'react-router'
import Home from './Home.jsx'
import About from './About.jsx'
import Login from './Login.jsx'
import Navbar from './Navbar.jsx';

function App() {
  return (
    <div>

      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}


      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      {/* <h1>Basic pages with react routing</h1> */}
    </div>
  );
}


export default App;
