import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-6 items-center justify-center">
      <div>
        <h1 className='text-9xl font-semibold'>404</h1>
      </div>
      <div>
        <h3 className='text-2xl capitalize font-semibold text-red-500'>
            this page not found
        </h3>
      </div>
      <div>
        <p className='capitalize text-lg font-semibold'>
            go back to 
            <Link to={'/'} children={'Home page'} className='text-white bg-blue-600 p-1.5 rounded ml-1.5 hover:opacity-95 hover:shadow hover:shadow-blue-200'/>
        </p>
      </div>
    </div>
  )
}

export default NotFound