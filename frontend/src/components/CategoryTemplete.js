import React from 'react'
import Heading from './Heading';

function CategoryTemplete({categoryHeading,categorySubheading,arrowIcon,products}) {
  return (
    <div className="w-full flex flex-col gap-2">
        <Heading 
            heading={categoryHeading}
            subHeading={categorySubheading}
            icon={arrowIcon}
        />
        <div className="w-full flex flex-row gap-4 justify-between flex-wrap overflow-x-scroll overflow-y-hidden snap-x snap-mandatory overscroll-x-contain px-0.5 py-2">
            {products}
        </div>
    </div>
  )
}

export default CategoryTemplete