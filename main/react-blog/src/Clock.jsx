import { useState,useEffect } from "react";

const Clock=(props)=>{
    const [time,setTime]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[]);
    return (
        <div>
            <h1 style={{color:props.color,backgroundColor:"#000",width:"200px",borderRadius:"5px"
            }}>{time}</h1>
        </div>
    )
}

export default Clock;