import React, { useState } from 'react'
import { EyeClosed, EyeOpen } from '../data/SVG';
import data from '../data/otherdata.json';
function SignUp() {
  const [showPassword,setShowPassword] = useState(false);
  return (
    <div className="w-[90%] flex flex-row gap-4 x-sm:w-full mt-20 x-sm:flex-col x-sm:p-2 ">
        <div className='w-1/2 x-sm:w-full'>
            <img src={data.varifyPageImg1} alt="" className='w-full' />
        </div>
        <div className="w-1/2 flex items-center justify-center x-sm:w-full">
            <div className="w-[90%] flex flex-col gap-4">
                <div>
                    <h2 className="text-xl font-semibold">
                      Create an account
                    </h2>
                </div>
                <div>
                    <h4 className="text-sm font-semibold">
                        Enter your details below
                    </h4>
                </div>
                <form action="" className='w-full flex flex-col gap-8'>
                  <div>
                    <input type="text" placeholder='Name' className='w-full focus:outline-none border-b-2 border-black '/>
                  </div>
                  <div>
                      <input type="text" placeholder='Email or Phone Number'  className='w-full focus:outline-none border-b-2 border-black '/>
                  </div>
                  <div className='w-full h-fit relative'>
                      <input type={showPassword?'password':'text'} placeholder='Password' className='w-full focus:outline-none border-b-2 border-black' />
                      <div className="w-fit absolute z-10 top-0 bottom-0 right-0 flex items-center" onClick={()=>setShowPassword(!showPassword)}>
                          {
                              showPassword?
                              <EyeOpen/>:
                              <EyeClosed/>
                          }
                      </div>
                  </div>
                  <div className="w-full flex flex-col gap-1.5">
                    <button className='w-full bg-red-500 text-white text-base rounded font-semibold py-2'>
                      Create Account
                    </button>
                    <div>
                      <h5 className="text-[0.9rem] font-semibold">
                        Already have account? <span className='underline underline-offset-4'><a href="/signin">Log in</a></span>
                      </h5>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp;