import React from 'react';
import {Link} from 'react-router-dom';

function FooterList({path,footerText}) {
  return (
    <div>
        {
            path?
            <Link to={path} children={footerText} className='text-sm font-normal capitalize'/>:
            <h6 className="text-sm font-normal">
                {footerText}
            </h6>
        }
    </div>
  )
}

export default FooterList;