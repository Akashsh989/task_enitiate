import React from "react";
import React_logo from '../assets/React_logo.png'
import Logo from '../assets/Logo.png'
const Loginform=()=>{
    return( 
        <div className="bg-gray-800 h-screen flex items-center justify-center">
            {/* <div className="mb-4 md:mr-4 md:mb-0 order-1 md:order-1">
            <img src={React_logo} alt="React logo"/>
            </div> */}
            <div className="absolute top-0 left-0 mt-5 ml-5">
            <img className="h-16 w-16" src={Logo} alt="logo"/>
            </div>
           
            <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg flex flex-col justify-center"> 
                <h2 className="text-4xl dark:text-white font-bold text-cneter">Login</h2>
        
            <div className="flex flex-col text-gray-400 py-2">
                <label>User Name</label>
                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text"/>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password"/> 
            </div>
            <div className="flex justify-between text-gray-400 py-2">
                <p className="flex items-center"><input className="mr-2" type="checkbox"/>Remember Me</p>
                <p>Forgot password</p>
            </div>
            <button className="w-full my-5 py-2 bg-blue-400 shadow-blue-600/100 hover:shadow-blue-800/100 text-white font-semibold rounded-md">Sign In</button>
            </form>
        </div>
    )
}

export default Loginform