import React from 'react'

import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Breadcrumb from '../../Components/Layout/Breadcrumb'
import CardNewMentee from '../../Components/Layout/CardNewMentee'

function TambahMentee() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow">
                <Navbar />
                {/* Konten Utama Dashboard */}
                <div className='content-header flex justify-between m-4'>
                    <h1 className='text-3xl font-bold leading-none tracking-tight'>Add Mentee</h1>
                    <Breadcrumb />
                </div>
                <div>
                    <div>

                    </div>
                    <CardNewMentee />
                </div>


            </main>
        </div>
    )
}

export default TambahMentee