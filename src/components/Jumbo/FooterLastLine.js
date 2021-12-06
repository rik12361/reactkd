import React from 'react'
import styled from 'styled-components'

function FooterLastLine() {
    return (
        <div className='kd-Jumbo-container'>
            <FlexContainer>
                <LeftBlock>
                    <ImageContainer>
                        <ImageWrapper src='/images/jumbo/mastercard.png' alt='jammer'/>
                    </ImageContainer>
                    <ImageContainer>
                        <ImageWrapper src='/images/jumbo/maestro.png' alt='jammer'/>
                    </ImageContainer>
                    <ImageContainer>
                        <ImageWrapper src='/images/jumbo/visa.png' alt='jammer'/>
                    </ImageContainer>
                    <ImageContainer>
                        <ImageWrapper src='/images/jumbo/vpaypng.png' alt='jammer'/>
                    </ImageContainer>
                    <ImageContainer>
                        <ImageWrapper src='/images/jumbo/amex.png' alt='jammer'/>
                    </ImageContainer>
                    <ImageContainer style={{width: '50px'}}>
                        <ImageWrapper src='/images/jumbo/applepay.png' alt='jammer'/>
                    </ImageContainer>
                    <ImageContainer style={{height: '30px'}}>
                        <ImgLink href="#">
                            <ImageWrapper src='/images/jumbo/medicijnen.png' alt='jammer'/>
                        </ImgLink>
                    </ImageContainer>
                    <ImageContainer>
                        <ImgLink href="#">
                            <ImageWrapper src='/images/jumbo/thuiswinkel.png' alt='jammer'/>
                        </ImgLink>
                    </ImageContainer>
                </LeftBlock>
                <MiddleBlock>
                    <Warning18>
                    <p>18 jaar verkopen wij geen alcohol en tabak</p>
                    <p>25 jaar? Laat je legitimatie zien!</p>
                    </Warning18>
                    <ImageContainer style={{height: '45px', width: '60px'}}>
                        <ImageWrapper src='/images/jumbo/nix18.png' alt='jammer'/>
                    </ImageContainer>
                </MiddleBlock>
                <RightBlock>
                        <span>© 2021 Jumbo Supermarkten</span>
                </RightBlock>       
            </FlexContainer>
        </div>
    )
}

export default FooterLastLine

const Warning18 = styled.div`
    p {
        padding: 0px 16px 0px 0px;
        margin: 0px;
        line-height: 12px;
        font-size: 12px;
    }
`

const ImgLink = styled.a`
    text-decoration: none;
    img:hover {
        opacity: 0.5;
    }
`

const ImageWrapper = styled.img`
    width: 100%;
    height: 100%;
`
const ImageContainer = styled.div`
    width: 36px;
    height: 22px;
    margin: 0px 24px 0px 0px;
`

const ImageContainerRight = styled.div`
    width: 48px;
    height: 36px;
    margin: 0px 24px 0px 0px;
`

const FlexContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const LeftBlock = styled.div`
    display: flex;
    flex-direction: row;
`
const MiddleBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const RightBlock = styled.div`
    position: relative;
    color: gray;
    margin-left: 30vw;
    width: 300px;

`