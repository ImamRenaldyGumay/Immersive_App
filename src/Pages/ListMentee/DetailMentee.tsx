import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

const DetailMentee = () => {
    const location = useLocation()
    const id = location?.state?.id

    const [detailMentee, setDetailMentee] = useState({id})

    const getDetailMentee = (id: any) => {
        axios
        .get(`https://virtserver.swaggerhub.com/BE-18/ALTA_Project/1.0.0/mentees/${id}`)
        .then((response) => {
            console.log(response);
            setDetailMentee(response?.data?.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getDetailMentee(id);
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-grow">
                    <Navbar />
                    {/* Konten Utama Dashboard */}
                    <div className='content-header flex justify-between m-4'>
                        <h1 className='text-3xl font-bold leading-none tracking-tight'>Mentee Log</h1>

                    </div>
                    <div className="max-w-full p-4 bg-white border border-gray-200 m-4 rounded-lg shadow">
                        <div className='m-5'>
                            <table className='w-full border-2'>
                                <tr>
                                    <td className='border-2 text-3xl'>{detailMentee?.full_name}</td>
                                    <td className='border-2'>Phone : {detailMentee?.phone}</td>
                                </tr>
                                <tr>
                                    <td className='border-2'>{detailMentee?.class}</td>
                                    <td className='border-2'>Telegram: {detailMentee?.telegram}</td>
                                </tr>
                                <tr>
                                    <td className='border-2'>{detailMentee?.major}</td>
                                    <td className='border-2'>Discord:  </td>
                                </tr>
                                <tr>
                                    <td className='border-2'>{detailMentee?.institution}</td>
                                    <td className='border-2'>Email : {detailMentee?.email}</td>
                                </tr>
                            </table>
                        </div>
                        <div className='flex justify-end mb-5 mt-2'>
                            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600'>Add New Log</button>
                        </div>
                        <div className='bg-slate-200 ml-10 mb-4 border-4 pb-5 p-4'>
                            <div className='flex'>
                                <div className='md:w-2/12'>
                                    <div>
                                        <p id='status' className='font-bold'>End Of Section</p>
                                    </div>
                                    <div>
                                        <p id='user' className='font-bold'>Bagas</p>
                                    </div>
                                    <div>
                                        <p id='date'>29-oktober-2019</p>
                                    </div>
                                </div>
                                <div className='md:w-10/12'>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus hic ut consequatur voluptas blanditiis recusandae, mollitia iste, vitae, nemo officia totam explicabo quasi atque fugit? Voluptates nisi harum aut perferendis officiis laboriosam praesentium repellat reiciendis eaque, consequuntur nostrum dolore laudantium deleniti omnis quod asperiores veritatis. Ipsa asperiores ipsam possimus, doloribus nam soluta corporis, quam ut amet suscipit corrupti et tempore nulla? Hic voluptatem repudiandae autem suscipit ipsa placeat incidunt, vel, numquam qui, fugit accusantium porro asperiores. Sunt, a sed consequuntur aperiam magnam dignissimos exercitationem nostrum aspernatur inventore reprehenderit praesentium ipsa quasi ex hic ipsum. Alias dignissimos dolore laborum explicabo officiis.
                                    </div>
                                    <div>
                                        <p className='font-bold'>Continue to Section 2</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='bg-slate-200 ml-10 p-4'>
                            <div className='flex'>
                                <div className='md:w-2/12'>
                                    <div>
                                        <p id='status' className='font-bold'>End Of Section</p>
                                    </div>
                                    <div>
                                        <p id='user' className='font-bold'>Bagas</p>
                                    </div>
                                    <div>
                                        <p id='date'>29-oktober-2019</p>
                                    </div>
                                </div>
                                <div className='md:w-10/12'>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus hic ut consequatur voluptas blanditiis recusandae, mollitia iste, vitae, nemo officia totam explicabo quasi atque fugit? Voluptates nisi harum aut perferendis officiis laboriosam praesentium repellat reiciendis eaque, consequuntur nostrum dolore laudantium deleniti omnis quod asperiores veritatis. Ipsa asperiores ipsam possimus, doloribus nam soluta corporis, quam ut amet suscipit corrupti et tempore nulla? Hic voluptatem repudiandae autem suscipit ipsa placeat incidunt, vel, numquam qui, fugit accusantium porro asperiores. Sunt, a sed consequuntur aperiam magnam dignissimos exercitationem nostrum aspernatur inventore reprehenderit praesentium ipsa quasi ex hic ipsum. Alias dignissimos dolore laborum explicabo officiis.
                                    </div>
                                    <div>
                                        <p className='font-bold'>Continue to Section 2</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                </main>
            </div>
        </>
    )
}

export default DetailMentee