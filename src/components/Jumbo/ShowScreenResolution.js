import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

function ShowScreenResolution( {sWidth} ) {

    return (
        <Reso>
            {sWidth}          
        </Reso>
    )
}

export default ShowScreenResolution

const Reso = styled.div`
    position: absolute;
    text-align: center;
    width: 4vw;
    right: 10vw;
    top: 450vh;
    z-index: 29000;
    font-size: 3vh;
    border: 0.1vh solid black;
    background-color: white;
    color: black;
`