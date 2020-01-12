import React from 'react';

import menuStyle from './menu-item.style.scss';

const MenuItem =({title,image, size})=> {
    return(
        <div className={`${size} menu-item`} 
            style={{ backgroundImage : `url(${image})`}}>
            <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;