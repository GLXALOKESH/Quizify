import React from 'react'
import Navbar from "../components/Navbar.jsx"
import { NavLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <Navbar out/>
      <div className='main-cont h-[calc(100vh-60px)] w-[100vw] flex justify-center items-center '>
      <div className="cont w-[50%] h-[80%] gap-[10px] flex flex-col  items-center">
      <img src="question-mark-question.gif" alt="" className='h-[50%]  aspect-square' />
      <NavLink to="/quiz">
      <button className='bg-cyan-500 p-[3px] rounded-[7px] text-white hover:bg-cyan-700 font-bold  select-none  '>Start</button>
      </NavLink>
      </div>
      </div>
    </>
  )
}

export default Homepage
