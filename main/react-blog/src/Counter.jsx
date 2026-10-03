import { useEffect } from "react";

const Counter = ({ count, data }) => {
    

    const handleCounter=()=>{
        console.log("handlecounter function called");   
    };

    const handleData=()=>{
        console.log("handleData function called");
    }

    

    useEffect(()=>{
        handleCounter();
        // handleData();
    }, []); // this will run only once when the component is mounted

    useEffect(()=>{
        handleData();
    }, [data]); // this will run only when the data prop changes
    
    // handleCounter();
    return (
        <div>
            <h1>Counter value : {count}</h1> 
            <h1>Data value : {data}</h1> 
        </div>
    );
}

export default Counter;