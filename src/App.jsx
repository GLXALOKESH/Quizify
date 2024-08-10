import { useState } from 'react'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Landing from './pages/Landing'
import  Quiz from './pages/Quiz'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'

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
