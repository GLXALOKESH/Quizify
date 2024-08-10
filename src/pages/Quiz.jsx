import React from 'react'
import Navbar from "../components/Navbar.jsx"
import { useState } from 'react'
import './quiz.css'
const Quiz = () => {
    const [questions, setQuestions] = useState([
        {Question:"What is 2+2", options:[3,5,6,4] , ans: 4},
        {Question:"What is 2+3", options:[3,5,6,4] , ans: 5}

    ])

    
  return (
    <>
      <Navbar out />
      <div className="main-cont h-[calc(100vh-60px)] w-[100vw] flex justify-center">
        <div className="inn-cont  h-full w-[50%] flex flex-col px-[10px] py-[20px] items-center gap-[1%]">
          <div className="qno font-bold uppercase text-[1.5rem] h-[6%]">Question No. 1</div>
          <div className="question w-full px-[7%] pl-0 max-h-[25%] overflow-y-scroll flex scrollbar
           mb-[5px]"><p className='w-[calc((50vw-20px)*7%)]'>Q.</p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quidem vero veritatis magni incidunt quasi quisquam nesciunt? A debitis in id repellendus! Ratione deleniti modi et quisquam delectus illo, sunt quaerat eligendi saepe cumque rerum fuga. Aliquam, at adipisci odio libero eligendi illum nemo sit quia sapiente numquam, perferendis quod, amet aut maxime natus voluptate facere nisi itaque distinctio. Delectus?</div>
          <div className="options  w-full h-[50%] py-[10px] flex flex-col justify-between px-[10px]">
            <div className="option h-[22%] bg-black w-[80%] rounded-full cursor-pointer relative transition-options "></div>
            <div className="option h-[22%] bg-black w-[80%] rounded-full cursor-pointer relative transition-options "></div>
            <div className="option h-[22%] bg-black w-[80%] rounded-full cursor-pointer relative transition-options "></div>
            <div className="option h-[22%] bg-black w-[80%] rounded-full cursor-pointer relative transition-options "></div>

          </div>
          <div className="btn-timer bg-black w-full h-[18%]"></div>
        </div>
      </div>
    </>
  )
}

export default Quiz
