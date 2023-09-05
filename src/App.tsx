// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import ClassPage from "./Pages/ClassPage/ClassPage"
import Dashboard from "./Pages/Dashboard"
import LandingPage from './Pages/LandingPage'
import ListMentee from "./Pages/ListMentee/indexMentee"
import Login from "./Pages/Login"
import NewClassPage from "./Pages/ClassPage/NewClassPage"

const App = () => {
  return (
    <div className="bg-gray-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ListMentee" element={<ListMentee />} />
          <Route path="/Class" element={<ClassPage />} />
          <Route path="/NewClass" element={<NewClassPage />} />
          {/* <Redirect path="/Dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App