import React, {useState, useEffect} from 'react'
import HeaderMessage from './HeaderMessage'
import HeaderSearchInfoBar from './HeaderSearchInfoBar'
import HeaderMenu from './HeaderMenu'
import HeroImage from './HeroImage'
import HeaderMobile from './HeaderMobile'
import ShowScreenResolution from './ShowScreenResolution'
import MobileExtraInfo from './MobileExtraInfo'
import Productoverview from './Productoverview'
import GourmetTip from './GourmetTip'
import HandyLists from './HandyLists'
import WhatDoWeEatToday from './WhatDoWeEatToday'
import SevenGaranties from './SevenGaranties'
import HowToSaveMoney from './HowToSaveMoney'
import ExtraPromo from './ExtraPromo'
import FooterWeHelpen from './FooterWeHelpen'

import '../../css/kd-general.css'
import '../../css/kd-devices.css'
import '../../css/kd-app.css'
import styled from 'styled-components'

function Jumbo() {
    const [showMessageLine, setShowMessageLine] = useState(true);
    const [Scrollable, setScrollable] = useState(true);
    const [sWidth, setsWidth] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect (() => {
        console.log("Add evemt");
        window.addEventListener("scroll", () => checkRemoveHeaderMessage());
        window.addEventListener("click", () => checkRemoveHeaderMessage());
        window.addEventListener('resize', checkResolution);
        checkResolution();

        // default footer height:
        sWidth <= 1100? setFooterHeight(750) : setFooterHeight(730);

        return () => {window.removeEventListener("scroll", checkRemoveHeaderMessage)
        window.removeEventListener("click", checkRemoveHeaderMessage)};
    }, [sWidth]);

    const checkRemoveHeaderMessage = () => {
        var sh =  document.documentElement.scrollTop;
        console.log("SSSSSSSSSSSScroll"+sh);
        (sh > 0? setShowMessageLine(false) : setShowMessageLine(true));
    }
    
    const checkResolution = () => {
        const width = window.innerWidth;
        setsWidth(width);
    }

    return (
        <JumboMainContainer style={{overflow: Scrollable? 'auto' : 'hidden', height: Scrollable? 'auto' : '100vh'}}>
            <ShowScreenResolution sWidth={sWidth} />
            <Desktopview>
                <HeaderMessage showMessageLine={showMessageLine}></HeaderMessage>
                <HeaderSearchInfoBar showMessageLine={showMessageLine} setScrollable={setScrollable}></HeaderSearchInfoBar>
                <HeaderMenu showMessageLine={showMessageLine}/>
            </Desktopview>
            <MobileView>
                <HeaderMobile showMessageLine={showMessageLine} setScrollable={setScrollable}></HeaderMobile>
            </MobileView>
                <HeroImage sWidth={sWidth}></HeroImage >
                <MobileExtraInfo sWidth={sWidth}/>
                <Productoverview/>
                <GourmetTip/>
                <HandyLists/>
                <WhatDoWeEatToday/>
                <ExtraPromo/>
                <SevenGaranties/>
                <HowToSaveMoney/>
            <FooterWeHelpen  sWidth={sWidth} footerHeight={footerHeight} setFooterHeight={setFooterHeight} />
        </JumboMainContainer>
    )
}
export default Jumbo

const JumboMainContainer = styled.div` 
    position: relative;
    overflow: hidden;    
`

const Desktopview = styled.div `

@media (max-width: 960px) {
    display: none;
}
`
const MobileView = styled.div `
  @media (min-width: 961px) {
    display: none;
}
`