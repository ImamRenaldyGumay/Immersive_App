// import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"


import LandingPage from './Pages/LandingPage'
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import ListMentee from "./Pages/ListMentee/indexMentee"

const App = () => {
  return (
    <div className="bg-gray-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ListMentee" element={<ListMentee />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App