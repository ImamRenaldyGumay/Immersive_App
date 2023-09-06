import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import tableMentee from '../TableMentee'

const CardListMentee = () => {
    return (
        <div>
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



                {/* Start Table */}
                <tableMentee />
                {/* End Table */}




            </div>
        </div>
    )
}

export default CardListMentee