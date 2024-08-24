import React from 'react'

function FooterContainer({heading,content}) {
  return (
    <div className="w-56 flex flex-col gap-3">
        <div>
            <h2 className='text-base font-semibold capitalize'>
                {heading}
            </h2>
        </div>
        <div className="w-full flex flex-col gap-1.5">
            {content}
        </div>
    </div>
  )
}

export default FooterContainer