import React from 'react'
import styled from 'styled-components'

function FooterTopLine() {
    return (
        <FooterTopLineContainer> 
            <FooterTopLineInnerContainer className='kd-bever-container'>
                <TopLineLink href="."><span>GRATIS LEVERING</span> vanaf 25,-</TopLineLink>
                <TopLineLink href="."><span>GRATIS RETOURNEREN</span> in de winkels</TopLineLink>
                <TopLineLink href="."><span>GRATIS ACHTERAF</span> betalen met Klarna</TopLineLink>
                <TopLineLink href="."><span>KLANTENSERVICE</span></TopLineLink>
            </FooterTopLineInnerContainer>
        </FooterTopLineContainer>
    )
}

export default FooterTopLine

const FooterTopLineContainer = styled.div`
    background: var(--bever-light-grey);
    margin: 64px 0px 20px 0px;
`
const FooterTopLineInnerContainer = styled.div`
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const TopLineLink = styled.a`
    color: black;
    &:hover {
        color: black;
        text-decoration: underline;
    }

    span {
        font-weight: 500;
    }
`