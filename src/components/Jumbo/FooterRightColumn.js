import React, {useState} from 'react'
import { FaApple, FaChevronRight, FaGooglePlay } from 'react-icons/fa'
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
function FooterRightColumn( {sWidth}) {
    const [showDropDown, setShowDropDown] = useState(false)

    const OpenDropdown = (sWidth) => {
        console.log(sWidth);
        showDropDown? setShowDropDown(false):setShowDropDown(true);
    }

    return (
        <BlackBackGroundContainer>
        <div className='kd-Jumbo-container'>
            {sWidth<=1100? 
            <RightMiddleColumn>
                <MenuContainer>
                <MenuButton onClick={() => OpenDropdown(sWidth)}>
                        <HyphenText><span>Download onze app</span>  <span><FaChevronDown style={{color: 'white', margin: '12px 0px', width:'32px', transition: 'all 250ms ease-in-out', height:'32px', transform: showDropDown? 'rotate(180deg)':'rotate(0deg)'}}/></span></HyphenText>
                        <Hyphens>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Hyphens> 
                </MenuButton>
                </MenuContainer>
                <MenuList style={{ opacity: showDropDown? '1' : '0', display: showDropDown? 'block' : 'none', transition: 'all 350ms ease-in-out' }}>
                    <p>Met de Jumbo app doe je nog vlotter boodschappen. Met de service, ruime keuze en laagsteprijsgarantie die je van ons gewend bent!</p>
                    <AppLink href="#"><span>Lees meer over de App</span><FaChevronRight></FaChevronRight></AppLink>
                    <AppContainer>
                    <AppLink href="#">
                        <StoreContainer>
                        <FaApple style={{width:'30px', height:'30px'}}/>
                        <div>
                            <p>Download in the</p>
                            <p>App Store</p>
                        </div>
                        </StoreContainer>
                    </AppLink>
                    <AppLink href="#">
                        <StoreContainer>
                        <FaGooglePlay style={{width:'30px', height:'30px'}}/>
                        <div>
                            <p>Ontdek het in</p>
                            <p>Google Play</p>
                        </div>
                        </StoreContainer>
                    </AppLink>
                    </AppContainer>
                </MenuList>
            </RightMiddleColumn> 
            :
            <RightMiddleColumn>
                <h4>Download onze app</h4>
                <p>Met de Jumbo app doe je nog vlotter boodschappen. Met de service, ruime keuze en laagsteprijsgarantie die je van ons gewend bent!</p>
                <AppLink href="#"><span>Lees meer over de App</span><FaChevronRight></FaChevronRight></AppLink>
                <AppContainer>
                    <AppLink href="#">
                        <StoreContainer>
                        <FaApple style={{width:'30px', height:'30px'}}/>
                        <div>
                            <p>Download in the</p>
                            <p>App Store</p>
                        </div>
                        </StoreContainer>
                    </AppLink>
                    <AppLink href="#">
                        <StoreContainer>
                        <FaGooglePlay style={{width:'30px', height:'30px'}}/>
                        <div>
                            <p>Ontdek het in</p>
                            <p>Google Play</p>
                        </div>
                        </StoreContainer>
                    </AppLink>
                </AppContainer>
            </RightMiddleColumn> 
        }
        </div>
        </BlackBackGroundContainer> 
    )
}

export default FooterRightColumn

const BlackBackGroundContainer = styled.div`
    @media (max-width: 1100px) {background: black;width:100%} 
`

const RightMiddleColumn = styled.div`
    width:400px;
    margin: 0px 0px 0px 0px;
    button {
        width: 100%;
        height: 40px;
    }
    h4 {
        font-size: 22px;
        font-weight: 600;
        color: white;
    }

    p {
        color: white;
    }
    @media (max-width: 1536px) {padding: 0px 0px 0px 0px;width:380px} 
    @media (max-width: 1280px) {padding: 0px 0px 0px 0px;width:380px;} 
    @media (max-width: 1100px) {padding: 0px 0px 0px 0px;width:1050px;};
`    

const AppContainer = styled.div`
    margin: 16px 0px 0px 0px;
    display: flex;
    justify-content: center;
    width: 220px;
    padding: 12px 148px 12px 148px;
    border-radius: 1em;
    border: 1px solid white;
    border-spacing: 15px 250px;
    @media (max-width: 1100px) {margin: 32px 0px 8px 0px;}
`
const StoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 130px;
    p {
        margin: 0px;
        padding: 0px;
        line-height: 12px;
    }
    p:nth-child(1) {
        font-size: 8px;
    }
    p:nth-child(2) {
        font-size: 18px;        
    }

    :hover {
        color: black;
        background-color: white;
    }
    :hover div p {
        color: black;
        background-color: white;
    }
`

const Hyphens = styled.div`
    width: 90vw;
    max-width: 90vw;
    overflow-x: hidden;
    height: 22px;
    color: white;
`
const HyphenText = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 90vw;
    height: 42px;
    justify-content: space-between;

    span:nth-child(1) {
        font-size: 32px;
    }

    span:nth-child(2) {
        width: 48px;
        height: 48px;
    }
`
const MenuContainer = styled.div`
    height: 52px;
`

const MenuButton = styled.button`
    display: block;
    background-color: black;
    border: none;
    width: 100%;
    text-align: left;
    :active {
        border: none;
    }
`

const MenuList = styled.div `
    height: 180px;
`

const AppLink = styled.a`
    color: white;
    :hover {
        color: white;
        background-color: black;
        text-decoration: underline;
    }
    span {
        padding: 0px 4px 0px 0px;
    }
`

 /* @media (max-width: 7681px) {} 
    @media (max-width: 3840px) {} 
    @media (max-width: 2560px) {} 
    @media (max-width: 1920px) {} 
    @media (max-width: 1536px) {} 
    @media (max-width: 1280px) {} 
    @media (max-width: 1100px) {} 
    @media (max-width: 980px) {} 
    @media (max-width: 768px) {} 
    @media (max-width: 640px) {} 
    @media (max-width: 480px) {} 
    @media (max-width: 384) {}  */