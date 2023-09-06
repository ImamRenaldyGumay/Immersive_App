import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Breadcrumb from '../../Components/Layout/Breadcrumb'
import CardListMentee from '../../Components/Layout/CardListMentee'
import TableMentee from '../../Components/TableMentee'
// import CardMentee from '../../Components/Layout/CardListMentee'

const indexMentee = () => {

    const [Mentee, setMentee] = useState([])

    const getAllMentee = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setMentee(response?.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAllMentee();
    }, [])

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
                        <div className='max-w-full p-4  bg-white border border-gray-400 m-4 rounded-lg shadow'>
                            <div>
                                <table className="table-auto w-full p-3 border-collapse border border-slate-400">
                                    <thead className='bg-slate-300'>
                                        <tr>
                                            <th className='border border-slate-600'>No.</th>
                                            <th className='border border-slate-600'>Name</th>
                                            <th className='border border-slate-600'>Class</th>
                                            <th className='border border-slate-600'>Status</th>
                                            <th className='border border-slate-600'>Category</th>
                                            <th className='border border-slate-600'>Gender</th>
                                            <th className='border border-slate-600'>Detail</th>
                                            <th className='border border-slate-600'>Edit</th>
                                            <th className='border border-slate-600'>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableMentee Mentee={Mentee}/>
                                    </tbody>

                                </table>

                            </div>

                        </div>


                    </main>
                </div>
            </div>
        </>
    )
}

export default indexMentee
