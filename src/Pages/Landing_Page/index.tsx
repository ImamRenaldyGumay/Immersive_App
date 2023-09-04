// import React from 'react'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div>
        <p>Landing Page</p>
        <Link to="/Login">Login</Link>
        <br />
        <Link to="/Dashboard">Dashboard</Link>
    </div>
  )
}

export default LandingPage