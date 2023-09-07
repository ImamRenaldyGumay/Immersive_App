import React from 'react'

const CardNewMentee = () => {
    return (
        <div className="p-7  bg-white border border-gray-400 m-4 rounded-lg shadow">
            <div id='box-header' className='border-b-2 border-gray-400 mb-5'>
                <h3 className='text-3xl font-semibold mb-3'>Add Mentee</h3>
            </div>
            <form action="">
                <div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="FullName" className='md:w-2/12 font-medium text-blue-500'>Full Name</label>
                        <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="Address" className='md:w-2/12 font-medium text-blue-500'>Address</label>
                        <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="HomeAddress" className='md:w-2/12 font-medium text-blue-500'>Home Address</label>
                        <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="email" className='md:w-2/12 font-medium text-blue-500'>Email</label>
                        <input type="email" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                    <div className='mb-3 flex'>
                        <label htmlFor="Gender" className='md:w-2/12 font-medium text-blue-500'>Gender</label>
                        <div className="flex md:w-10/12">
                            <div className="flex items-center mr-4">
                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                                <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="telegram" className='md:w-2/12 font-medium text-blue-500'>Telegram</label>
                        <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="phone" className='md:w-2/12 font-medium text-blue-500'>Phone</label>
                        <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-2xl font-semibold mt-10 mb-3'>Emergency Data</h1>
                    </div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="emergency_name" className='md:w-2/12 font-medium text-blue-500'>Name</label>
                        <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="emergency_phone" className='md:w-2/12 font-medium text-blue-500'>Phone</label>
                        <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                    <div className='flex justify-between mb-2 items-center'>
                        <label htmlFor="emergency_status" className='md:w-2/12 font-medium text-blue-500'>Status</label>
                        <select name="emergency_status" id="emergency_status" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg'>
                            <option value="">-- Pilih Salah Satu --</option>
                            <option value="Orang Tua">Orang Tua</option>
                            <option value="Kakek Nenek">Kakek Nenek</option>
                            <option value="Saudara dari Orang Tua">Saudara dari Orang Tua</option>
                        </select>

                    </div>
                </div>
                <div className='mb-5'>
                    <h1 className='text-2xl font-semibold mt-10 mb-3'>Education Data</h1>
                    <div>
                        <div className='flex mb-3'>
                            <label htmlFor="Type" className='md:w-2/12 font-medium text-blue-500'>Type</label>
                            <div className='flex items-center'>
                                <input type="radio" />
                                <label htmlFor="informatics">informatics</label>
                            </div>
                            <div className='flex'>
                                <input type="radio" />
                                <label htmlFor="non-informatics">non-informatics</label>
                            </div>
                        </div>
                        <div className='flex justify-between mb-2 items-center'>
                            <label htmlFor="major" className='md:w-2/12 font-medium text-blue-500'>Major</label>
                            <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                        </div>
                        <div className='flex justify-between mb-2 items-center'>
                            <label htmlFor="graduate" className='md:w-2/12 font-medium text-blue-500'>Graduate</label>
                            <input type="text" className='md:w-10/12 bg-gray-50 border border-gray-600 text-gray-900 p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500' />
                        </div>

                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className='text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 focus:outline-none focus:ring-4 focus:ring-gray-200'><a href="/ListMentee"></a> Cancel</button>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2'>Save</button>
                </div>

            </form>



        </div>
    )
}

export default CardNewMentee