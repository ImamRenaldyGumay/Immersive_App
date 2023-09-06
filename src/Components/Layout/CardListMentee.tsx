import React from 'react'
import { Link } from 'react-router-dom'

interface CardMenteeProps {

}

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
                <table className="table-auto w-full p-3 border-collapse border-slate-400">
                    <thead className='bg-slate-300'>
                        <tr>
                            <th className='border border-slate-600'>No.</th>
                            <th className='border border-slate-600'>Name</th>
                            <th className='border border-slate-600'>Class</th>
                            <th>Status</th>
                            <th>Category</th>
                            <th>Gender</th>
                            <th>Detail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-slate-600'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className='border border-slate-600'>Malcolm Lockyer</td>
                            <td className='border border-slate-600'>1961</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-600'>Witchy Woman</td>
                            <td className='border border-slate-600'>The Eagles</td>
                            <td className='border border-slate-600'>1972</td>
                        </tr>
                        <tr>
                            <td className='border border-slate-600'>Shining Star</td>
                            <td className='border border-slate-600'>Earth, Wind, and Fire</td>
                            <td className='border border-slate-600'>1975</td>
                        </tr>
                    </tbody>
                </table>
                {/* End Table */}




            </div>
        </div>
    )
}

export default CardListMentee