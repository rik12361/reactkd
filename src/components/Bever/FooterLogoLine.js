import React from 'react'
import styled from 'styled-components'

function FooterLogoLine() {
    return (
        <FooterLogoLineContainer>            
            <FooterLogoLineInnerContainer className='kd-bever-container'>
                <ImgContainer>
                    <Img src='/images/bever/payoptions.png'></Img>
                </ImgContainer>
                <ImgContainer>
                    <Img src='/images/bever/BottomLogo.png'></Img>
                </ImgContainer>
            </FooterLogoLineInnerContainer>
        </FooterLogoLineContainer>
    )
}

export default FooterLogoLine

const FooterLogoLineContainer = styled.div`
    margin: 48px 0px 0px 0px;
    height: 70px;
    width: 100%;
`
const FooterLogoLineInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ImgContainer = styled.div`
    width: 400px;
    height: 50px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`