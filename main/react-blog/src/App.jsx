
import { Navigate, Route, Routes } from 'react-router'
import About from './About.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Navbar from './Navbar.jsx'
import Pagenotfound from './Pagenotfound.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="*" element={<Pagenotfound />} /> */}



        {/* if wrong url typed take the user to login page */}
        <Route path="/*" element={<Navigate to="/login"></Navigate>} />
      </Routes>
    </div>
  );
}


export default App;
