import React, {useState} from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'

function FooterMiddleLeftColumn({sWidth}) {

    const [showDropDown, setShowDropDown] = useState(false)

    const OpenDropdown = (sWidth) => {
        console.log(sWidth);
        showDropDown? setShowDropDown(false) : setShowDropDown(true);
    }

    return (
            <BackgroundColorContainer>
            {sWidth<=1100? 
            <div className='kd-Jumbo-container'>
            <LeftMiddleColumn >
                    <MenuButton onClick={() => OpenDropdown(sWidth)}>
                        <HyphenText><span>Laat je inspireren</span>  <span><FaChevronDown style={{color: 'white', margin: '12px 0px', width:'32px', transition: 'all 250ms ease-in-out', height:'32px', transform: showDropDown? 'rotate(180deg)':'rotate(0deg)'}}/></span></HyphenText>
                        <Hyphens>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Hyphens> 
                    </MenuButton>
                    <MenuList style={{ opacity: showDropDown? '1' : '0', display: showDropDown? 'block' : 'none', transition: 'all 350ms ease-in-out' }}>
                        <div><Link href="#">Nieuwsbrief</Link></div>
                        <div><Link href="#">Recepten</Link></div>
                        <div><Link href="#">Populairste recepten</Link></div>
                        <div><Link href="#">Wat eten we vandaag?</Link></div>
                        <div><Link href="#">Vind je perfecte wijn</Link></div>
                        <div><Link href="#">Kook- & instructie video’s</Link></div>
                        <div><Link href="#">Hallo magazine</Link></div>
                        <div><Link href="#">Inspiratie</Link></div>
                        <div><Link href="#">Kerst</Link></div>
                        <div><Link href="#">Kerstrecepten</Link></div>
                        <div><Link href="#">Voorgerecht</Link></div>
                        <div><Link href="#">Kerstdiner</Link></div>
                        <div><Link href="#">Kerstdessert</Link></div>
                        <div><Link href="#">Kerstontbijt</Link></div>
                        <div><Link href="#">Hoofdgerecht</Link></div>
                        <div><Link href="#">Recepten</Link></div>
                        <div><Link href="#">Gourmet</Link></div>
                    </MenuList>
                </LeftMiddleColumn>
                </div>
        :
            <LeftMiddleColumn>
                <h4>Laat je inspireren</h4>
                <div><Link href="#">Nieuwsbrief</Link></div>
                <div><Link href="#">Recepten</Link></div>
                <div><Link href="#">Populairste recepten</Link></div>
                <div><Link href="#">Wat eten we vandaag?</Link></div>
                <div><Link href="#">Vind je perfecte wijn</Link></div>
                <div><Link href="#">Kook- & instructie video’s</Link></div>
                <div><Link href="#">Hallo magazine</Link></div>
                <div><Link href="#">Inspiratie</Link></div>
                <div><Link href="#">Kerst</Link></div>
                <div><Link href="#">Kerstrecepten</Link></div>
                <div><Link href="#">Voorgerecht</Link></div>
                <div><Link href="#">Kerstdiner</Link></div>
                <div><Link href="#">Kerstdessert</Link></div>
                <div><Link href="#">Kerstontbijt</Link></div>
                <div><Link href="#">Hoofdgerecht</Link></div>
                <div><Link href="#">Recepten</Link></div>
                <div><Link href="#">Gourmet</Link></div>
            </LeftMiddleColumn> }
            </BackgroundColorContainer>
    )
}

export default FooterMiddleLeftColumn

const BackgroundColorContainer = styled.div`
    @media (max-width: 1100px) {background: black;width:100%} 
`

const LeftMiddleColumn = styled.div`

    padding: 0px 0px 0px 20px;
    width: 300px;

    z-index: 3;
    transition: all 250ms ease-in-out;
    p {
        color: white;
    }

    h4 {
        font-size: 22px;
        font-weight: 600;
        color: white;
        margin: 0%;
        @media (max-width: 1100px) {
            span {
                padding-left: 830px;
                color: white;
            }
        }
    }
    @media (max-width: 1536px) {padding: 0px 0px 0px 0px;width:300px} 
    @media (max-width: 1280px) {padding: 0px 0px 0px 0px;width:190px;} 
    @media (max-width: 1100px) {padding: 0px 0px 0px 0px;width:150px;}

`
const Hyphens = styled.div`
    width: 1000px;
    height: 20px;
    overflow: hidden;
    color: white;
`
const HyphenText = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1000px;
    justify-content: space-between;

    span:nth-child(1) {
        font-size: 32px;
    }

    span:nth-child(2) {
        width: 48px;
        height: 48px;
    }
`
const MenuButton = styled.button`
    display: block;
    background-color: black;
    border: none;
    text-align: left;
    :active {
        border: none;
    }
`
const MenuList = styled.div ``

const Link = styled.a`
    color: white;
    :hover {
        color: white;
        text-decoration: underline;
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