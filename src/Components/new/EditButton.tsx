import React, { FC } from 'react'
import { Edit } from 'react-feather'

interface EditButtonProps {
    id: string,
    label: string,
    onClick3?: React.MouseEventHandler
}

const EditButton: FC<EditButtonProps> = ({ id, label, onClick3 }) => {
    return (
        <button
            id={id}
            onClick={onClick3}
            className='flex items-center px-3 py-1 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none mx-1'
        >
            <Edit />
            {label}
        </button>
    )
}

export default EditButton