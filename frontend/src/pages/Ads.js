import React from 'react'
import AdsTemplate from '../components/AdsTemplate';
import otherData from '../data/otherdata.json';
import Heading from '../components/Heading';
function Ads() {
    const first = otherData.first;
    const second = otherData.second;
    const subData = otherData.sub;
  return (
    <div className="w-[90%] mb-20 x-sm:w-[99%]">
        <div className="w-full flex flex-col gap-4 border">
            <Heading
                heading={'featured'}
                subHeading={'new arrival'}
                icon={false}
            />
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-0.5">
                <div className="border h-fit row-span-3">
                    <AdsTemplate 
                        heading={first.head}
                        describe={first.desc}
                        adsImg={first.img}
                        adsAlt={first.head+' ads'}
                    />
                </div>
                <div className="border max-h-[50%] col-span-1">
                    <AdsTemplate 
                        heading={second.head}
                        describe={second.desc}
                        adsImg={second.img}
                        adsAlt={second.head+' ads'}
                    />
                </div>
                <div className="border h-[100%] col-span-1">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ads