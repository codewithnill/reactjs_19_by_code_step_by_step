
import { Route, Routes } from 'react-router'
import About from './About.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}


export default App;
