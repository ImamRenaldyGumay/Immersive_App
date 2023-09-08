import React, { FC } from 'react'
import { Info } from 'react-feather'

interface DetailButtonProps {
    id: string,
    label: string,
    onClick?: React.MouseEventHandler
}

const DetailButton: FC<DetailButtonProps> = ({ id, label, onClick }) => {
    return (
        <button
            id={id}
            onClick={onClick}
            className='flex items-center px-3 py-1 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none mx-1'
        >
            <Info/>
            {label}
        </button>
    )
}

export default DetailButton