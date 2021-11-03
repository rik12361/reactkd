import React from 'react'
import arrow from './Static/down-arrow.svg';
const DownArrow = ({calcPerc})  => {
    return (
        <i  id="DA01"  style={{opacity:calcPerc}} className='fa fa-angle-double-down kd-22-text kd-animate-down'></i>
        )
}

export default DownArrow
