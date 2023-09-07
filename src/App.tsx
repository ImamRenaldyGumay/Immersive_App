import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios"


import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import LandingPage from './Pages/LandingPage'
import ListMentee from "./Pages/ListMentee/indexMentee"
import ClassPage from "./Pages/ClassPage/ClassPage"
import NewClassPage from "./Pages/ClassPage/NewClassPage"
import TeamPage from "./Pages/TeamPage/TeamPage"
import TambahMentee from "./Pages/ListMentee/tambahMentee"
import DetailMentee from "./Pages/ListMentee/DetailMentee"
import NewTeamPage from "./Pages/TeamPage/NewTeamPage"
import Adduser from "./Pages/ListUser/Adduser"
import Userlist from "./Pages/ListUser/Userlist"


const App = () => {

  axios.defaults.baseURL = "https://virtserver.swaggerhub.com/BE-18/ALTA_Project/1.0.0"

  return (
    <div className="bg-gray-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ListMentee" element={<ListMentee />} />
          <Route path="/Class" element={<ClassPage />} />
          <Route path="/NewClass" element={<NewClassPage />} />
          <Route path="/Team" element={<TeamPage />} />
          <Route path="/NewTeam" element={<NewTeamPage />} />
          <Route path="/TambahMentee" element={<TambahMentee />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/DetailMentee" element={<DetailMentee />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App