import React from 'react'
import HeroImage from './HeroImage'
import MobileExtraInfo from './MobileExtraInfo'
import Productoverview from './Productoverview'
import GourmetTip from './GourmetTip'
import HandyLists from './HandyLists'
import WhatDoWeEatToday from './WhatDoWeEatToday'
import SevenGaranties from './SevenGaranties'
import HowToSaveMoney from './HowToSaveMoney'
import ExtraPromo from './ExtraPromo'

import '../../css/kd-general.css'
import '../../css/kd-devices.css'
import '../../css/kd-app.css'
import styled from 'styled-components'

function JumboMain({Scrollable, sWidth}) {

    return (
        <JumboMainContainer style={{overflow: Scrollable? 'auto' : 'hidden', height: Scrollable? 'auto' : '100vh'}}>
            <HeroImage sWidth={sWidth}></HeroImage >
            <MobileExtraInfo sWidth={sWidth}/>
            <Productoverview/>
            <GourmetTip/>
            <HandyLists/>
            <WhatDoWeEatToday/>
            <ExtraPromo/>
            <SevenGaranties/>
            <HowToSaveMoney/>
        </JumboMainContainer>
    )
}
export default JumboMain

const JumboMainContainer = styled.div` 
    position: relative;
    overflow: hidden;    
`