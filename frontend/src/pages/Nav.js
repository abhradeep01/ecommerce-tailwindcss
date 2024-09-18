import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IconButton} from '@mui/material';
import {Home,FavoriteBorder,Menu, ShoppingCart, GridView, Person2} from '@mui/icons-material'
import PopUpIcon from '../components/PopUpIcon';
import '../components/style/appbar.css';
import navData from "../data/otherdata.json"
function Nav() {
  const appBarIconColor = 'text-gray-700';
  return (
    <>
      <nav className='fixed bg-white shadow shadow-slate-100 z-20 w-full h-16 flex flex-row items-center justify-around x-sm:justify-between x-sm:pb-1 x-sm:pt-0.5 x-sm:flex-col x-sm:gap-1 x-sm:h-fit'>
          <div className="w-8">
            <a href="/" >
              <img src={navData.websiteLogo} alt="" className='rounded'/>
            </a>
          </div>
          <div className="w-fit flex flex-row gap-6 capitalize font-medium tablet:hidden x-sm:hidden">
            {navData.navContent.map((item,index)=>(
              <div>
                <Link to={item.path} children={item.text} className='text-[0.95rem] font-semibold'/>
              </div>
            ))}
          </div>
          <div className='relative h-fit w-[25%] border tablet:w-[50%] x-sm:w-[75%]'>
            <input type="text" className='border w-full h-8 p-1 tablet:' placeholder='what are you looking for?' />
            <div className="h-full flex items-center absolute z-20 right-0.5 top-0">
              <CiSearch style={{
                color:'black',
                fontSize:'25px',
                cursor:'pointer'
              }}/>
            </div>
          </div>
          <div className="flex gap-1.5 tablet:hidden x-sm:hidden">
            <Link to={'/favorite'}>
              <PopUpIcon
               icon={<FavoriteBorder className='text-gray-700'/>}
               count={0}
              />
            </Link>
            <Link to={'/cart'}>
              <PopUpIcon 
               icon={<ShoppingCart className='text-gray-700'/>}
               count={0}/>
            </Link>
            <IconButton children={<Person2 fontSize='' className='text-gray-700'/>} />
          </div>
      </nav>

      {/* appbar for mobile screen */}
      <div className='app-bar'>
        <IconButton>
          <Menu fontSize='medium' className={appBarIconColor}/>
        </IconButton>
        <Link to={'/favorite'}>
          <PopUpIcon
           icon={<FavoriteBorder fontSize='medium' className={appBarIconColor}/>}
           count={0}/>
        </Link>
        <Link to={'/'}>
          <IconButton>
            <Home fontSize='medium' className={appBarIconColor}/>
          </IconButton>
        </Link>
        <Link to={'/cart'}>
          <PopUpIcon 
           icon={<ShoppingCart fontSize={'medium'} className={appBarIconColor}/>}
           count={0}/>
        </Link>
        <IconButton>
          <GridView fontSize='medium' className={appBarIconColor}/>
        </IconButton>
      </div>
    </>
  )
}

export default Nav