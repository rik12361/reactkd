import React from 'react'
import styled from 'styled-components'

function FooterBecomeExtFriend() {
    return (
        <FooterBecomeExtFriendContainer>
            <p>Wordt Buitenvriend</p>
            <MailAdressLine type="text" placeholder='E-mailadres'></MailAdressLine>
            <SignInButton>Meld je aan</SignInButton>
        </FooterBecomeExtFriendContainer>
    )
}

export default FooterBecomeExtFriend

const FooterBecomeExtFriendContainer = styled.div`
    position: relative;
    width: 680px;
    height: 120px;
    background: var(--bever-grey);
    // width: 536px;

    p {
        color: white;
        font-size: 22px;
        line-height: 1em;
        margin: 0px 0px 4px 0px;
    }
    
`
const MailAdressLine = styled.input `
    width: 474px;
    height: 40px;
    outline: none;
    padding: 0px 0px 0px 8px;
    border: none;
    border-radius: 2% 0% 0% 2%;
    
`
const SignInButton = styled.button`
    position: relative;
    top: 2px;
    background: var(--bever-orange);
    width: 200px;
    height: 40px;
    color: white;
    font-size: 22px;
    border: none;
    border-radius: 0% 2% 2% 0%;
    transition: transform opacity 350ms ease;

    &:hover {
        opacity: 0.8;
    }
`
