import React, { useState } from 'react'
import route from '../src/config'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App(){
  const [uid, setUid]= useState(0)
  document.title = 'User Profile'
  const handleUid =(uid)=>{
    setUid(uid)
  }
  const uuid = 1;

  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App
