import React from 'react'
import AdsTemplate from '../components/AdsTemplate';
import otherData from '../data/otherdata.json';
import Heading from '../components/Heading';
import { LocalShippingOutlined,Headphones,Beenhere } from '@mui/icons-material';
import TemplateImg from '../components/TemplateImg';
function Ads() {
    const first = otherData.first;
    const second = otherData.second;
    const subData = otherData.sub;
    const template =[
        {
            icon:<LocalShippingOutlined sx={{color:'white'}}/>,
            heading:'free and fast delivery',
            desc:'Free delivery for all orders over $140'
        },
        {
            icon:<Headphones sx={{color:'white'}}/>,
            heading:'24/7 customer service',
            desc:'Friendly 24/7 customer support'
        },
        {
            icon:<Beenhere sx={{color:'white'}}/>,
            heading:'money back guarantee',
            desc:'We return money within 30 days'
        },
    ];
  return (
    <div className="w-[90%] flex flex-col gap-4 x-sm:w-[99%]">
        <div className="w-full flex flex-col gap-4">
            <Heading
                heading={'featured'}
                subHeading={'new arrival'}
                icon={false}
            />
            <div className="w-full flex flex-row gap-0.5 x-sm:flex-col">
                <div className="w-1/2 x-sm:w-full">
                    <AdsTemplate
                        heading={first.head}
                        describe={first.desc}
                        adsImg={first.img}
                        adsAlt={first.head+' ads'}
                    />
                </div>
                <div className="w-1/2 flex flex-col gap-0.5 x-sm:w-full">
                    <div className="w-full h-[50%]">
                        <AdsTemplate
                            heading={second.head}
                            describe={second.desc}
                            adsImg={second.img}
                            adsAlt={second.head+' ads'}
                        />
                    </div>
                    <div className="w-full flex flex-row gap-0.5">
                        {
                            subData.map((item,index)=>(
                                <div className="w-1/2">
                                    <AdsTemplate
                                        key={index}
                                        heading={item.head}
                                        describe={item.desc}
                                        adsImg={item.img}
                                        adsAlt={item.head+' ads'}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
                
        </div>
        <div className="w-full flex flex-row flex-wrap justify-center gap-8 py-20">
            {
                template.map((item,index)=>(
                    <TemplateImg 
                        key={index}
                        icon={item.icon}
                        head={item.heading}
                        describe={item.desc}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Ads