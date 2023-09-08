import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Breadcrumb from '../../Components/Layout/Breadcrumb'
import DetailFeedback from '../../Components/Layout/DetailFeedback'

const DetailMentee = () => {
    const location = useLocation()
    const id = location?.state?.id

    const [detailMentee, setDetailMentee] = useState<any[]>([])
    const [feedback, setFeedback] = useState<[]>([])

    const getDetailMentee = (id: any) => {
        axios
            .get(`https://virtserver.swaggerhub.com/BE-18/ALTA_Project/1.0.0/mentees/${id}`)
            .then((response) => {
                // console.log(response);
                setDetailMentee(response?.data?.data);
            })
            .catch((error) => {
                console.log('Error From API Mentee : ',error);
            })
    }

    const getFeedbackMentee = (id: any) => {
        axios
            .get(`https://virtserver.swaggerhub.com/BE-18/ALTA_Project/1.0.0/mentees/${id}/feedback`)
            .then((response) => {
                console.log("feedback mentee : ",response)
                setFeedback(response?.data?.data?.feedbacks)
            })
            .catch((error) => {
                console.log('Error From API Feedback : ',error);
            })
    }

    useEffect(() => {
        getDetailMentee(id);
        getFeedbackMentee(id);
    }, [id])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-grow">
                    <Navbar />
                    {/* Konten Utama Dashboard */}
                    <div className='content-header flex justify-between m-4'>
                        <h1 className='text-3xl font-bold leading-none tracking-tight'>Detail Mentee</h1>
                        <Breadcrumb />
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
                            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600'>
                                <a href="/tambahFeedback">
                                    Add New Log
                                </a>
                            </button>
                        </div>
                        {/* <div>
                            {feedback.notes}
                        </div> */}
                        {feedback.map((item: any, index) => {
                            return (
                                <DetailFeedback
                                    key={index}
                                    id={item?.id}
                                    status={item?.status_id}
                                    notes={item?.notes}
                                />
                            )

                        })}

                    </div>


                </main>
            </div>
        </>
    )
}

export default DetailMentee