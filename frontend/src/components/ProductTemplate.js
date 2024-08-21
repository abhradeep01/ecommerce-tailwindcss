import React from 'react'
import Heading from './Heading'
function ProductTemplate({productHeading,productSubheading,arrowIcon,products}) {
  return (
    <div className="w-full flex flex-col gap-2">
        <Heading
            heading={productHeading}
            subHeading={productSubheading}
            icon={arrowIcon}
        />
        <div className="w-full flex flex-row gap-4 justify-between overflow-x-scroll overflow-y-hidden snap-x snap-mandatory overscroll-x-contain px-0.5 py-4">
            {products}
        </div>
    </div>
  )
}

export default ProductTemplate