import React from 'react'

function CategoryCart({imgLogo,text}) {
  return (
    <div className="min-w-24 max-w-24 flex flex-col gap-2 p-3 snap-center items-center border border-gray-200 rounded hover:shadow-md">
        <div className="text-base">{imgLogo}</div>
        <h5 className='text-sm capitalize font-medium m-0'>{text}</h5>
    </div>
  )
}

export default CategoryCart;