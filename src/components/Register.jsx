import React from 'react'

const Register = () => {
  return (
    <div className=' w-[100vw] h-[100vh] bg-[#9f8cca] flex justify-center items-center'>
	
        <div className="conatiner h-[80%] w-[50%] bg-[#3e394c] rounded-b-[10px]">
            <div className="header w-[100%] h-[50px] border-b-2 border-[#9f8cca] flex justify-center items-center text-[23px] uppercase  font-bold text-[#7e6df3]"> login</div>
            <div className="form w-full h-[calc(100%-50px)] p-[40px]">
                <form action="/" method="post">
                <label className='flex gap-[5px]  capitalize text-white'>
                    username:  
                    <input type="text" name="username" id="username" className='text-black'/>
                </label>
                </form>
            </div>
        </div>
       
    </div>
  )
}

export default Register
