import React from 'react'
import Navbar from "../components/Navbar.jsx"
import { NavLink } from 'react-router-dom'


const Landing = () => {
  return (
    <>
      <Navbar in />
      <div className="maincont h-[calc(100vh-60px)] w-[100vw] flex justify-center items-center">
     <div className="container  w-[50%] flex flex-col items-center gap-[10px]">
        <p className='text-[200%] text-center font-bold capitalize'>Welcome to Quizify A React Quiz Platform for everybody</p>
        <NavLink to="/login"><button className='bg-cyan-500 p-[5px] rounded-[7px] text-white hover:bg-cyan-700 font-bold  select-none border-black border-[1px] '>Let's Start</button></NavLink>
     </div>
     </div>
     
    </>
  )
}

export default Landing
