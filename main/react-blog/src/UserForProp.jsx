// method 1
// function UserForProp({user}) {
//     return(
//         <div>
//             <h1>User component for prop</h1>
//             <h2>{user.name}</h2>
//             <p>Age: {user.age}</p>
//             <p>Email: {user.email}</p>
//         </div>
//     )
// }

// method 2
function UserForProp(props) {
    return(
        <div>
            <h1>User component for prop</h1>
            <h2>{props.user.name}</h2>
            <p>Age: {props.user.age}</p>
            <p>Email: {props.user.email}</p>
        </div>
    )
}

export default UserForProp;