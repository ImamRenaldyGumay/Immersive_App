import React, { FC } from 'react'

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
            className='px-3 py-1 bg-green-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none mx-1'
        >
            {label}
        </button>
    )
}

export default DetailButton