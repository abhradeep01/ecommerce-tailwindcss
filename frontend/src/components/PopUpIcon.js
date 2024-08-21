import { IconButton } from '@mui/material'
import React from 'react'

function PopUpIcon({icon,count}) {
  return (
    <div className="relative ">
        <IconButton>
            {icon}
        </IconButton>
        <div className="h-4 w-4 absolute top-0.5 right-0.5 bg-red-500 rounded-full flex justify-center items-center">
            <h6 className='text-base text-white font-semibold'>
                {count}
            </h6>
        </div>
    </div>
  )
}

export default PopUpIcon