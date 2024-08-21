import React from 'react';
import { ArrowBackIos,ArrowForwardIos } from '@mui/icons-material';
import { ButtonGroup,IconButton } from '@mui/material';

function Heading({heading,subHeading,icon}) {
  return (
    <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1.5">
                <div className="w-2.5 h-5 rounded-sm bg-red-500 shadow shadow-red-200"></div>
                <h5 className="text-base text-red-500 font-semibold capitalize">{heading}</h5>
            </div>
            <h3 className="text-xl font-semibold capitalize">{subHeading}</h3>
        </div>
        <div className={`self-end w-fit h-fit ${icon?'flex flex-row gap-1':'text-white'}`} 
            style={icon?{display:'block'}:{display:'none'}}>
            {
                icon==='view all'?
                    <button className='text-white capitalize bg-red-500 text-base font-medium p-1 shadow-red-200 rounded-sm shadow
                    hover:bg-white hover:text-black hover:border-gray-300 hover:border hover:shadow-gray-200'>view all</button>:
                    <ButtonGroup className='flex flex-row gap-0.5'>
                        <div className="border rounded-full">
                            <IconButton>
                                <ArrowBackIos fontSize='small' className='text-gray-700'/>
                            </IconButton>
                        </div>
                        <div className="border rounded-full">
                            <IconButton>
                                <ArrowForwardIos fontSize='small' className='text-gray-700'/>
                            </IconButton>
                        </div>
                    </ButtonGroup>
            }
        </div>
    </div>
  )
}

export default Heading;