import { Link } from "react-router-dom"
import InputBox from "./InputBox"
import { useState } from "react"
import type { signupTypes } from "@adi-amatdev/medium-common"



const Auth = ({type}:{type:"signup" | "signin"}) => {
  const [payload, setPayload] = useState<signupTypes>({
    name: "",
    email: "",
    password: ""
  });


  
  return (
    <div
    className="flex flex-col justify-center items-center gap-4"
    >
      
        <div className="text-4xl font-medium font-serif " >
            {type ==='signup' ? "Create an account":"Welcome back!"}
        </div>
        <div className="gap-4  text-slate-400">
            {type==='signup'? 'Already have an account?':'Don\'t have an account?'} <Link to={type === 'signup'?'/signin':'/signup'} className="underline">{type ==='signup'?'Login':'SignUp'}</Link>
        </div>
        <div className="w-80 mt-3">
            {type ==='signup' && <InputBox label="Name" placeholder="Enter your name" onChange={(e)=>{
              setPayload({
                ...payload,
                name: e.target.value
              });
            }} />}
            <InputBox label="Email" placeholder="Enter your email" onChange={(e)=>{
              setPayload({
                ...payload,
                email: e.target.value
              });
            }} />
            <InputBox 
              label="Password" 
              placeholder="Enter your password" 
              isPassword={true}
              onChange={(e)=>{
                setPayload({
                  ...payload,
                  password: e.target.value
                });
              }} 
            />
            
            <button className="w-80 text-white mt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
        </div>
    </div>
  )
}

export default Auth