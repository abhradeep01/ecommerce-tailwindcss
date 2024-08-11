import React from 'react'
import { ArrowForward } from '@mui/icons-material'
function SlideBar({heading,headLine,bannerImg,alterText}) {
  return (
    <div className="">
        <div className="">
            <h6>{heading}</h6>
            <h3>{headLine}</h3>
            <div className="">
                <a href="/">shop now</a>
                <ArrowForward />
            </div>
        </div>
        <div className="">
            <img src={bannerImg} alt={alterText} />
        </div>
    </div>
  )
}

export default SlideBar