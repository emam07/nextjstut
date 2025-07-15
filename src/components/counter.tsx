"use client";
import { useState } from "react"
export const Counter =()=>{
    console.log("Counter component");
    const [count, setCount] = useState(0)
    return (<button className='m-8 p-8 bg-amber-500 rounded h-full' onClick={()=> setCount(count+1)}> Clicked me {count} times </button>);

}