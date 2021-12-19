import React from 'react'
import styled from 'styled-components'
import HeaderDesktop from './HeaderDesktop'
import HeaderMenu from './HeaderMenu'
import MiniMenuHeader from './MiniMenuHeader'
import HeroBlock from './HeroBlock'
import ProductSample from './ProductSample'
import ShopNow from './ShopNow'
import FooterTopLine from './FooterTopLine'
import Footer from './Footer'
import FeedbackAndHelp from './FeedbackAndHelp'

function Bever() {
    const prodSampleFirstView = [1, 2, 3, 4, 5];
    const prodSampleSecondView = [6, 7, 8, 9, 10];
    const shopnowFirstView = [
        {"id": 1, "title": "Bekijk overzicht"},
        {"id": 2, "title": "Shop nu"},
        {"id": 3, "title": "Shop nu"}
    ];
    const shopnowSecondView = [
        {"id": 4, "title": "Bekijk overzicht"},
        {"id": 5, "title": "Shop nu"},
        {"id": 6, "title": "Shop nu"}
    ];
    return (
        <BeverMainContainer>
            <HeaderDesktop></HeaderDesktop>
            <HeaderMenu></HeaderMenu>
            <MiniMenuHeader></MiniMenuHeader>
            <HeroBlock></HeroBlock>
            <ProductSample pageTitle='Folderaanbiedingen' prodSampleFirstView={prodSampleFirstView}></ProductSample>
            <ShopNow shopnowFirstView={shopnowFirstView}></ShopNow>
            <ProductSample pageTitle='Uitgelicht' prodSampleFirstView={prodSampleSecondView}></ProductSample>
            <ShopNow shopnowFirstView={shopnowSecondView}></ShopNow>
            <FooterTopLine></FooterTopLine>
            <Footer></Footer>
            <HeaderMobile></HeaderMobile>
            <FeedbackAndHelp></FeedbackAndHelp>
        </BeverMainContainer>
    )
}

export default Bever

const HeaderMobile = styled.div``
const BeverMainContainer = styled.div`
`