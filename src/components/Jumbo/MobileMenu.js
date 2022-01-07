import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function MobileMenu({setScrollable}) {

const [navMenu, setNavMenu] = useState(false);

const ToggleNavMenu = (nwstate) => {
    setNavMenu(nwstate);
    setScrollable(!nwstate);
}

    return (
        <HamburgerContainer>
            <HamburgerButton onClick={() => ToggleNavMenu(true)}><img src='/images/jumbo/menu_black_24dp.svg' alt='jammer'></img><span>MENU</span></HamburgerButton>
            {navMenu? <JumboModal onClick={() => ToggleNavMenu(false)} ></JumboModal> : ''}
            <SidebarContainer>
            <SideBar style={{left:navMenu? '0vw':'-240px', transition:'all 350ms'}}>
                <MenuLogo>
                    <ImgContainer>
                        <Image src='/images/jumbo/jum-logo.svg' alt='jammer'/>
                    </ImgContainer>
                    <div><span onClick={() => ToggleNavMenu(false)} className="material-icons">close</span></div>
                </MenuLogo>

                <SideBarMenu>
                    <MenuItem><MenuLink href="#"><span className="material-icons">local_pizza</span>Producten</MenuLink></MenuItem>
                    <MenuItem><Link to="/jumbo.com/aanbiedingen" onClick={() => ToggleNavMenu(false)}><span className="material-icons">percent</span>Aanbiedingen</Link></MenuItem>
                    <MenuItem><MenuLink href="#"><span className="material-icons">card_membership</span>Win- en spaaracties</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#"><span className="material-icons">shopping_cart</span>Online bestellen</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#"><span className="material-icons">local_dining</span>Wat eten we</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#"><span className="material-icons">menu_book</span>Recepten</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#"><span className="material-icons">support_agent</span>Service</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#"><span className="material-icons">list_slt</span>Zakelijk bestellen</MenuLink></MenuItem>
                    <MenuItem><hr/></MenuItem>
                    <MenuItem><MenuLink href="#"><span className="material-icons">phone</span>Klanten service<br/>
                        <span id='t01'>0800-0220161</span></MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#"><span id='t01'>08:00 -20:00 (ma. t/m za.)</span></MenuLink></MenuItem>
                </SideBarMenu>
            </SideBar>
            </SidebarContainer>
        </HamburgerContainer>
    )
}

export default MobileMenu

const ImgContainer = styled.div`
    width: 100px;
    height: 28px;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
`

const MenuLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px 0px 0px 12px;
    align-items: center;
    height: 10vh;
    width: 220px;
    position: fixed;
    span {
        font: 32px;
        weight: 500;
        cursor: pointer;
    }
`

const SidebarContainer = styled.div`
    position: relative;
    z-index:999;
`

const SideBar = styled.div`
    background-color: white;
    position: absolute;
    top: -38px;
    bottom: -10px;
    left: -50px;
    right: 100px;
    height: 110vh;
    width: 240px;
    z-index: 999;
`

const SideBarMenu = styled.ul`
    position: relative;
    top: 10vh;
    list-style: none;
    overflow: scroll;
    height: 90vh;
    margin: 0px;
    padding: 12px 0px 0px 0px;
`

const MenuItem = styled.li`
    padding: 30px 0px;
    height: 24px;
    span {
        margin: 0px 0px 0px 0px;
    }
    a {
        color: grey;
        font-size: 16px;
    }
`
const MenuLink = styled.a`
    color: black;
    text-decoration: none;
    font-size: 16px;
    span {
        color: grey;
        font-size: 16px;
    }
    #t01 {
            color: black;
            padding: 0px 4px 0px 12px;
        }
    hr {
        padding: 0px;
        margin: 0px;
        height: 4px;
    }
`
const HamburgerContainer = styled.div` 
    position: relative;
    z-index: 100;
`

const JumboModal = styled.div`
    position: fixed;
    z-index: 900;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);    
`

const HamburgerButton = styled.button`
    background: white;
    border: none;
    margin-left: 15px;
    height: 20px;
    z-index:901;

    span {
        font-weight: 500;
        font-size: 12px;
        padding: 0px 2px;
    }

    img {
        transform: translateY(-0.5px);
    }
`