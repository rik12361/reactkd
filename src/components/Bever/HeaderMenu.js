import React from 'react'
import styled from 'styled-components'
import ShowBlock from './ShowBlock'

function HeaderMenu() {
    const menuItems = ["Dames", "Heren", "Kids", "Wandelen", "Fietsen", "Hardlopen", "Kamperen", "Wintersport", "Reizen", "Cadeau", "Activiteiten", "Merken", "Sale"];
    return (
        <MenuBarContainer>
            <MenuBarInnerContainer>
                { menuItems.map((menuItem) => 
                   <MenuLink key = {menuItem} href="#">{menuItem}
                    <MenuBlock>
                            <ShowBlock groupnm={menuItem}/>
                    </MenuBlock>
                   </MenuLink>
                )}
               <ActionLink href="#">Acties</ActionLink>
            </MenuBarInnerContainer>
        </MenuBarContainer>
    )
}

export default HeaderMenu

const MenuBarContainer = styled.div`
    height: 60px;
    width: 100%;
    background: var(--bever-grey);
    position: relative;
`
const MenuBarInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const MenuBlock = styled.div`
    width: 100%;
    height: 450px;
    position: absolute;
    top:60px;
    left: 0%;
    right: 0%;
    display: none;
    background: white;
    box-shadow: 0px 4px 15px 5px rgba(0,0,0,1.3);
    z-index: 500;
`

const MenuLink = styled.a`
    height: 60px;
    color: white;
    font-weight: 600;
    padding: 18px 10px;
    margin: 0px 22px 0px 0px;
    &:hover {
        background: white;
        color: black;
        box-shadow:none;
    }

    &:hover > ${MenuBlock} {
        display: block;
    }
`
const ActionLink = styled.a `
    height: 32px;
    width: 80px;
    color: black;
    background: white;
    border-radius: 10%;
    font-weight: 600;
    text-align: center;
    padding: 4px 12px;
    margin: 14px 0px;

    &:hover {
        background: rgb(200,200,200);
    }
`