import { Link } from "react-router-dom"
import InputBox from "./InputBox"
import { useState } from "react"
import type { signinTypes, signupTypes } from "@adi-amatdev/medium-common"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {DATA_URL} from "../../config"


export const SignUpComponent = () => {
  const nav = useNavigate();
  const [payload, setPayload] = useState<signupTypes>({
    name: "",
    email: "",
    password: ""
  });
  
  const postPayload = async ()=>{
    try {
      const response = axios.post(`${DATA_URL}/user/signup`,payload);
      const jwt = (await response).data;
      localStorage.setItem("jwt",jwt);
      nav('/blogs');
    } catch (error) {
      alert('Unable to sign up');
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-4xl font-medium font-serif">
        Create an account
      </div>
      <div className="gap-4 text-slate-400">
        Already have an account? <Link to="/signin" className="underline">Login</Link>
      </div>
      <div className="w-80 mt-3">
        <InputBox 
          label="Name" 
          placeholder="Enter your name" 
          onChange={(e) => {
            setPayload({
              ...payload,
              name: e.target.value
            });
          }} 
        />
        <InputBox 
          label="Email" 
          placeholder="Enter your email" 
          onChange={(e) => {
            setPayload({
              ...payload,
              email: e.target.value
            });
          }} 
        />
        <InputBox 
          label="Password" 
          placeholder="Enter your password" 
          isPassword={true}
          onChange={(e) => {
            setPayload({
              ...payload,
              password: e.target.value
            });
          }} 
        />
        
        <button onClick={()=>{postPayload()}} className="w-80 text-white mt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export const SignInComponent = () => {
  const nav = useNavigate();
  const [payload, setPayload] = useState<signinTypes>({
    email: "",
    password: ""
  });
  
  const postPayload = async ()=>{
    try {
      const response = axios.post(`${DATA_URL}/user/signin`,payload);
      const jwt = (await response).data;
      localStorage.setItem("jwt",jwt);
      nav('/blogs');
    } catch (error) {
      alert('Unable to sign in');
      alert(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-4xl font-medium font-serif">
        Welcome Back!
      </div>
      <div className="gap-4 text-slate-400">
        Don't have an account? <Link to="/signup" className="underline">SignUp</Link>
      </div>
      <div className="w-80 mt-3">
        <InputBox 
          label="Email" 
          placeholder="Enter your email" 
          onChange={(e) => {
            setPayload({
              ...payload,
              email: e.target.value
            });
          }} 
        />
        <InputBox 
          label="Password" 
          placeholder="Enter your password" 
          isPassword={true}
          onChange={(e) => {
            setPayload({
              ...payload,
              password: e.target.value
            });
          }} 
        />
        
        <button onClick={()=>{postPayload()}} className="w-80 text-white mt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Sign In
        </button>
      </div>
    </div>
  )
}
