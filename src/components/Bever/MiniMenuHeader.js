import React from 'react'
import styled from 'styled-components'
function MiniMenuHeader() {
    return (
        <MiniMenuHeaderContainer>
            <MiniMenuHeaderInnerContainer className='kd-bever-container'>
                <MenuLink href="#"><span>GRATIS LEVERING</span>vanaf 25,-</MenuLink>
                <MenuLink href="#"><span>GRATIS RETOURNEREN</span>in de winkels</MenuLink>
                <MenuLink href="#"><span>GRATIS ACHTERAF</span>betalen met Klarna</MenuLink>
                <MenuLink href="#"><span>KLANTENSERVICE</span></MenuLink>
            </MiniMenuHeaderInnerContainer>
        </MiniMenuHeaderContainer>
    )
}
export default MiniMenuHeader

const MiniMenuHeaderContainer = styled.div`
`
const MiniMenuHeaderInnerContainer = styled.div`
    background: var(--bever-light-grey);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0px;

    span {
        padding: 0px 6px 0px 0px;
    }

    span:nth-child(4) {
        text-decoration: underline;
    }
`
const MenuLink = styled.a`
    font-size: 12px;
    color: black;
    font-weight: 600;
    padding: 0px 0px 0px 0px;
    &:hover {
        color: black;
        text-decoration: underline;
    }

`
