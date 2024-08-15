import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ErrorPopUp from "../components/ErrorPopUp";

const Login = () => {
  const [errorBool, setErrorBool] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    
    e.preventDefault();

    try {
      const responce = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await responce.json();

      if (responce.ok) {
        navigate("/homepage")
      } else {
        setErrorBool(true);
        setErrorMsg(data?.message || "something went wrong");
      }
    } catch (error) {
      setErrorBool(true);
      setErrorMsg("An unexpected error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    if (errorBool) {
      const errshow = setTimeout(() => {
        setErrorBool(false);
        setErrorMsg("");
      }, 2000);

      return () => clearTimeout(errshow);
    }
  }, [errorBool]);

  return (
    <>
      {errorBool && <ErrorPopUp message={errorMsg} />}
      <Navbar exit />
      <div className=" w-[100vw] h-[calc(100vh-60px)] bg-[#9f8cca] flex justify-center items-center">
        <div className="conatiner h-[70%] w-[40%] bg-[#3e394c] rounded-b-[10px]">
          <div className="header w-[100%] h-[50px] border-b-2 border-[#9f8cca] flex justify-center items-center text-[23px] uppercase  font-bold text-[#7e6df3]">
            {" "}
            Login
          </div>

          <div className="form w-full h-[calc(100%-50px)] p-[40px]">
            <form action="/" method="post">
              <label className="flex   capitalize text-white">
                <p className="w-[30%] text-[95%]">email :</p>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  className="text-white w-[70%] outline-none px-[5px] bg-[#332f3f]"
                />
              </label>
              <label className="flex  mt-[30px]  capitalize text-white ">
                <p className="w-[30%] text-[95%]"> password : </p>
                <input
                onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  className="text-white w-[70%] px-[5px] outline-none bg-[#332f3f] "
                />
              </label>

              <NavLink to="/">
                <div className="tosignup text-[12px]  text-white mt-[15px] flex justify-end hover:underline">
                  forget password
                </div>
              </NavLink>

              <NavLink to="/register">
                <div className="tosignup text-[12px]  text-white mt-[15px]">
                  Don't have an account ?
                </div>
              </NavLink>
              <div className="flex  justify-center m-[40px]">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-white p-[3px] rounded-[5px] font-bold uppercase text-[13px]  "
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
