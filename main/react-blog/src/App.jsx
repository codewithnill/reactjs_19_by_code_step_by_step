
import { Navigate, Route, Routes } from 'react-router'
import About from './About.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Navbar from './Navbar.jsx'
import College_for_nested_navigation from './College_for_nested_navigation.jsx'
import Student_for_nested_navigation from './Student_for_nested_navigation.jsx'
import Dept_for_nested_navigation from './Dept_for_nested_navigation.jsx'
import College_details_for_nested_navigation from './College_details_for_nested_navigation.jsx'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />

          <Route path='in'>
            <Route path='/in/user'>
              <Route path="/in/user/about" element={<About />} />
              <Route path="/in/user/login" element={<Login />} />
            </Route>
            
          </Route>
          



        </Route>


        
        <Route path="/college" element={<College_for_nested_navigation />}>
          <Route index element={<Student_for_nested_navigation />} />

          <Route path="department" element={<Dept_for_nested_navigation />} />

          <Route path="college-details" element={<College_details_for_nested_navigation />} />
        </Route>

        {/* <Route path="*" element={<Pagenotfound />} /> */}



        {/* if wrong url typed take the user to login page */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}


export default App;
