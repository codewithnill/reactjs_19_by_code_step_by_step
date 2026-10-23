import { NavLink, Outlet,Link } from "react-router";
function College_for_nested_navigation() {
  return (
    <div className="college" style={{textAlign:'center'}}>
        <h1>College page</h1>
        <h3><Link to="/">Go back to Home</Link></h3>
        <NavLink className="link" to="">Student</NavLink>
        <NavLink className="link" to="department">Department</NavLink>
        <NavLink className="link" to="college-details">College details</NavLink>
        <Outlet />
    </div>
  );
}

export default College_for_nested_navigation;