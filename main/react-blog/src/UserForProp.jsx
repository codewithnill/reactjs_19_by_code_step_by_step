// method 1
function UserForProp({ name }) {
    return(
        <div>
            <h1>User component for prop</h1>
            <h2>{name}</h2>
        </div>
    )
}

// method 2
function UserForProp(props) {
    return(
        <div>
            <h1>User component for prop</h1>
            <h2>{props.name}</h2>
        </div>
    )
}

export default UserForProp;