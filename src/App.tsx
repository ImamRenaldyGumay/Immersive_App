// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from './Pages/LandingPage'
import Login from "./Pages/Login"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App