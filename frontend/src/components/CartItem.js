import React from 'react';
import { Add,Remove } from '@mui/icons-material';
function CartItem({itemImg,itemName,price}) {
  return (
    <div className="w-[800px] flex flex-row justify-between border border-slate-200 rounded px-1 py-1.5 hover:shadow-sm hover:shadow-gray-200 x-sm:w-full x-sm:hover:shadow-none">
        <div>
            <img src={itemImg} alt={itemName} 
            className='w-32 border border-slate-200 rounded '/>
        </div>
        <div className="w-fit flex flex-row gap-4">
            <div className="flex flex-col justify-around">
                <div>
                    <h3 className='text-base capitalize font-semibold x-sm:font-medium'>
                        {itemName}
                    </h3>
                </div>
                <div>
                    <h5 className='text-sm text-red-500 font-semibold'>
                        {price}
                    </h5>
                </div>
                <div className="w-fit flex flex-row gap-1">
                    <button className='border rounded border-slate-200'>
                        <Remove />
                    </button>
                    <div className='w-fit h-full border rounded'>
                        <h6 className="px-1.5 border-slate-200">
                            {0}
                        </h6>
                    </div>
                    <button className='border rounded border-slate-200'>
                        <Add/>
                    </button>
                </div>
            </div>
            <div className='h-full flex items-center'>
                <button className='h-fit bg-red-500 text-white text-sm font-semibold rounded p-1 hover:opacity-90'>
                    Remove
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem;