import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Favorite,FavoriteBorder } from '@mui/icons-material';

function ShoppingCart({itemImg,itemName,orgPrice,discountedPrice,discount}) {
    const [fav,setFav] = useState(false);
    const cartData ={
        itemImg,
        itemName,
        orgPrice,
        discountedPrice,
        discount,
        fav
    }
    return(
        <div className="min-w-44 max-w-48 relative p-1 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg x-sm:hover:shadow-none" data={cartData} id='cart'>
            <div className={`absolute z-10 rounded-md font-bold text-white shadow-md p-1 capitalize text-sm ${discount==='new'?"bg-green-700":'bg-red-600'}`} 
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
            <div className="font-semibold capitalize">
                <h4 className='text-sm ' >
                    {itemName}
                </h4>
                <h5 className='text-base text-red-600 font-semibold'>
                    {discountedPrice}
                    <span className='line-through text-gray-500 text-sm font-medium ml-1'>
                        {orgPrice}
                    </span>
                </h5>
            </div>
        </div>
    )
}

export default ShoppingCart;