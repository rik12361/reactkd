import React from 'react'

const ItemText = ({calcPerc, title, subTitle}) => {
    return (
        <div>
            <h1 className="kd-h1" style={{opacity: calcPerc}}>{title} {}</h1>
            {subTitle === undefined? <div/> : <p className="kd-p" style={{opacity: calcPerc}}>{subTitle}</p> }
        </div>
    )
}

export default ItemText