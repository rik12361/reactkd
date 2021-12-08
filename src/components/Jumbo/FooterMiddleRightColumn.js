import React, {useState} from 'react'
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

function FooterMiddleRightColumn({sWidth, footerHeight, setFooterHeight}) {
    
    const [showDropDown, setShowDropDown] = useState(false)

    const OpenDropdown = (sWidth) => {
        console.log(sWidth);
        if (showDropDown)
        {
            setShowDropDown(false);
            setFooterHeight(footerHeight - 220);
        }
        else
        {
            setShowDropDown(true);
            setFooterHeight(footerHeight + 220);
        }
    }

    return (
        <div  className='kd-Jumbo-container'>
           {sWidth<=1100? 
            <RightMiddleColumn>
                <MenuButton onClick={() => OpenDropdown(sWidth)}>
                    <Hyphens>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Hyphens>
                        <HyphenText><span>Over Jumbo</span>  <span><FaChevronDown style={{color: 'white', margin: '12px 0px', width:'32px', transition: 'all 250ms ease-in-out', height:'32px', transform: showDropDown? 'rotate(180deg)':'rotate(0deg)'}}/></span></HyphenText>
                    <Hyphens>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Hyphens> 
                </MenuButton>
                <MenuList style={{ opacity: showDropDown? '1' : '0', display: showDropDown? 'block' : 'none', transition: 'all 350ms ease-in-out' }}>           
                    <div><Link href="#">Nieuwsbrief</Link></div>
                    <div><Link href="#">De 7 Zekerheden</Link></div>
                    <div><Link href="#">Werken bij Jumbo</Link></div>
                    <div><Link href="#">Online boodschappen doen</Link></div>
                    <div><Link href="#">Thuisbezorgen</Link></div>
                    <div><Link href="#">Boodschappen ophalen</Link></div>
                    <div><Link href="#">Openingstijden</Link></div>
                    <div><Link href="#">Het bedrijf Jumbo</Link></div>
                    <div><Link href="#">100-jarig jubileum</Link></div>
                    <div><Link href="#">Duurzaamheid</Link></div>
                    <div><Link href="#">Foodcoach</Link></div>
                    <div><Link href="#">Pers</Link></div>
                    <div><Link href="#">Corona maatregelen</Link></div>
                    <div><Link href="#">Jumbo België</Link></div>
                </MenuList>
            </RightMiddleColumn>
        :
        <RightMiddleColumn>
            <h4>Over Jumbo</h4>
            <div><Link href="#">Nieuwsbrief</Link></div>
            <div><Link href="#">De 7 Zekerheden</Link></div>
            <div><Link href="#">Werken bij Jumbo</Link></div>
            <div><Link href="#">Online boodschappen doen</Link></div>
            <div><Link href="#">Thuisbezorgen</Link></div>
            <div><Link href="#">Boodschappen ophalen</Link></div>
            <div><Link href="#">Openingstijden</Link></div>
            <div><Link href="#">Het bedrijf Jumbo</Link></div>
            <div><Link href="#">100-jarig jubileum</Link></div>
            <div><Link href="#">Duurzaamheid</Link></div>
            <div><Link href="#">Foodcoach</Link></div>
            <div><Link href="#">Pers</Link></div>
            <div><Link href="#">Corona maatregelen</Link></div>
            <div><Link href="#">Jumbo België</Link></div>
        </RightMiddleColumn>
        
        } 
        </div> 
  )
}

export default FooterMiddleRightColumn

const RightMiddleColumn = styled.div`
    padding: 0px 0px 0px 120px;
    width: 300px;

    p {
        color: white;
    }

    h4 {
        font-size: 22px;
        font-weight: 600;
        color: white;
    }
    @media (max-width: 1536px) {padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px; width: 350;} 
    @media (max-width: 1280px) {padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px; width: 350;} 
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
const MenuList = styled.div `
`

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