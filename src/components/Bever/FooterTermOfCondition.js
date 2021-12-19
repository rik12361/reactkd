import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

function FooterTermOfCondition() {
    return (
        <FooterTermOfConditionContainer>
            <FooterTermOfConditionInnerContainer className='kd-bever-container'>
                <FooterTermOfConditionContainerTopLine>
                    <FooterLink href=''><span>Algemene voorwaarden</span></FooterLink>
                    <FooterLink href=''><span>Privacy policy</span></FooterLink>
                    <span>Cookie policy  © 2021 Bever B.V. All rights reserved</span>
                </FooterTermOfConditionContainerTopLine>
                <FooterTermOfConditionContainerBottomLine>
                    <span>Volg ons voor meer Buiten</span>
                    <FooterFaLink href=''><span><FaFacebook/></span></FooterFaLink>
                    <FooterFaLink href=''><span><FaInstagram/></span></FooterFaLink>
                    <FooterFaLink href=''><span><FaYoutube/></span></FooterFaLink>
                </FooterTermOfConditionContainerBottomLine>
                </FooterTermOfConditionInnerContainer>  
        </FooterTermOfConditionContainer>
    )
}

export default FooterTermOfCondition
const FooterTermOfConditionContainer = styled.div`
    padding: 32px 0px 0px;
    height: 100px;
    width: 100%;
    background: white;
`
const FooterTermOfConditionInnerContainer = styled.div``
const FooterTermOfConditionContainerTopLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const FooterTermOfConditionContainerBottomLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: grey;
    padding: 24px 0px 64px 0px;
    span {
        margin: 0px 8px 0px 0px;
    }
    span:nth-child(1) {
        color: grey;
    }

`
const FooterLink = styled.a`

    span    {
        color: black;
        &:hover {
            color: black;
            text-decoration: underline;
        }
    }

    :after {
        content: '|';
        color: black;
        margin: 0px 4px 0px 4px;
    }
`
const FooterFaLink = styled.a`
    span    {
        &:hover {
            cursor: pointer;
        }
    }
`