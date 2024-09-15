"use client"
import Input from "@/app/Components/form/input";

import React, { useState } from "react";

export default function Login() {
  const [hand, setHand]= useState(false)
  const handelSubmit=({e}:{e:any})=>{
    e.preventDefault()
    setHand(true)
  }
  return (
    <form onSubmit={(e) => handelSubmit({e})} className="    my-[4rem] ">
      <div className="flex flex-col justify-center items-center">

      <div className=" flex flex-col text-center items-center justify-center">
        
      <h1 className="  text-2xl font-bold sm:text-4xl  ">Welcome to Shop 🛒</h1>
      <p className=" mt-4  text-sm sm:text-base  text-gray-500">
        Login to your account to continue shopping
      </p>
      <div className=" flex flex-col items-center justify-center gap-[1rem] mt-[2rem] w-[12.5rem] sm:w-[25rem] ">
            <Input placeholder="Your Name" type="text" name="name" id="name"/>
            <Input placeholder="Your Email" type="email" name="email" id="email"/>
            <Input placeholder="Your Password" type="password" name="password" id="password"/>
            {hand && <div className=' text-left bg-red-400  border-none w-full rounded-md py-1.5 pl-4 pr-20  text-white   sm:text-md sm:leading-6'><h2>login failed.</h2></div>}
          <button type="submit" className="   mt-[2rem] rounded-md border border-transparent  font-medium text-white text-center  bg-[#394149] px-10 md:px-20 py-3 text-sm   ">
            Log in
          </button>
          
          </div>
          </div>
      </div>
    </form>
  );
}
