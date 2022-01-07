import React from 'react'
import styled from 'styled-components'

function ShowScreenResolution( {sWidth} ) {

    return (
        <Reso>
            {sWidth}  
            {sWidth <= 384 && sWidth >0? ' (500%)' : ''}
            {sWidth <= 480 && sWidth >384? ' (400%)' : ''}
            {sWidth <= 640 && sWidth >480? ' (300%)' : ''}
            {sWidth <= 768 && sWidth >640? ' (250%)' : ''}
            {sWidth <= 960 && sWidth >768? ' (200%)' : ''}
            {sWidth <= 1100 && sWidth >960? ' (175%)' : ''}
            {sWidth <= 1280 && sWidth >1100? ' (150%)' : ''}
            {sWidth <= 1920 && sWidth >1280? ' (100%)' : ''}
            {sWidth <= 2200 && sWidth >1920? ' (90%)' : ''}
            {sWidth <= 2400 && sWidth >2200? ' (80%)' : ''}
            {sWidth <= 2560 && sWidth >2400? ' (75%)' : ''}
            {sWidth <= 2880 && sWidth >2560? ' (67%)' : ''}
            {sWidth <= 3840 && sWidth >2880? ' (50%)' : ''}
            {sWidth <= 5760 && sWidth >3840? ' (33%)' : ''}
            {sWidth <= 7680 && sWidth >5760? ' (25%)' : ''}
        </Reso>
    )
}

export default ShowScreenResolution

const Reso = styled.div`
    position: fixed;
    text-align: center;
    width: 10vw;
    right: 10vw;
    top: 5vh;
    z-index: 29000;
    font-size: 3vh;
    border: 0.1vh solid black;
    background-color: white;
    color: black;
`