"use client";
import { NextFetchEvent } from "next/server";
import { useRouter } from "next/navigation";

export default function About() {
    const router= useRouter()
    return <>
    <h1 className="justify-center m-32 t-8 ">About Us</h1> <div className="flex">
        <div className="ml-auto">

    <button className="bg-zinc-500 rounded-md p-2 text-white mr-2" onClick={()=>router.push("/")}>Go home </button>
    </div>
    </div>
    
    </> ;

}

