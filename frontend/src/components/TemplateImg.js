import React from 'react';

function TemplateImg({icon,head,describe}) {
  return (
    <div className="w-72 flex flex-col items-center gap-2">
        <div className='rounded-full bg-black p-1'>
            {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold uppercase">
            {head}
          </h3>
        </div>
        <div>
          <h6 className="text-[15px] font-medium">
            {describe}
          </h6>
        </div>
    </div>
  )
}

export default TemplateImg;