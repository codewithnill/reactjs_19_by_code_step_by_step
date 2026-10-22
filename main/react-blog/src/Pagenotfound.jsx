import { Link } from "react-router";

function Pagenotfound() {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Page Not Found</h1>
        <div>
            <Link to="/">Go to home page</Link>
        </div>
       
        <h2>404 error</h2>
        <img alt="Page not found" style={{width:"50%"}} src="https://tse3.mm.bing.net/th/id/OIP.fn6HCRvsYmGOIAVF8CaFXgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
    </div>
  );
}

export default Pagenotfound;