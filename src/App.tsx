// import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"


// import LandingPage from './Pages/LandingPage'
// import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import Userlist from "./Pages/Userlist"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userlist />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* <Redirect path="/Dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App