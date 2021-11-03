import React from 'react'

const Button = ({backgroundColor, color, text, calcPerc}) => {
    return (
        <div>
            <button style={{backgroundColor:backgroundColor, color:color, opacity:calcPerc}}>{text}</button>
        </div>
    )
}
Button.defaultProps= {
    backgroundColor: 'red',
    color: 'white',
    text: 'button',
    calcPerc: '1',
}
export default Button

