import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaBars} from 'react-icons/fa';

function MobileMenu() {

const [navMenu, setNavMenu] = useState(false);

const ToggleNavMenu = () => {
    setNavMenu(true);
}

    return (
        <HamburgerContainer>
            <HamburgerButton onClick={() => ToggleNavMenu()}><img src='/images/jumbo/menu_black_24dp.svg' alt='jammer'></img><span>MENU</span></HamburgerButton>
        </HamburgerContainer>
    )
}

export default MobileMenu

const HamburgerContainer = styled.div` 
    z-index: 1000;
`

const HamburgerButton = styled.button`
    background-color: white;
    border: none;
    margin-left: 15px;

    span {
        font-weight: 500;
        font-size: 12px;
        padding: 0px 2px;
    }

    ${FaBars} {
        background-color: red;
    }
    img {
        transform: translateY(-0.5px);
    }
`