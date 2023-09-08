import React, { FC } from 'react'

interface DeleteButtonProps {
    id: string
    label: string
    onClick?: React.MouseEventHandler
}

const DeleteButton: FC<DeleteButtonProps> = ({id, label, onClick}) => {
  return (
    <div>
        <button
        id={id}
        onClick={onClick}
        
        >{label}</button>
    </div>
  )
}

export default DeleteButton