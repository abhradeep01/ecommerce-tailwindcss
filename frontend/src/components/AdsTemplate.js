import React from 'react';

function AdsTemplate({heading,describe,adsImg,adsAlt}) {
  return (
    <div className="w-full relative">
        <div className="absolute z-10 top-2 left-2 max-h-full flex flex-col gap-2">
            <div>
                <h2 className="text-lg text-white font-bold">
                    {heading}
                </h2>
            </div>
            <div>
                <h5 className="text-base font-semibold text-white">
                    {describe}
                </h5>
            </div>
            <div>
                <a href="/" className='text-sm font-semibold text-white underline underline-offset-[3px] decoration-gray-400'>
                    SHOW NOW
                </a>
            </div>
        </div>
        <div className="w-full">
            <img src={adsImg} alt={adsAlt} className='w-full' />
        </div>
    </div>
  )
}

export default AdsTemplate