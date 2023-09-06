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
                    <h2 className='text-4xl font-bold'>Add Mentee</h2>
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