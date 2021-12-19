import React from 'react'
import styled from 'styled-components'

function GourmetTip() {
    return (
        <div className='kd-Jumbo-container'>
            <GourmetContainer>
                <LeftContainer>
                    <TipContainer>
                     <p>Tafel dek je!</p>
                     <p><span>Gourmet mini's</span><span> voor iedereen</span> in vlees, vegetarisch en vis</p>
                     <ViewProductButton href="#" className='kd-jumbo-button'>Bekijk de producten</ViewProductButton>
                     </TipContainer>
                </LeftContainer>
                <RightContainer>
                    <GourmetImg src='https://www.jumbo.com/dam/homepage/2021/49/hero/Held-Week49-Gourmet-L.jpg' alt='jammer'/>
                </RightContainer>
            </GourmetContainer>
        </div>
    )
}

export default GourmetTip

const GourmetImg = styled.img`
    width: 100%;
    height: auto;
`
const LeftContainer = styled.div``

const RightContainer = styled.div`
    width: 857px;
    height: 596px;
    @media (max-width: 1280px) {width:780px;height:528px;}
    @media (max-width: 1100px) {width:580px;height:418px;}
    @media (max-width: 960px) {width:520px;height:358px;}
    @media (max-width: 640px) {width:80%;margin-top:20px;}

`
const TipContainer = styled.div`
    width: 343px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0px;
    padding: 0px;

    p:nth-child(1) {
        font-family: cursive;
        font-style: italic;
        font-size: 24px;
        font-weight: 400;
        @media (max-width: 1280px) {font-size: 18px;}
        @media (max-width: 960px) {font-size: 16px;}
   }

    p:nth-child(2) span:nth-child(1) {
        font-size: 42px;
        font-weight: 900;
        line-height: 21px;
        @media (max-width: 1280px) {font-size: 34px;}
        @media (max-width: 960px) {font-size: 32px;}
    }

    p:nth-child(2) span:nth-child(2) {
        font-size: 40px;
        font-weight: 400;
        @media (max-width: 1280px) {font-size: 24px;}
    }
    @media (max-width: 1280px) {width: 325px}
    @media (max-width: 1100px) {width: 205px}
    @media (max-width: 960px) {width: 330px;}
    @media (max-width: 640px) {width:100%;margin-top:20px;}

`

const GourmetContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 960px) {justify-content: space-between}

    @media (max-width: 640px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    /* @media (max-width: 384px) {top: calc(32vh + 10px);font-size:14px;height:32px} */

`
const ViewProductButton = styled.a`
    margin: 20px 0px;
    width: 200px;
    height: 30px;
    text-align: center;
    border: 1px solid grey;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`