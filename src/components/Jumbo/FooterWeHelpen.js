import React from 'react'
import FooterLeftColumn from './FooterLeftColumn'
import FooterRightColumn from './FooterRightColumn'
import FooterMiddleLeftColumn from './FooterMiddleLeftColumn'
import FooterMiddleRightColumn from './FooterMiddleRightColumn'
import FooterLine from './FooterLine'
import FooterLastLine from './FooterLastLine'

import styled from 'styled-components'

const FooterContainer = styled.div`
    padding: 48px 0px 30px 0px;
    position: relative;
    width: 100%;
    width: 100%;
    height: 730px;
    background-image: url('/images/jumbo/Backgroundfooter.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
    @media (max-width: 1100px) {
        background-color: black;
        background-image: none;
    }
`

function FooterWeHelpen({sWidth, footerHeight, setFooterHeight }) {
    return (
        <div>
            <FooterContainer style={{height:footerHeight+'px', transition: 'all 250ms ease-in-out'}}>
                <Footeroverlay> </Footeroverlay>
                {sWidth<=1100?
                <>
                    <FooterWrapper className='kd-Jumbo-container'>
                        <FooterLeftColumn sWidth={sWidth}></FooterLeftColumn>
                        <FooterRightColumn></FooterRightColumn>
                        <FooterMiddleRightColumn sWidth={sWidth} footerHeight={footerHeight} setFooterHeight={setFooterHeight} ></FooterMiddleRightColumn>
                        <FooterMiddleLeftColumn sWidth={sWidth} footerHeight={footerHeight} setFooterHeight={setFooterHeight} ></FooterMiddleLeftColumn>
                    </FooterWrapper>
                </>
                :
                <>
                    <FooterWrapper className='kd-Jumbo-container'>
                        <FooterLeftColumn sWidth={sWidth}></FooterLeftColumn>
                        <FooterMiddleLeftColumn sWidth={sWidth} footerHeight={footerHeight} setFooterHeight={setFooterHeight}></FooterMiddleLeftColumn>
                        <FooterMiddleRightColumn sWidth={sWidth} footerHeight={footerHeight} setFooterHeight={setFooterHeight}></FooterMiddleRightColumn>
                        <FooterRightColumn></FooterRightColumn>
                    </FooterWrapper>
                </>}
                <FooterLine sWidth={sWidth}/>
                <FooterBackground></FooterBackground>
            </FooterContainer>
            <FooterLastLine></FooterLastLine>
        </div>
    )
}

export default FooterWeHelpen

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
        align-items: flex-start;
    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: flex-start;
    } 
`

const FooterBackground = styled.div`
`
const Footeroverlay = styled.div `
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background: rgba(0,0,0,0.7);
    z-index: -1;
`

 /* @media (max-width: 7681px) {} 
    @media (max-width: 3840px) {} 
    @media (max-width: 2560px) {} 
    @media (max-width: 1920px) {} 
    @media (max-width: 1536px) {} 
    @media (max-width: 1280px) {} 
    @media (max-width: 1100px) {} 
    @media (max-width: 980px) {} 
    @media (max-width: 768px) {} 
    @media (max-width: 640px) {} 
    @media (max-width: 480px) {} 
    @media (max-width: 384) {}  */