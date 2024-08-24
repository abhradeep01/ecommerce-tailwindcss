import React from 'react'

function Banner({bannerHeading,bannerCaption,bannerBgImg,imgAlt}) {
  return (
    <div className="w-full flex flex-row items-center py-10 bg-gray-950">
        <div className="w-1/2 max-h-fit flex flex-col justify-center gap-16 x-sm:gap-6 pl-12">
            <div>
                <h5 className="text-base text-green-600 font-semibold capitalize">
                    {bannerHeading}
                </h5>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-white capitalize">
                    {bannerCaption}
                </h2>
            </div>
            <div>
                <button className="text-white text-base font-semibold bg-green-500 px-4 py-2.5 rounded hover:opacity-95">
                    Buy Now
                </button>
            </div>
        </div>
        <div className='w-1/2 '>
            <img src={bannerBgImg} alt={imgAlt} 
                className='w-full'/>
        </div>
    </div>
  )
}

export default Banner