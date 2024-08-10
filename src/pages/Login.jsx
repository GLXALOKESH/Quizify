import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <>
    <Navbar exit />
    <div className=' w-[100vw] h-[calc(100vh-60px)] bg-[#9f8cca] flex justify-center items-center'>
	
        <div className="conatiner h-[70%] w-[40%] bg-[#3e394c] rounded-b-[10px]">
            <div className="header w-[100%] h-[50px] border-b-2 border-[#9f8cca] flex justify-center items-center text-[23px] uppercase  font-bold text-[#7e6df3]"> Login</div>
            <div className="form w-full h-[calc(100%-50px)] p-[40px]">
                <form action="/" method="post">
                <label className='flex   capitalize text-white'>
                <p className='w-[30%] text-[95%]'>username :</p>  
                    <input type="text" name="username" id="username" className='text-white w-[70%] outline-none px-[5px] bg-[#332f3f]'/>
                </label>
                <label className='flex  mt-[30px]  capitalize text-white '>
                <p className='w-[30%] text-[95%]'> password :  </p>  
                    <input type="password" name="username" id="username" className='text-white w-[70%] px-[5px] outline-none bg-[#332f3f] '/>
                </label>
                <NavLink to="/register"><div className="tosignup text-[12px]  text-white mt-[15px]">Don't have an account ?</div></NavLink>
                <div className='flex  justify-center m-[40px]'>
                <button type="submit" className='bg-white p-[3px] rounded-[5px] font-bold uppercase text-[13px]  '>submit</button>
                </div>
                </form>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Login
