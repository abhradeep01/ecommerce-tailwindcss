import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IconButton} from '@mui/material';
import {Home,FavoriteBorder,Menu,ShoppingCart,Person2, Close} from '@mui/icons-material'
import PopUpIcon from '../components/PopUpIcon';
import '../components/style/appbar.css';
import navData from "../data/otherdata.json"

function Nav() {
  const [menu,setMenu] = useState(false);
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
            <input type="text" className='border w-full h-8 p-1' placeholder='what are you looking for?' />
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
        <Link to={'/'}>
          <IconButton>
            <Home fontSize='medium' className={appBarIconColor}/>
          </IconButton>
        </Link>
        <Link to={'/favorite'}>
          <PopUpIcon
           icon={<FavoriteBorder fontSize='medium' className={appBarIconColor}/>}
           count={0}/>
        </Link>
        <Link to={'/cart'}>
          <PopUpIcon 
           icon={<ShoppingCart fontSize={'medium'} className={appBarIconColor}/>}
           count={0}/>
        </Link>
        <IconButton onClick={()=>setMenu(true)}>
          <Menu fontSize='medium' className={appBarIconColor}/>
        </IconButton>
      </div>
      <div className={`${menu?'fixed top-0 left-0 bottom-0 z-30 w-[40%] h-[100vh] x-sm:w-[60%] bg-slate-200 p-2':'hidden'}`}>
        <IconButton className='rounded-full absolute z-40 left-[43vw] border border-black x-sm:left-[63vw]' onClick={()=>setMenu(false)}>
            <Close fontSize='medium'/>
        </IconButton>
        <div className="w-full flex flex-col gap-2.5">
            {navData.unauth.map((item,text)=>(
              <div className='w-full border-b border-slate-400' onClick={()=>setMenu(false)}>
                <Link to={item.path} children={item.text} className='capitalize text-sm font-semibold' />
              </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Nav;