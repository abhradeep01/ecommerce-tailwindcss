import React from 'react'

function CategoryCart({imgLogo,text}) {
  return (
    <div className="w-fit flex flex-col gap-2 p-3 items-center border border-gray-200 rounded-md hover:shadow-md">
        <div className="text-base">{imgLogo}</div>
        <h5 className='text-sm capitalize font-semibold m-0'>{text}</h5>
    </div>
  )
}

export default CategoryCart;