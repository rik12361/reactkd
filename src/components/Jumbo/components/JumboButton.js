import React from 'react'
import styled from 'styled-components'
const JumboButton = ({backgroundColor, padding, color, text, transition, borderRadius, height,  border}) => {
    console.log(text);
    return (
        <div>
            <Button style={{
                backgroundColor:backgroundColor, 
                color:color, 
                transition:transition, 
                height:height,
                borderRadius: borderRadius,
                border: border,
                padding: padding,
                }}>{text}</Button>
        </div>
    )
}
JumboButton.defaultProps= {
    backgroundColor: 'white',
    color: 'black',
    text: 'button',
    transition: 'all 250ms ease-out',
    borderRadius: '1em',
    height: '40px',
    border: 'solid 2px var(--jumbo-grey)',
    padding: '0px',
}
const Button = styled.button`
    &:hover {
        background-color: black!important;
        color: white!important;
    }
`

export default JumboButton

