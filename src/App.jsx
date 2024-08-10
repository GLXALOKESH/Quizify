import { useState } from 'react'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Landing from './pages/Landing'
import  Quiz from './pages/Quiz'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ScoreList from "./pages/ScoreList"
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Landing />
    },
    {
      path: "/quiz",
      element: <Quiz />
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/register",
      element:<Register />
    },
    {
      path:"/scorelist",
      element:<ScoreList />
    }
  ])

function App() {

  return (
    <>
    
    <RouterProvider  router={router}/>
    </>
  )
}

export default App
