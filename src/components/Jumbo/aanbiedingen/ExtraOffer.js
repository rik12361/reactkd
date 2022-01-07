import React from 'react'
import styled from 'styled-components'

function ExtraOffer() {

    return (
        <ExtraOfferOuterContainer className='kd-Jumbo-container'>
            <ExtraOfferInnerContainer>
                <ExtraOfferGreenContainer>
                    <LeftContainer>
                        <span>Zo zacht als Maaslander</span>
                        <ExtraOfferButton className="kd-jumbo-button" href="">Proef'm nu</ExtraOfferButton>
                    </LeftContainer>
                    <RightContainer>
                        <ImgContainer>
                            <Img src='/images/jumbo/Maaslander.png'></Img>
                        </ImgContainer>
                    </RightContainer>
                </ExtraOfferGreenContainer>
                <ExtraOfferGreySponsored>
                    <p>Gesponsored</p>
                </ExtraOfferGreySponsored>
            </ExtraOfferInnerContainer>
        </ExtraOfferOuterContainer>
    )
}

export default ExtraOffer

const LeftContainer = styled.div`
    margin: 0px 0px 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span {
        color: white;
        font-size: 18px;
        font-weight: 700;
    }
`
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const ImgContainer = styled.div`
    width: 330px;
    height: 110px;
    margin: 0px 60px 0px 0px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;

`
const ExtraOfferButton = styled.a`
    margin: 10px 0px 0px 0px;
    width: 150px;
    height: 30px;
    text-align: center;
    font-size: 14px;
    padding: 3px 0px;
`

const ExtraOfferOuterContainer = styled.div`
    width: 100%;
    height: 220px;
    margin-top: 30px;
`

const ExtraOfferInnerContainer = styled.div`
    &:hover {
        background: red;
    }
    &:hover div > div > a {
        background: black!important;
        color: white;
        border-color: black;
    }
`
const ExtraOfferGreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 115px;
    background: var(--jumbo-yellow);
`

    const ExtraOfferGreySponsored = styled.div`
    width: 100%;
    height: 105px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    p {
       font-size: 12px;
       color: rgba(0,0,0, 0.6)
    }

    background: var(--jumbo-grey);
`

const OfferBlockContainer = styled.div`
`
