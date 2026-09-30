// method 1
// function UserForProp({ name, age }) {
//     return(
//         <div>
//             <h1>User component for prop</h1>
//             <h2>{name}</h2>
//             <p>Age: {age}</p>
//         </div>
//     )
// }

// method 2
function UserForProp(props) {
    return(
        <div>
            <h1>User component for prop</h1>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default UserForProp;