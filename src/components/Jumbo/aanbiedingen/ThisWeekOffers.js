import React, {useState} from 'react'
import styled from 'styled-components'
import menuData from '../data/HeaderMenuBar.json'
import productData from '../Products.json'
import Conditions from './Conditions'
import ShowFolder from './ShowFolder'
import OfferCard from './OfferCard'
import AlwaysLowPrices from './AlwaysLowPrices'

function ThisWeekOffers() {

    console.log (menuData);
    console.log (menuData.menuItems[0].title);
    const [showNextPeriod, setshowNextPeriod] = useState(false);

    return (

        <ThisWeekOuterContainer>
            <ThisWeekInnerContainer className='kd-Jumbo-container'>
            <h1>Deze week actie</h1>
            <PageHeader>
                <span>Deze week extra voordelig {showNextPeriod? 'Ja' : 'Nee'}</span>
                <ThisWeekRightButtonContainer showNextPeriod={showNextPeriod}>
                    <AllOfferButton onClick={() =>setshowNextPeriod(false)} className='kd-jumbo-button' href="#">22 dec t/m 28 dec</AllOfferButton>
                    <AllOfferButton onClick={() =>setshowNextPeriod(true)} className='kd-jumbo-button' href="#">29 dec t/m 4 jan</AllOfferButton>
                </ThisWeekRightButtonContainer>
            </PageHeader>

            <OfferContainer>
                {productData.filter((prd) => prd.id > 0).map((prod) => 
                        <OfferCard key={prod.id} prod={prod} showProdGroup={false} showFreeDelivery={false}></OfferCard>
                    )}
            </OfferContainer>
            </ThisWeekInnerContainer>

            <OfferCardsFooter>
                <Conditions></Conditions>
                <ShowFolder></ShowFolder>
                <AlwaysLowPrices></AlwaysLowPrices>
            </OfferCardsFooter>

        </ThisWeekOuterContainer>
    )
}

export default ThisWeekOffers

const ThisWeekOuterContainer = styled.div`
    width: 100%;
`
const ThisWeekInnerContainer = styled.div`
    margin: 30px 0px 0px 0px;
`

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 20px 0px; // ????????????????????????????

    span {
        font-size: 24px;
        font-weight: 900;
        margin: 5px 0px 16px 0px;
    }

    @media (max-width: 768px) {
        span { transform: translate(0%, -10px); }
        div { transform: translate(0%, 25px); }
    }
    @media (max-width: 640px) {
        span { transform: translate(10px, -10px); font-size: 16px;}
        div { transform: translate(5px, 0px); }
    }
    @media (max-width: 480px) {
        span { transform: translate(10px, -10px); font-size: 16px;}
        div { transform: translate(10px, 0px); }
    }
    @media (max-width: 384px) {
        span { transform: translate(10px, -10px); font-size: 16px;}
        div { transform: translate(10px, 0px); }
    }
    @media (max-width: 640px) { flex-direction: column; align-items: flex-start} 

`
const OfferContainer = styled.div`
    height: auto;
    width: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;  
    flex-wrap: wrap;
`

const OfferCardsFooter= styled.div`
    width: 100%;
    background: white;
    margin-bottom: 150px;
`
const ThisWeekRightButtonContainer = styled.div`
    margin: 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    
    a:nth-child(1) {
        border-radius: 1em 0em 0em 1em;
        margin-right: 0px;
        background-color: ${p => p.showNextPeriod? 'white' : 'var(--jumbo-yellow)'};

        &:hover {
            cursor: pointer;
            color: black;
            background-color: ${p => p.showNextPeriod? 'black' : 'var(--jumbo-yellow)'};
            color: ${p => p.showNextPeriod? 'white' : 'black'};
        }
        @media (max-width: 640px) { order: 1; } 
    }

    a:nth-child(2) {
        border-radius: 0em 1em 1em 0em;
        margin-left: 0px;
        @media (max-width: 640px) { order: 2; } 
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
    padding: 8px 25px 8px 25px;
    font-size: 15px;
    font-weight:700;
    height: 45px;
    text-align: center;
    border: 1px solid rgb(180,180,180);

    @media (max-width: 1100px) { margin-top: 0px; } 

    @media (max-width: 640px) {width: 160px;}
    @media (max-width: 640px) {width: 200px;}

`
