import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className=''>
        <div className="">
            <a href="/" className='font-bold capitalize text-2xl'>exclusive</a>
        </div>
        <div className="">
            <Link class to={'/home'}/>
        </div>
    </nav>
  )
}

export default Nav