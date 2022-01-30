import React, {useState} from 'react'
import styled from 'styled-components'
import menuData from '../data/HeaderMenuBar.json'
import productData from '../Products.json'
import Conditions from './Conditions'
import ShowFolder from './ShowFolder'
import OfferCard from './OfferCard'
import AlwaysLowPrices from './AlwaysLowPrices'

function NoOrderCosts({sWidth}) {

    console.log (menuData);
    console.log (menuData.menuItems[0].title);
    const [showNextPeriod, setshowNextPeriod] = useState(false);

    const freeDelivery = {
        "title": "Gratis bezorgen",
        "subtitle": "Kies een van deze aanbiedingen en je betaalt geen bezorgkosten"
    }

    const checkAddExtraPromotionBlock = (index, sWidth) => {

        if (sWidth <= 768) {
            return index === 2?  true : false;
        }

        if (sWidth <= 960)
        {
            return index === 3? true : false;
        }

        if (sWidth <= 1100)
        {
            return index === 4? true : false;
        }

        if (sWidth <= 1280)
        {
            return index === 4? true : false;
        }

        if (sWidth <= 1536)
        {
            return index === 6? true : false;
        }
        return index === 6? true : false;
    }

    return (
        <NoOrderCostsOuterContainer>
            <NoOrderCostsInnerContainer className='kd-Jumbo-container'>

            <FirstPageHeader>
                  <span>Extra Goedkoop bezorgen</span>
            </FirstPageHeader>
            <SecondPageHeader>
                <div>
                    <div><span><span>Maandag</span> 3 jan t/m <span>zondag</span> 9 jan</span></div>
                    <div>Alleen geldig bij bezorgen of ophalen op deze dagen</div>
                </div>
                <NoOrderCostsRightButtonContainer showNextPeriod={showNextPeriod}>
                    <AllOfferButton onClick={() =>setshowNextPeriod(false)} className='kd-jumbo-button' href="#"><span>22 dec t/m 28 dec</span></AllOfferButton>
                    <AllOfferButton onClick={() =>setshowNextPeriod(true)} className='kd-jumbo-button' href="#"><span>29 dec t/m 4 jan</span></AllOfferButton>
                </NoOrderCostsRightButtonContainer>
            </SecondPageHeader>

            <OfferContainer>
                <OfferCard prod={1} showProdGroup={false} showFreeDelivery={true} freeDelivery={freeDelivery}></OfferCard>
                {productData.filter((prd) => prd.id > 0).map((prod, index) => 
                        <>
                            {checkAddExtraPromotionBlock(index+1, sWidth)? 
                            <>
                                <ExtraBlock key={index}><span>HI HIHI</span></ExtraBlock>
                            </>
                            : 
                            ''
                            }
                            <OfferCard prod={prod} showProdGroup={false} showFreeDelivery={false} freeDelivery={freeDelivery}></OfferCard>
                        </>
                    )}
            </OfferContainer>
            </NoOrderCostsInnerContainer>

            <OfferCardsFooter>
                <Conditions></Conditions>
                <ShowFolder></ShowFolder>
                <AlwaysLowPrices></AlwaysLowPrices>
            </OfferCardsFooter>

        </NoOrderCostsOuterContainer>
    )
}

export default NoOrderCosts

const ExtraBlock = styled.div`
    background: green;
    width: 100%;
    height: 100px;
    span {
        color: white;
        font-size: 24px;
        text-align: center;
    }
`

const NoOrderCostsOuterContainer = styled.div`
`
const NoOrderCostsInnerContainer = styled.div`
    margin: 30px 0px 0px 0px;
`

const FirstPageHeader = styled.div`
    margin: 0px 0px 40px 0px;
    @media (max-width: 960px) {
        margin: 0px 0px 60px 0px;
    }
    
    span {
        font-size: 24px;
        font-weight: 900;
        margin: 5px 0px 16px 0px;
    }
`

const SecondPageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 40px 0px;

    @media (max-width: 960px) {
        margin: 0px 0px 40px 0px;
    }

    div:nth-child(1) > div {
        @media (max-width: 960px) { transform: translate(0px, 20px); width: 400px}
        @media (max-width: 768px) { transform: translate(0px, 20px); width: 400px;}
        @media (max-width: 640px) { transform: translate(0px, 20px); width: 400px}
        @media (max-width: 480px) { transform: translate(0px, 20px); width: 400px; font-size: 14px;}
    }

    div:nth-child(2){
        @media (max-width: 960px) { transform: translate(-20px, -50px);}
        @media (max-width: 768px) { transform: translate(-60px, -45px);}
        @media (max-width: 640px) { transform: translate(-150px, -50px); }
        @media (max-width: 480px) { transform: translate(-400px, -43px); }
        @media (max-width: 384px) { transform: translate(-400px, -41px); }
    }

    span {
        font-size: 24px;
        span {
            font-size: 24px;
            font-weight: 900;
            margin: 5px 0px 16px 0px;
        }
    }
`

const OfferContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const OfferCardsFooter= styled.div`
    width: 100%;
    background: white;
    margin-bottom: 150px;
`
const NoOrderCostsRightButtonContainer = styled.div`
    flex: 2;
    margin: 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @media (max-width: 1280px) {flex: 3} 
    @media (max-width: 960px) {order: 1} 

    a:nth-child(1) {
        border-radius: 1em 0em 0em 1em;
        margin-right: 0px;
        background-color: ${p => p.showNextPeriod? 'white' : 'var(--jumbo-yellow)'};

        &:hover {
            cursor: pointer;
            background-color: ${p => p.showNextPeriod? 'black' : 'var(--jumbo-yellow)'};
            color: ${p => p.showNextPeriod? 'white' : 'black'};

        }
    }

    a:nth-child(2) {
        border-radius: 0em 1em 1em 0em;
        margin-left: 0px;
        background: ${p => p.showNextPeriod?  'var(--jumbo-yellow)' : 'white'};

        &:hover {
            cursor: pointer;
            background-color: ${p => p.showNextPeriod? 'var(--jumbo-yellow)' : 'black'};
            color: ${p => p.showNextPeriod? 'black' : 'white'};
        }
    }
`

const AllOfferButton = styled.a`
    display: inline;
    margin: 2px 3px;
    padding: 8px 25px 4px 25px;
    font-size: 15px;
    font-weight:600;
    height: 45px;
    text-align: center;
    border: 1px solid rgb(180,180,180);
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }

    @media (max-width: 7580px) { padding: 4px 25px 8px 25px;} 
    @media (max-width: 1280px) { padding: 8px 25px 8px 25px;} 
    @media (max-width: 1280px) { margin-top: 0px; span{font-size: 16px; font-weight: 600}} 
    @media (max-width: 1100px) { margin-top: 0px; span{font-size: 16px; font-weight: 600}} 

    @media (max-width: 960px) { width:250px;span{font-size: 16px; font-weight: 600}; padding: 8px 25px 2px 25px}
    @media (max-width: 768px) { width:200px;span{font-size: 15px; font-weight: 600}}
    @media (max-width: 640px) { width:180px;span{font-size: 15px; font-weight: 600}}
    @media (max-width: 480px) { width:160px;span{font-size: 13px; font-weight: 500}}
    @media (max-width: 384px) { width:150px;span{font-size: 10px; font-weight: 500}}
`
