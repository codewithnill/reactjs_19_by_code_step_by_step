function App() {
    const name = "Code Step By Step";

    const userObj = {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    };

    const userArr = ["Alice", "Bob", "Charlie"];


    let x=10;
    let y=20;

    let path = "https://d2a0gza273xfgz.cloudfront.net/467901/uploads/4e3a5110-db76-11ea-9736-111aa6094a2a_800_420.jpeg";

    function fruit() {
        return "Mango";
    }

    function sum(a,b) {
        return a + b;
    }

    function operation(a,b,op) {
        if(op === "+") {
            return a + b;
        } else if(op === "-") {
            return a - b;
        } else if(op === "*") {
            return a * b;
        } else if(op === "/") {
            return a / b;
        } else {
            return "Invalid operation";
        }
    }

    return (
        <div>
            <h1>JSX with curly braces</h1>
            <p>Welcome, {name}!</p>
            <p>x = {x}, y = {y}</p>
            <p>Sum of x and y = {x + y}</p>
            <p>Fruit = {fruit()}</p>
            <p>Sum of 5 and 10 = {sum(5, 10)}</p>
            <p>Operation 10 + 5 = {operation(10, 5, "+")}</p>
            <p>Operation 10 - 5 = {operation(10, 5, "-")}</p>
            <p>Operation 10 * 5 = {operation(10, 5, "*")}</p>
            <p>Operation 10 / 5 = {operation(10, 5, "/")}</p>
            <p>Operation 10 % 5 = {operation(10, 5, "%")}</p>

            <p>user: {userObj.name}, age: {userObj.age}, email: {userObj.email}</p>

            <p>{userArr[0]}, {userArr[1]}, {userArr[2]}</p>


            

            {/* <img src="https://d2a0gza273xfgz.cloudfront.net/467901/uploads/4e3a5110-db76-11ea-9736-111aa6094a2a_800_420.jpeg" alt="band"></img> */}

            <img src={path} alt="band"></img>

            <br/>
            <input type="text" value={name} placeholder="Enter your name" />
        </div>
    )

    
}


export default App;