import React from 'react'

const Landing = () => {
  return (
    <>
     <div className="nav w-[100%] h-[60px] bg-black text-white px-[20px]  flex items-center text-[25px] font-bold ">
        Quizify
      </div> 
      <div className="maincont h-[calc(100vh-60px)] w-[100vw] flex justify-center items-center">
     <div className="container  w-[50%] flex flex-col items-center gap-[10px]">
        <p className='text-[200%] text-center font-bold capitalize'>Welcome to Quizify A React Quiz Platform for everybody</p>
        <button className='bg-cyan-500 p-[5px] rounded-[7px] text-white hover:bg-cyan-700 font-bold  select-none'>Let's Start</button>
     </div>
     </div>
     
    </>
  )
}

export default Landing
