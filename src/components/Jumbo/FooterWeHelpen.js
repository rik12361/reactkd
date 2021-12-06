import React from 'react'
import FooterLeftColumn from './FooterLeftColumn'
import FooterRightColumn from './FooterRightColumn'
import FooterMiddleLeftColumn from './FooterMiddleLeftColumn'
import FooterMiddleRightColumn from './FooterMiddleRightColumn'
import FooterLine from './FooterLine'
import FooterLastLine from './FooterLastLine'

import styled from 'styled-components'

function FooterWeHelpen() {
    return (
        <div>
            <FooterContainer>
                <Footeroverlay> </Footeroverlay>
                <FooterWrapper className='kd-Jumbo-container'>
                    <FooterLeftColumn></FooterLeftColumn>
                    <FooterMiddleLeftColumn></FooterMiddleLeftColumn>
                    <FooterMiddleRightColumn></FooterMiddleRightColumn>
                    <FooterRightColumn></FooterRightColumn>
                </FooterWrapper>
                <FooterLine/>
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
    z-index: 2;
`

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

