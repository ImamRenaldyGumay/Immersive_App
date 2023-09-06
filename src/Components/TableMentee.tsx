import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

interface ListMentee {
    id: number,
    title?: string,
    image?: string,
    price?: string,
    category?: string,
    // gender: string,
}

const TableMentee: FC<ListMentee> = ({ id, title, image, price, category }) => {

    const [mentee, setMentee] = useState([])

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
                    {mentee.map((item) => {
                        <tr>
                            <td className='border border-slate-600'>{id}</td>
                            <td className='border border-slate-600'>{title}</td>
                            <td className='border border-slate-600'>{image}</td>
                            <td className='border border-slate-600'>{price}</td>
                            <td className='border border-slate-600'>{category}</td>
                            {/* <td className='border border-slate-600'>{gender}</td> */}
                            <td className='border border-slate-600'>detail</td>
                            <td className='border border-slate-600'>edit</td>
                            <td className='border border-slate-600'>delete</td>
                        </tr>
                    })}

                </tbody>

            </table>


        </div>
    )
}

export default TableMentee