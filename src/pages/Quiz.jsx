import React, { useEffect } from 'react'
import Navbar from "../components/Navbar.jsx"
import { useState } from 'react'
import './quiz.css'
import Timer from '../components/Timer.jsx'
import {timerReturn} from "../context/timerReturn.js"
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
    const [questions, setQuestions] = useState([
        {Question:"What is 2+2", options:[3,5,6,4] , ans: 4},
        {Question:"What is 2+3", options:[3,5,6,4] , ans: 5}

    ])
    const navigate= useNavigate()
    const [timerStopReturn, setTimerStopReturn] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selected, setSelected] = useState(null)
    const [score, setScore] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    useEffect(() => {
      
      if(timerStopReturn){
        
        setSubmit(true)
      }
    
    }, [timerStopReturn])
    

    function handleSubmit() {
        if(submit){
          if(selectedOption == answer){
            setScore(score => score = score+10)
          }
          if (currentIndex === questions.length - 1) {
            // Navigate to the scorelist page if it's the last question
            navigate("/scorelist");
        } else {
            // Increment the current index to move to the next question
            setCurrentIndex(index => index + 1);
            setSubmit(false);
            setSelected(null);
            setSelectedOption(null);
        }
        }
        else{

          setSubmit(true)
          
        }
    }

    function handleSelect(index){
      setSelected(index)
      setSelectedOption(question.options[index])
    }
    
    const question = questions[currentIndex]
    const options = question.options
    const answer = question.ans
    const totalScore = (questions.length) * 10
    
  return (
    <>
      <timerReturn.Provider value={{ timerStopReturn, setTimerStopReturn }}>

      <Navbar out />
      <div className="main-cont h-[calc(100vh-60px)] w-[100vw] flex justify-center items">
        <div className="inn-cont  h-full w-[50%] flex flex-col px-[10px] py-[20px] items-center gap-[1%] justify-center">
          <div className="qno font-bold uppercase text-[1.5rem] h-[6%]">Question No. 1</div>
          <div className="question w-full px-[7%] pl-0 h-[25%] items-end  overflow-y-scroll flex scrollbar
           mb-[5px]">
            {`Q. ${question.Question}`}
            
            </div>
          <div className="options  w-full h-[50%] py-[10px] flex flex-col justify-between px-[10px]">
          {options.map((option, index) => {
  // Determine the base class
  let baseClass = "option text-black p-[5px] flex justify-center items-center h-[22%] w-[80%] rounded-full cursor-pointer relative ";

  // Add classes based on selection and submission state
  if (submit) {
    if (option === answer) {
      baseClass += " bg-green-700";
    } else if (selected === index) {
      baseClass += " bg-red-500";
    }
    else{
      baseClass += "bg-gray-400 ";
    }
  } else {
    baseClass += selected === index ? " bg-yellow-500 left-[10%]" : " bg-gray-400 hover:bg-gray-500 transition-options";
  }

  return (
    <button
      key={index}
      onClick={(e) => (submit ? null : handleSelect(index))}
      className={baseClass}
      disabled={submit}
    >
      {option}
    </button>
  );
})}

          </div>
          <div className="btn-timer  w-full h-[18%] flex px-[10px] justify-between items-center">
            <div className="timer h-full flex items-center gap-[5px]">
              <div className="gif h-[70%]">
                <img src="clock.gif" alt="" className='h-[100%]'/>
              </div>
              <div className="count"><Timer /></div>
            </div>
            <button className="submit bg-gray-500 text-white p-[7px] rounded-full shadow-black shadow-1" onClick={handleSubmit}>{submit?"Next":"Submit"}</button>
            <div className="score">{`${score}/${totalScore}`}</div>
          </div>
        </div>
      </div>
      </timerReturn.Provider>
    </>
  )
}

export default Quiz
