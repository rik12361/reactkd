import React from 'react'
import styled from 'styled-components'
import FooterNeedHelp from './FooterNeedHelp'
import FooterBecomeExtFriend from './FooterBecomeExtFriend'
import FooterContactOptions from './FooterContactOptions'
import FooterTextColumns from './FooterTextColumns'
import FooterLogoLine from './FooterLogoLine'
import FooterTermOfCondition from './FooterTermOfCondition'

function Footer() {
    return (
        <FooterContainer>
            <FooterInnerContainer className='kd-bever-container'>
                <FooterTopContainer>
                    <FooterNeedHelp></FooterNeedHelp>
                    <FooterBecomeExtFriend></FooterBecomeExtFriend>
                </FooterTopContainer>
                <FooterContactOptions></FooterContactOptions>
                <FooterTextColumns></FooterTextColumns>
                <FooterLogoLine></FooterLogoLine>
            </FooterInnerContainer>
            <FooterTermOfCondition></FooterTermOfCondition>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    width: 100%;
    background: var(--bever-grey);

`
const FooterInnerContainer = styled.div`
`
const FooterTopContainer = styled.div`
    padding: 20px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`
