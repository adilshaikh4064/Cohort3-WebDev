"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react"

export default function Signup(){
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const usernameRef=useRef(null);
    const router=useRouter();

    return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="mb-4">
            <div className="border-1 border-gray-400 focus-within:border-red-800 rounded-xl focus-within:shadow-md focus-within:shadow-red-800 h-fit w-100 m-1.5 hover:border-red-800 transition-all duration-200">
                <input id="username-input" type="email" placeholder="Create username" className="outline-none p-2 w-full h-fit font-bold" ref={usernameRef}/>
            </div>
            <div className="border-1 border-gray-400 focus-within:border-red-800 rounded-xl focus-within:shadow-md focus-within:shadow-red-800 h-fit w-100 m-1.5 hover:border-red-800 transition-all duration-200">
                <input id="email-input" type="email" placeholder="Enter your email" className="outline-none p-2 w-full h-fit font-bold" ref={emailRef}/>
            </div>
            <div className="border-1 border-gray-400 focus-within:border-red-800 rounded-xl focus-within:shadow-md focus-within:shadow-red-800 h-fit w-100 m-1.5 hover:border-red-800">
                <input id="password-input" type="password" placeholder="Enter password" className="outline-none p-2 w-full h-fit font-bold" ref={passwordRef}
                />
            </div>
        </div>
        <div className="w-35 flex justify-center items-center">

            <button
                onClick={async ()=>{
                    const response=await axios.post('./api/v1/signup',{
                        data:{
                            //@ts-expect-error: not an error
                            username:usernameRef.current.value,
                            //@ts-expect-error: not an error
                            email:emailRef.current.value,
                            //@ts-expect-error: not an error
                            password:passwordRef.current.value
                        }    
                    })
                    console.log(response);
                    if(response.statusText==="OK"){
                        const id=response.data.userId;
                        router.push(`/dashboard/${id}`)
                    }
                }}
                className="text-center font-bold text-lg h-full w-full rounded-3xl border-1 border-red-800 py-1.5 bg-red-800 transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer hover:border-gray-400 hover:border-1"
            >
                Sign up
            </button>
        </div>
    </div>
    )
}