import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Favorite,FavoriteBorder } from '@mui/icons-material';

function ShoppingCart({key,itemImg,itemName,orgPrice,discountedPrice,discount}) {
    const [fav,setFav] = useState(false);
    const cartData ={
        key,
        discount,
        itemImg,
        itemName,
        orgPrice,
        discountedPrice,
        fav
    }
    return(
        <div className="min-w-44 max-w-48 relative p-1 rounded-md border border-gray-200 shadow-sm snap-center flex flex-col gap-1.5 hover:shadow-md hover:shadow-gray-300 x-sm:hover:shadow-none x-sm:shadow-white" data={cartData} id='cart'>
            <div className={`absolute z-10 rounded-sm font-semibold text-white shadow-md px-1.5 p-1 capitalize text-sm ${discount==='new'?"bg-green-700":'bg-red-600'}`} 
                style={discount?{display:'block'}:{display:'none'}}>
                {discount}
            </div>
            <div className="z-10 absolute rounded-full shadow shadow-slate-300 top-1 right-1" 
                style={{padding:'-1rem'}}>
                    <IconButton onClick={()=>setFav(!fav)}>
                        {
                            fav?
                            <Favorite color='error' />:
                            <FavoriteBorder />
                        }
                    </IconButton>
            </div>
            <div className="">
                <img src={itemImg} alt={itemName} />
                <button className="w-full bg-black text-white text-base capitalize font-semibold rounded hover:opacity-85" 
                    style={{padding:'0.125rem 0'}}>add to cart</button>
            </div>
            <div className="h-full font-semibold capitalize flex flex-col justify-around">
                <div>
                    <h4 className='text-sm ' >
                        {itemName}
                    </h4>
                </div>
                <div>
                    <h5 className='text-base text-red-600 font-semibold'>
                        ${discountedPrice}
                        <span className={`line-through text-gray-500 text-sm font-medium ml-1 ${orgPrice?'inline':'hidden'}`}>
                            ${orgPrice}
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;