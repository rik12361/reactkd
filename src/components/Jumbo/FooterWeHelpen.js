import React from 'react'
import FooterLeftColumn from './FooterLeftColumn'
import FooterRightColumn from './FooterRightColumn'
import FooterMiddleLeftColumn from './FooterMiddleLeftColumn'
import FooterMiddleRightColumn from './FooterMiddleRightColumn'
import FooterLine from './FooterLine'
import FooterLastLine from './FooterLastLine'

import styled from 'styled-components'

function FooterWeHelpen({sWidth}) {
    return (
        <div>
                {sWidth<=1100?
                <>
                    <FooterContainerMobile>
                        <FooterWrapper>
                            <FooterLeftColumn sWidth={sWidth}></FooterLeftColumn>
                            <FooterRightColumn sWidth={sWidth}></FooterRightColumn>
                            <FooterMiddleLeftColumn sWidth={sWidth}></FooterMiddleLeftColumn>
                            <FooterMiddleRightColumn sWidth={sWidth}></FooterMiddleRightColumn>
                        </FooterWrapper>
                        <FooterLine sWidth={sWidth}/>
                    </FooterContainerMobile>
                </>
                :
                <>
                    <FooterContainer>
                        <Footeroverlay> </Footeroverlay>
                        <FooterWrapper className='kd-Jumbo-container'>
                            <FooterLeftColumn sWidth={sWidth}></FooterLeftColumn>
                            <FooterMiddleLeftColumn sWidth={sWidth}></FooterMiddleLeftColumn>
                            <FooterMiddleRightColumn sWidth={sWidth}></FooterMiddleRightColumn>
                            <FooterRightColumn sWidth={sWidth}></FooterRightColumn>
                        </FooterWrapper>
                        <FooterLine sWidth={sWidth}/>
                    </FooterContainer>
                </>}
            <FooterLastLine></FooterLastLine>
        </div>
    )
}

export default FooterWeHelpen

const FooterContainer = styled.div`
    padding: 48px 0px 30px 0px;
    position: relative;
    width: 100%;
    height: 530px;
    background-image: url('/images/jumbo/Backgroundfooter.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
`
const FooterContainerMobile = styled.div`
    background-image: none;
`

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: flex-start;
    } 
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