import { Link, useParams } from "react-router";

function UserDetails() {
    const paramsData=useParams()


    return (
        <div style={{marginLeft:20}}>
            <h1>User details page</h1>
            <h2>User id is : {paramsData.id}</h2>
            <h3><Link to="/users">Back</Link></h3>
        </div>
    );
}

export default UserDetails;