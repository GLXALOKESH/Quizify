import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className="nav w-full h-[60px] bg-black text-white px-[20px] flex items-center text-[25px] font-bold justify-between">
      Quizify
      <div className="buttons flex items-center h-full gap-[8px]">
        {props.in ? (
          <>
            <NavLink to="/login"><button className='p-[3px] rounded-[7px] text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 font-bold select-none text-[50%] py-[4px] bg-black border-[1px] border-white'>
              Login
            </button>
            </NavLink>
            <NavLink to="/register"><button className='p-[3px] rounded-[7px] text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 font-bold select-none text-[50%] py-[4px] bg-black border-[1px] border-white'>
              Register
            </button>
            </NavLink>

          </>
        ) : null}
        {props.out ?(<><button className='p-[3px] rounded-[7px] text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 font-bold select-none text-[50%] py-[4px] bg-black border-[1px] border-white'>Logout
            </button></>): null} 

        {props.exit ? (<> <NavLink to="/" ><button className='p-[3px] rounded-[7px] text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 font-bold select-none text-[50%] py-[4px] bg-black border-[1px] border-white'>Exit
          </button></NavLink></>):null}

        
              
      </div>
    </div>
  );
}

export default Navbar;
