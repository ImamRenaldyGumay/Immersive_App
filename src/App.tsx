// import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"


// import LandingPage from './Pages/LandingPage'
import Login from "./Pages/Login"
import Userlist from "./Pages/ListUser/Userlist"
import ListMentee from "./Pages/ListMentee/indexMentee"
import Dashboard from "./Pages/Dashboard"
import Adduser from "./Pages/ListUser/Adduser"
// import Adduser from "./Pages/ListUser/Adduser"

const App = () => {
  return (
    <div className="bg-gray-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adduser />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ListMentee" element={<ListMentee />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App