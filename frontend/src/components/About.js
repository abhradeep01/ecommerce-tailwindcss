import React from 'react'
import data from '../data/otherdata.json';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { PaidOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import Aboutdialog from './Aboutdialog';
import PostProfile from './PostProfile';
const catalog = [
  {
    icon:<HomeOutlinedIcon style={{color:'white',backgroundColor:'black'}} className='rounded-full p-1' fontSize='large'/>,
    rating:"10.5k",
    text:"Sallers active our site"
  },
  {
    icon:<ShoppingBagOutlined style={{color:'white',backgroundColor:'black'}} className='rounded-full p-1' fontSize='large'/>,
    rating:"45.5k",
    text:"Customers active in our site"
  },
  {
    icon:<PaidOutlined style={{color:'white',backgroundColor:'black'}} className='rounded-full p-1' fontSize='large'/>,
    rating:"25k",
    text:"Anual gross sale in our site"
  }
]
function About({wdth}) {
  return (
    <div className={`w-[90%] flex flex-col gap-24 x-sm:w-[97.5%] ${wdth?'x-sm:w-[98%] my-20':'my-0'}`}>
      <div className="w-full flex flex-row justify-between items-center gap-4">
        <div className="w-1/4 flex flex-col gap-3 x-sm:w-1/2">
          <div>
            <h2 className="text-xl font-semibold capitalize">
              our story
            </h2>
          </div>
          <div>
            <p className='text-base '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis aut culpa odio iste, officia repudiandae voluptatem dolor ex ipsa eos. Maiores asperiores temporibus reprehenderit eligendi pariatur doloribus cumque aliquid?
            </p>
          </div>
        </div>
        <div className="w-1/3 x-sm:w-1/2">
          <img src={data.aboutImg} alt="" />
        </div>
      </div>
      <div className="w-full flex flex-row justify-around flex-wrap items-center gap-8">
        {
          catalog.map((item,index)=>(
            <Aboutdialog
              key={index}
              logo={item.icon}
              num={item.rating}
              text={item.text}
            />
          ))
        }
      </div>
      <div className="w-full flex flex-row justify-between flex-wrap x-sm:justify-center gap-8">
        {
          data.mainPosts.map((item,index)=>(
            <PostProfile
              key={index}
              img={item.img}
              name={item.name}
              post={item.postName}
            />
          ))
        }
      </div>
    </div>
  )
}

export default About;