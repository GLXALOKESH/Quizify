import React from 'react';

const Navbar = (props) => {
  return (
    <div className="nav w-full h-[60px] bg-black text-white px-[20px] flex items-center text-[25px] font-bold justify-between">
      Quizify
      <div className="buttons flex items-center h-full gap-[8px]">
        {props.in ? (
          <>
            <button className='p-[3px] rounded-[7px] text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 font-bold select-none text-[50%] py-[4px] bg-black border-[1px] border-white'>
              Login
            </button>
            <button className='p-[3px] rounded-[7px] text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 font-bold select-none text-[50%] py-[4px] bg-black border-[1px] border-white'>
              Register
            </button>
          </>
        ) : null}
        {props.out ?(<><button className='p-[3px] rounded-[7px] text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 font-bold select-none text-[50%] py-[4px] bg-black border-[1px] border-white'>Logout
            </button></>): null} 

        
              
      </div>
    </div>
  );
}

export default Navbar;
