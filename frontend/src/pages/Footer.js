import { Instagram, LinkedIn, SendOutlined, Twitter } from '@mui/icons-material';
import React from 'react';
import FooterList from '../components/FooterList';
import FooterContainer from '../components/FooterContainer';
import qrcode from '../img/qr-code.png';
import googlePlay from '../img/google-play.png';
import appleStore from '../img/apple-store.png';
import { Facebook } from '@mui/icons-material';
const support =["111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh","exclusive@gmail.com","+888015-88888-9999"]
const account =[
    {
        path:'/account',
        text:'my account'
    },
    {
        path:'/login',
        text:'login / register'
    },
    {
        path:'/cart',
        text:'Cart'
    },
    {
        path:'/whishlist',
        text:'whishlist'
    },
    {
        path:'/shop',
        text:'shop'
    },
];
const quickLink = [
    {
        path:'/policy',
        text:"privacy policy"
    },
    {
        path:'/terms',
        text:"terms of use"
    },
    {
        path:'/faq',
        text:"FAQ"
    },
    {
        path:'/contact',
        text:"contact"
    },
];
function Footer() {
  return (
    <div className="w-full flex flex-row flex-wrap justify-around bg-black text-white gap-12 py-20">
        <div className="w-56 flex flex-col gap-1.5">
            <div>
                <h2 className='text-lg font-bold capitalize'>
                    exclusive
                </h2>
            </div>
            <div>
                <h4 className="text-base font-semibold capitalize">
                    subscribe
                </h4>
            </div>
            <div>
                <h5 className='text-sm font-medium'>
                    Get 10% off your first order
                </h5>
            </div>
            <div className="relative w-[98%] h-fit">
                <input type="text" placeholder='enter your email' className='w-[100%] p-1 border-white bg-gray-800' />
                <div className="absolute top-0 bottom-0 right-0 flex justify-center items-center">
                    <SendOutlined/>
                </div>
            </div>
        </div>
        <FooterContainer
            heading={'support'}
            content={
                support.map((text,index)=>(
                    <FooterList
                        key={index}
                        footerText={text}
                    />
                ))
            }
        />
        <FooterContainer
            heading={'account'}
            content={
                account.map((text,index)=>(
                    <FooterList
                        key={index}
                        path={text.path}
                        footerText={text.text}
                    />
                ))
            }
        />
        <FooterContainer
            heading={'quick link'}
            content={
                quickLink.map((link,index)=>(
                    <FooterList
                        key={index}
                        path={link.path}
                        footerText={link.text}
                    />
                ))
            }
        />
        <div className="w-56 flex flex-col gap-3">
            <div>
                <h2 className="text-base font-semibold capitalize">
                    downloads
                </h2>
            </div>
            <div className="w-full flex flex-col gap-1.5">
                <div>
                    <p className='text-sm font-medium'>
                        Save $3 with App New User Only
                    </p>
                </div>
                <div className="w-full flex flex-row gap-1">
                    <div className="w-[50%]">
                        <img src={qrcode} alt="qrcode" className='w-full bg-white' />
                    </div>
                    <div className="w-[50%] flex flex-col justify-around">
                        <div className="w-full p-[1px] bg-white">
                            <img src={googlePlay} alt="" className='w-full' />
                        </div>
                        <div className="w-full p-[1px] bg-white">
                            <img src={appleStore} alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-between">
                <div>
                    <a href="/">
                        <Facebook/>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <Twitter/>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <Instagram/>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <LinkedIn />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer;