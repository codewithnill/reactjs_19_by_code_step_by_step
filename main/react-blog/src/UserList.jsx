import {Link} from "react-router"

function UserList() {
    const userData=[
        {id:1,name:'Nill'},
        {id:2,name:'Ankit'},
        {id:3,name:'Amit'},
        {id:4,name:'Alamin'},
        {id:5,name:'Rohan'},
    ]


    return (
        <div style={{marginLeft:20}}>
            <h1>User list page</h1>
            {
                userData.map((item) => (
                    <div key={item.id}>
                        <h4><Link to={"/users/"+item.id
                        }>{item.name}</Link></h4>
                    </div>
                ))
            }


            <h1>User list page with name in url</h1>
            {
                userData.map((item) => (
                    <div key={item.id}>
                        <h4><Link to={"/users/"+item.id+"/"+item.name
                        }>{item.name}</Link></h4>
                    </div>
                ))
            }
        
        </div>
    );
}

export default UserList;