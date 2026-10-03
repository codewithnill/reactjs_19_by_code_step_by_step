import { useEffect } from "react";

const Counter = ({ count, data }) => {
    useEffect(() => {
        console.log("Counter component mounted");
    },[]);

    useEffect(() => {
        console.log("Update phase only");
    },[count]);
    
    useEffect(() => {
        return () => {
            console.log("Counter component unmounted");
        }
    },[]);

    return (
        <div>
            <h1>Counter value : {count}</h1> 
            <h1>Data value : {data}</h1> 
        </div>
    );
}

export default Counter;