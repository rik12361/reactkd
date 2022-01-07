import React from 'react'
import styled from 'styled-components'

function AlwaysLowPrices() {
    return (
        <AlwaysLowPricesOuterContainer className='kd-Jumbo-container'>
            <AlwaysLowPricesLinkContainer>
                <AlwaysLowPricesText><span>Altijd lage prijzen<span>bij Jumbo</span></span></AlwaysLowPricesText>
                <AlwaysLowPricesText><span>Door producten met een Altijd Lage Prijs geniet je van veel voordeel. Bij Jumbo ben je zo het goedkoopste uit</span> </AlwaysLowPricesText>
                <AlwaysLowPricesLink>Bekijk de Altijd Lage Prijs producten</AlwaysLowPricesLink>
            </AlwaysLowPricesLinkContainer>
            <ImageContainer>
                <Img src='https://www.jumbo.com/aanbiedingen/_nuxt/img/alp-banner.b951824.png'></Img>
            </ImageContainer>
        </AlwaysLowPricesOuterContainer>
    )
}

export default AlwaysLowPrices

const AlwaysLowPricesOuterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 5px solid var(--jumbo-yellow);
    border-radius: 1em;

    div > div:nth-child(1) {
        span{
            font-size: 32px;
            font-weight: 800;
            span{
                font-weight: 100;
                padding: 0px 0px 0px 10px;
            }
        }
    }

    div > div:nth-child(2) {
        width: 600px;
        span {
            font-size: 16px;
        }
    }
`
const AlwaysLowPricesLinkContainer = styled.div`
    margin: 10px 0px 10px 40px;
`
const AlwaysLowPricesLink = styled.a`
    color: black;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        color: black;
    }
`
const AlwaysLowPricesText = styled.div`
`
const ImageContainer = styled.div`
    margin: 0px 0px 60px 0px;
    width: 406px;
    height: 123px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
