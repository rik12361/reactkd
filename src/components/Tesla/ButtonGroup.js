import React from 'react'
import Button from './Button'

function ButtonGroup({calcPerc, LeftBtnText, RightBtnText}) {
    return (
        <div id="BG01">
            {LeftBtnText === undefined? <div/> : <Button backgroundColor='rgba(40,40,40,0.85)' color='white' text={LeftBtnText} calcPerc={calcPerc}/>}
            {RightBtnText === undefined? <div/> : <Button backgroundColor='white' color='black' text={RightBtnText} calcPerc={calcPerc} />}
        </div>
    )
}
export default ButtonGroup
