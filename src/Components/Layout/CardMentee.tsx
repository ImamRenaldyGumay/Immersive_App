import React from 'react'

const CardMentee = () => {
    return (
        <div>
            <div className="max-w-full p-4  bg-white border border-gray-200 m-4 rounded-lg shadow">
                {/* Start Search Bar */}
                <div className='flex justify-end gap-4 mb-3'>
                    
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-64">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  d" placeholder="General Search" required/>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2">Search</button>
                    </form>
                    

                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Default</button>
                </div>
                {/* End Search Bar */}


                
                {/* Start Table */}
                <table className="table-auto w-full p-3 border-collapse border-slate-400">
                    <thead className='bg-slate-300'>
                        <tr>
                            <th className='border border-slate-600'>Song</th>
                            <th className='border border-slate-600'>Artist</th>
                            <th className='border border-slate-600'>Year</th>
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

export default CardMentee