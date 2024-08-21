import React from 'react'

function FavCart({itemImg,itemName,price}) {
  return (
    <div className="w-[800px] flex flex-row justify-between border border-slate-200 rounded px-1 py-1.5 hover:shadow-sm hover:shadow-gray-200 x-sm:w-full x-sm:hover:shadow-none">
        <div className="">
            <img src={itemImg} alt={itemName}
            className='w-32 border rounded' />
        </div>
        <div className="w-fit flex flex-col gap-1">
            <div className="h-1/2 flex flex-col justify-between">
                <div>
                    <h3 className="text-base capitalize font-semibold x-sm:font-medium">
                        {itemName}
                    </h3>
                </div>
                <div>
                    <h5 className="text-sm text-red-500 font-semibold">
                        {price}
                    </h5>
                </div>
            </div>
            <div className="h-1/2 flex flex-row items-center gap-2">
                <button className="bg-yellow-500 h-fit p-1 rounded text-white text-sm font-semibold">
                    Add To Cart 
                </button>
                <button className="bg-red-500 h-fit p-1 rounded text-white text-sm font-semibold">
                    Remove From Favorite
                </button>
            </div>
        </div>
    </div>
  )
}

export default FavCart