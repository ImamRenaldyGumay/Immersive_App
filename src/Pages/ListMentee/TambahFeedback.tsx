import React from 'react'

import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Breadcrumb from '../../Components/Layout/Breadcrumb'

const TambahFeedback = () => {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <main className='flex-grow'>
                    <Navbar />
                    <div className='content-header flex justify-between m-4'>
                        <h1 className='text-3xl font-bold leading-none tracking-tight'>New Log</h1>
                        <Breadcrumb />
                    </div>
                    <div className="max-w-full p-10 bg-white border border-gray-400 m-4 rounded-lg shadow">
                        <div className='text-center'>
                            <h1 className='text-2xl'>New Log</h1>
                        </div>
                        <div>
                            <label htmlFor="status" className='md:w-2/10 text-2xl font-medium text-gray-900 '>Status</label>
                            <select name="status" id="status">
                                <option value="">-- Pilih --</option>
                                <option value="active">Active</option>
                            </select>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='md:w-2/10 text-2xl font-medium text-gray-900 '>Feedback</h1>
                            <textarea name="feedback" id="feedback" className='p-2.5 md:w-10/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' placeholder="Write your thoughts here...">sksjs</textarea>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}

export default TambahFeedback