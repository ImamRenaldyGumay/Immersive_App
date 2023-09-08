import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Breadcrumb from '../../Components/Layout/Breadcrumb'

import TableMentee from '../../Components/Tabel/TableMentee'

const indexMentee = () => {

    const [Mentee, setMentee] = useState<[]>([]);
    const navigate = useNavigate();

    const DetailTo = (id: number) => {
        navigate(`/detailmentee/${id}`, {
            state: {
                id: id,
            }
        });
    }

    const getAllMentee = () => {
        axios
            .get("https://virtserver.swaggerhub.com/BE-18/ALTA_Project/1.0.0/mentees")
            .then((response) => {
                console.log(response)
                setMentee(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getAllMentee();
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-grow">
                    <Navbar />
                    {/* Konten Utama Dashboard */}
                    <div className='content-header flex justify-between m-4'>
                        <h1 className='text-3xl font-bold leading-none tracking-tight'>Mentee List</h1>
                        <Breadcrumb />
                    </div>

                    {/* Start Card Main */}
                    <div className="max-w-full p-4  bg-white border border-gray-400 m-4 rounded-lg shadow">

                        {/* Start Search Bar */}
                        <div className="flex justify-end mb-5 mt-2">
                            <input
                                type="text"
                                className="w-1/3 p-2 border rounded-md shadow-md border-transparent text-center"
                                placeholder="Cari disini"
                            />
                            <button
                                className="px-4 py-2 ml-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none"
                            >
                                Search
                            </button>

                            <button
                                className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                            >
                                <a href="/TambahMentee">Add New</a>
                            </button>
                        </div>
                        {/* End Search Bar */}

                        {/* Start Filter */}
                        <div className='m-3 flex justify-end gap-3'>
                            <button
                                className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                            >
                                Export
                            </button>
                            {/* List all Class */}
                            <div>
                                <label htmlFor="countries" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ">
                                    <option selected>All Class</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="countries" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ">
                                    <option selected>All Status</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="countries" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 ">
                                    <option selected>All Category</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <button
                                className=" bg-blue-500 text-white rounded-md shadow-md 
                        hover:bg-blue-600 focus:outline-none"
                            >
                                Filter
                            </button>
                        </div>
                        {/* End Filter */}

                        {/* Start Table */}
                        <table className="w-full border-collapse border">
                            <thead>
                                <tr className="bg-gray-300 border">
                                    <th className="p-2 border text-left">No. </th>
                                    <th className="p-2 border">Name</th>
                                    <th className="p-2 border">Class</th>
                                    <th className="p-2 border">Status</th>
                                    <th className="p-2 border">Category</th>
                                    <th className="p-2 border">Gender</th>
                                    <th className="p-2 border">Detail</th>
                                    <th className="p-2 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Mentee.map((item: any, index) => (
                                    <TableMentee
                                        key={index}
                                        id={item?.id}
                                        full_name={item?.full_name}
                                        kelas={item?.class}
                                        status={item?.status}
                                        education_type={item?.education_type}
                                        gender={item?.gender}
                                        onClick={() => DetailTo(item?.id)}
                                    />
                                ))}

                                {/* <CardListMentee /> */}
                            </tbody>
                        </table>
                        {/* End Table */}


                    </div>
                    {/* End Card Main */}

                </main>
            </div>

        </>
    )
}

export default indexMentee
