import React from 'react'

function Aboutdialog({logo,num,text}) {
  return (
    <div className="w-48 flex flex-col items-center gap-2.5 border rounded py-8">
      <div>
        {logo}
      </div>
      <div>
        <h2 className="text-lg font-bold">
          {num}
        </h2>
      </div>
      <div>
        <h5 className="text-sm font-medium">
          {text}
        </h5>
      </div>
    </div>
  )
}

export default Aboutdialog;