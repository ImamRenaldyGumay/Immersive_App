import React, { FC } from 'react'
import { Trash } from 'react-feather'

interface DeleteButtonProps {
    id: string
    label: string
    onClick2?: React.MouseEventHandler
}

const DeleteButton: FC<DeleteButtonProps> = ({id, label, onClick2}) => {
  return (
    <div>
        <button
        className='flex items-center gap-3 px-3 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none mx-1'
        id={id}
        onClick={onClick2}
        
        ><Trash/>{label}</button>
    </div>
  )
}

export default DeleteButton