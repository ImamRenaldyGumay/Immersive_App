import { Button } from 'flowbite-react'
import React from 'react'

const CardNewMentee = () => {
    return (
        <div className="p-7  bg-white border border-gray-400 m-4 rounded-lg shadow">
            <div id='box-header' className='border-b-2 border-gray-400 mb-5'>
                <h3 className='text-3xl font-semibold mb-3 text-center text-blue-600'>Add Mentee</h3>
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
                    <label htmlFor="Telegram">Telegram</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" />
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Emergency Data</h1>
                    </div>
                    <div>
                        <label htmlFor="emergency_name">Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="emergency_phone">Phone</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="emergency_status">Status</label>
                        <select>
                            <option value="orang_tua">Orang Tua</option>
                            <option value="kakek_nenek">Kakek Nenek</option>
                            <option value="saudara_ortu">Saudara dari Orang Tua Kandung</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='text-2xl font-semibold'>Education Data</h3>
                    </div>
                    <div className='flex'>
                        <label htmlFor="type" className='mr-4'>Type</label>
                        <div className="flex">
                            <div className="flex items-center mr-4">
                                <input id="inline-radio" type="radio" value="informatics" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Informatics</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="inline-2-radio" type="radio" value="non-informatics" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                                <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">non-informatics</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="major">Major</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="graduate">Graduate</label>
                        <input type="text" />
                    </div>

                </div>
                <Button>Submit</Button>

            </form>



        </div>
    )
}

export default CardNewMentee