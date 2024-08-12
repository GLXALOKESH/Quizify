import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rePassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Log form data to check if it's being captured correctly
    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:3000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Response:', data);
      
      if (response.ok) {
        // Handle success (e.g., navigate to a different page or show a success message)
      } else {
        // Handle errors (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar exit />

      <div className='w-[100vw] h-[calc(100vh-60px)] bg-[#9f8cca] flex justify-center items-center'>
        <div className="container h-[70%] w-[40%] bg-[#3e394c] rounded-b-[10px]">
          <div className="header w-[100%] h-[50px] border-b-2 border-[#9f8cca] flex justify-center items-center text-[23px] uppercase font-bold text-[#7e6df3]">
            Register
          </div>
          <div className="form w-full h-[calc(100%-50px)] p-[40px]">
            <form onSubmit={handleSubmit}>
              <label className='flex capitalize text-white'>
                <p className='w-[30%] text-[95%]'>Username :</p>
                <input
                  name="username"
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className='text-white w-[70%] outline-none px-[5px] bg-[#332f3f]'
                />
              </label>
              <label className='flex mt-[30px] capitalize text-white'>
                <p className='w-[30%] text-[95%]'>Password :</p>
                <input
                  name="password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className='text-white w-[70%] px-[5px] outline-none bg-[#332f3f]'
                />
              </label>
              <label className='flex mt-[30px] capitalize text-white w-[100%]'>
                <p className='w-[30%] text-[95%]'>Re-password:</p>
                <input
                  name="rePassword"
                  type="password"
                  id="rePassword"
                  value={formData.rePassword}
                  onChange={handleChange}
                  className='text-white w-[70%] px-[5px] outline-none bg-[#332f3f]'
                />
              </label>
              <NavLink to="/login">
                <div className="tosignup text-[12px] text-white mt-[15px]">Already have an account?</div>
              </NavLink>
              <div className='flex justify-center m-[40px]'>
                <button type="submit" className='bg-white p-[3px] rounded-[5px] font-bold uppercase text-[13px]'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
