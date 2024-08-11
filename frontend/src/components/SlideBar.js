import React from 'react'
import { ArrowForward } from '@mui/icons-material'
function SlideBar({heading,headLine,bannerImg,alterText}) {
  return (
    <div className="min-w-44 max-w-48 relative rounded">
        <div className="absolute z-10 top-4 left-8 ">
          <div>
            <h6 className='text-sm font-semibold capitalize'>
              {heading}
            </h6>
          </div>
          <div>
            <h3 className='text-lg font-bold capitalize'>
              {headLine}
            </h3>
          </div>
          <div className="w-fit flex flex-row gap-1 ">
            <div>
              <a href="/" className='underline decoration-white text-white items-center'>shop now</a>
            </div>
            <ArrowForward style={{color:'white'}} />
          </div>
        </div>
        <div className="">
            <img src={bannerImg} alt={alterText} />
        </div>
    </div>
  )
}

export default SlideBar