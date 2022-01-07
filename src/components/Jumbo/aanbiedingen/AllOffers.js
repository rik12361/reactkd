import React, {useState} from 'react'
import styled from 'styled-components'
import menuData from '../data/HeaderMenuBar.json'
import productData from '../Products.json'
import OfferCardProductGroup from './OfferCardProductGroup'
import ExtraOffer from './ExtraOffer'
import Conditions from './Conditions'
import ShowFolder from './ShowFolder'
import {useRef} from 'react'
import AlwaysLowPrices from './AlwaysLowPrices'

function AllOffers() {

    console.log (menuData);
    console.log (menuData.menuItems[0].title);
    const showBlock = useRef(0);
    const [showNextPeriod, setshowNextPeriod] = useState(false);

    return (
        <AllOffersOuterContainer>
            <AllOffersInnerContainer className='kd-Jumbo-container'>
                <AllOffersLeftButtonContainer>
                    {menuData.menuItems[0].productGroepen.map((pg) => 
                        <div key={pg.id}>
                            {productData.filter((prd) => prd.productGroep === pg.id).length > 0?
                                <AllOfferButton key={pg.id} className='kd-jumbo-button' href={'#' + pg.id + ''}>{pg.productGroepNaam}</AllOfferButton>
                            :
                            ''
                            }
                        </div>
                    )}
                </AllOffersLeftButtonContainer>
                <AllOffersRightButtonContainer showNextPeriod={showNextPeriod} >
                    <AllOfferButton onClick={() =>setshowNextPeriod(false)} className='kd-jumbo-button' href="#">22 dec t/m 28 dec</AllOfferButton>
                    <AllOfferButton onClick={() =>setshowNextPeriod(true)} className='kd-jumbo-button' href="#">29 dec t/m 4 jan</AllOfferButton>
                </AllOffersRightButtonContainer>

            </AllOffersInnerContainer>
            <OfferCards>
                    {menuData.menuItems[0].productGroepen.map((pg) =>
                        <div key={pg.id}>
                            <OfferCardProductGroup  showBlock={showBlock} ProductGroup={pg}></OfferCardProductGroup>
                            {showBlock.current === pg.id?
                            <ExtraOffer></ExtraOffer> : ''}
                        </div>
                    )}
            </OfferCards>
            <OfferCardsFooter>
                <Conditions></Conditions>
                <ShowFolder></ShowFolder>
                <AlwaysLowPrices></AlwaysLowPrices>
            </OfferCardsFooter>

        </AllOffersOuterContainer>
    )
}

export default AllOffers
const AllOffersOuterContainer = styled.div`
`
const AllOffersInnerContainer = styled.div`
    margin: 30px 0px 0px 0px;
    height: auto;
    width: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    
    @media (max-width: 960px) {flex-direction: column} 
`
const AllOffersLeftButtonContainer = styled.div`
    flex: 6;
    margin: 5px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media (max-width: 1280px) {flex: 5} 
    @media (max-width: 960px) {order: 2} 
`

const AllOffersRightButtonContainer = styled.div`

    a:nth-child(1) {
        border-radius: 1.5em 0em 0em 1.5em;
        margin-right: 0px;
        background-color: ${p => p.showNextPeriod? 'white' : 'var(--jumbo-yellow)'};

        &:hover {
            cursor: pointer;
            background-color: ${p => p.showNextPeriod? 'black' : 'var(--jumbo-yellow)'};
            color: ${p => p.showNextPeriod? 'white' : 'black'};
        }
    }

    a:nth-child(2) {
        border-radius: 0em 1.5em 1.5em 0em;
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
    padding: 15px 25px 15px 25px;
    font-size: 15px;
    width: 300px;
    font-weight:700;
    height: 45px;
    text-align: center;
    border: 1px solid rgb(180,180,180);
    background-color: white;
    line-height: 55px;
    &:hover {
        background-color: black;
        color: white;
    }
    @media (max-width: 1100px) { margin-top: 0px; } 

`
const OfferCards= styled.div`
    margin-bottom: 0px;
`
const OfferCardsFooter= styled.div`
    width: 100%;
    background: white;
    margin-bottom: 150px;
`

