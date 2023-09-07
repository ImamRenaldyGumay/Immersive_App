import React, { FC } from 'react'

import DetailButton from '../new/DetailButton'

interface TableMenteeProps{
    id: number
    full_name: string
    kelas: string
    status: string
    education_type: string
    gender: string
    onClick: React.MouseEventHandler
}

const TableMentee: FC<TableMenteeProps> = ({id, full_name, kelas, status, education_type, gender, onClick}) => {
    return (
        <>
            <tr>
                <td className="p-2 border text-left">{id}</td>
                <td className="p-2 border text-left">{full_name}</td>
                <td className="p-2 border text-center">{kelas}</td>
                <td className="p-2 border text-center">{status}</td>
                <td className="p-2 border text-center">{education_type}</td>
                <td className="p-2 border text-center">{gender}</td>

                <td className="p-2 border text-center">
                    <DetailButton
                        id='detail'
                        label='Detail'
                        onClick={onClick}
                    />
                </td>
                <td className="p-2 border flex justify-center">
                    <button className="px-3 py-1 bg-yellow-300 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none mx-1">
                        Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none mx-1">
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default TableMentee