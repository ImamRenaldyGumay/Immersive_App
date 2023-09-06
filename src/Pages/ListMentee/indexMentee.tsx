// import React from 'react'

import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Breadcrumb from '../../Components/Layout/Breadcrumb'
import CardListMentee from '../../Components/Layout/CardListMentee'

const indexMentee = () => {
    return (
        <>
            <div>
                <div className="flex">
                    <Sidebar />
                    <main className="flex-grow">
                        <Navbar />
                        {/* Konten Utama Dashboard */}
                        <div className='content-header flex justify-between m-4'>
                            <h1 className='text-3xl font-bold leading-none tracking-tight'>Mentee List</h1>
                            <Breadcrumb />
                        </div>
                        <div>
                            <CardListMentee />

                        </div>


                    </main>
                </div>
            </div>
        </>
    )
}

export default indexMentee
