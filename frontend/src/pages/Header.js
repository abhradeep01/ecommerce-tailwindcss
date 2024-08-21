import React from 'react'
import { Link } from 'react-router-dom'
import SlideBar from '../components/SlideBar'
import adsData from '../data/otherdata.json';
function Header() {
    const headerContent =[
        {
            text:"women's fashion",
            path:'/'
        },
        {
            text:"men's fashion",
            path:'/'
        },
        {
            text:"electronics",
            path:'/'
        },
        {
            text:"home & lifestyle",
            path:'/'
        },
        {
            text:"sports & outdoor",
            path:'/'
        },
        {
            text:"baby's & toys",
            path:'/'
        },
        {
            text:"groceries & pets",
            path:'/'
        },
        {
            text:"health & beauty",
            path:'/'
        },
    ]
  return (
    <div className="w-[90%] h-fit flex flex-row justify-between mt-[4.5rem] x-sm:w-full">
        <div className="w-[20%] max-h-fit border-r flex flex-col justify-around px-0.5 py-1.5 tablet:hidden x-sm:hidden">
            {
                headerContent.map(item=>{
                    return(
                        <div className="w-full hover:opacity-95">
                            <Link to={item.path} children={item.text}
                             className='capitalize text-[0.925rem] font-medium'/>
                        </div>
                    )
                })
            }
        </div>
        <div className="w-[80%] flex flex-row gap-4 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory overscroll-x-contain p-4 tablet:p-1.5 tablet:w-full x-sm:w-full x-sm:p-1.5">
            {adsData.slide.map(item=>(
                <SlideBar
                 bannerImg={item.img} 
                 heading={item.headline}
                 headLine={item.head}/>
            ))}
        </div>
    </div>
  )
}

export default Header