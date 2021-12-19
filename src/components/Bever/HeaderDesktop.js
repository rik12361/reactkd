import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'
import Logo from './Logo'
import SearchBar from './SearchBar'

function HeaderDesktop() {
    return (
        <HeaderContainer>
            <HeaderInnerContainer className='kd-bever-container'>
                <FlexBlock>
                <LeftBlock>
                    <Logo></Logo>
                    <SearchBar></SearchBar>
                </LeftBlock>
                <RightBlock>
                    <MenuLink href="#"><span>Onze winkels</span></MenuLink>
                    <MenuLink href="#"><span>Advies & Inspiratie</span></MenuLink>
                    <MenuLink href="#"><span>Inloggen<FaChevronDown style={{width:'8px'}}/></span></MenuLink>
                    <MenuLink href="#"><span className="material-icons">favorite</span></MenuLink>
                    <MenuLink href="#"><span className="material-icons">shopping_cart</span></MenuLink>
                </RightBlock>
                </FlexBlock>
            </HeaderInnerContainer>
        </HeaderContainer>
    )
}

export default HeaderDesktop

const HeaderContainer = styled.div`
    height: 99px;
    width: 100%;
    background: var(--bever-light-grey);
`
const HeaderInnerContainer = styled.div`
    padding: 22px 0px 10px 0px;
`

const FlexBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const LeftBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const RightBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span {
        padding: 0px 22px 0px 0px;
 
        &:hover {
            color: black;
            text-decoration: underline;
        }
    }
    a:nth-child(4) span, a:nth-child(5) span {
        padding: 2px 22px 0px 0px;
        color: var(--bever-blue);
 
        &:hover {
            cursor:pointer;
        }
    }
`
const MenuLink = styled.a`
    text-decoration: none;
    color: black;
`
