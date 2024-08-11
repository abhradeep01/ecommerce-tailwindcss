import React from 'react';
import { ArrowBackIos,ArrowForwardIos } from '@mui/icons-material';
import { ButtonGroup,IconButton } from '@mui/material';

function Heading({heading,subHeading,icon}) {
  return (
    <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1.5">
                <div className="w-2.5 h-5 rounded-sm bg-red-500 shadow shadow-red-200"></div>
                <h5 className="text-sm text-red-500 font-bold capitalize">{heading}</h5>
            </div>
            <h3 className="text-lg font-semibold capitalize">{subHeading}</h3>
        </div>
        <div className={`justify-self-start w-fit h-fit ${icon?'flex flex-row gap-1':'text-white'}`} 
            style={icon?{display:'block'}:{display:'none'}}>
            {
                icon?
                <ButtonGroup>
                    <IconButton>
                        <ArrowBackIos/>
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIos/>
                    </IconButton>
                </ButtonGroup>:
                <button className='text-white capitalize bg-red-500 text-base font-semibold p-1 shadow-red-400 rounded-sm shadow-sm
                hover:bg-white hover:text-black hover:border-gray-300 hover:border hover:shadow-gray-300'>view all</button>
            }
        </div>
    </div>
  )
}

export default Heading;