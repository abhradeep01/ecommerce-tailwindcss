import React from 'react'
import { ArrowForward } from '@mui/icons-material'
function SlideBar({heading,headLine,bannerImg,alterText}) {
  return (
    <div className="min-w-full snap-center relative rounded">
        <div className="absolute h-full flex flex-col justify-center gap-[3vh] z-20 top-4 left-8 tablet:gap-[2vh] x-sm:gap-[1vh]">
          <div>
            <h6 className='text-sm font-medium text-white drop-shadow-md shadow-black'>
              {heading}
            </h6>
          </div>
          <div>
            <h3 className='text-xl font-bold text-white'>
              {headLine}
            </h3>
          </div>
          <div className="w-fit flex flex-row items-center gap-0.5 ">
            <div>
              <a href="/" className='underline decoration-white text-white items-center underline-offset-2 '>Shop Now</a>
            </div>
            <ArrowForward style={{color:'white'}} fontSize='small'/>
          </div>
        </div>
        <div className="">
            <img src={bannerImg} alt={alterText} 
            className='w-full rounded' />
        </div>
    </div>
  )
}

export default SlideBar