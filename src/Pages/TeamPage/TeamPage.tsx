import Navbar from '../../Components/Navbar'
import React from 'react'
import Sidebar from '../../Components/Sidebar'

type Props = {}

function TeamPage({}: Props) {
  return (
    <>
    <div className="flex">
        <Sidebar/>
        <main className='flex-grow flex flex-col'>
            <Navbar/>
            <div className="flex-grow bg-white p-4 m-3 rounded-md">

            </div>
        
        </main>


    </div>
    </>
  )
}

export default TeamPage