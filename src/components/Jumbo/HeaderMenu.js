import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaChevronCircleRight } from 'react-icons/fa'
import styled from 'styled-components'
import MenuData from './data/HeaderMenuBar.json'

function HeaderMenuBar({showMessageLine}) {

    const [showModal, setshowModal] = useState(false)

    const getTop = (idx) => {
        return idx * -36 -24 +  'px';
    }

    const showModalAndMenu = (newState) => {
        setshowModal(newState);
    }

    const getHeight = (e) =>
    {
        return e.length * 36 + 48 + 'px';
    }

    return (
        <div>
           <HeaderMenuBarContainer>
            {showModal && showMessageLine? (<JumboModal  style={{top: showMessageLine? '171px' :'101px'}}/>) :  ('') }
                <JumboContainer className='kd-Jumbo-container'>
                    <MenuContainer>
                        <MenuHorizontalContainer> 
                        {showMessageLine?
                        <>
                        {MenuData.menuItems.map((menuItem) => 
                            <MenuColumn href='' onMouseOver={() => showModalAndMenu(true)} 
                                                onMouseLeave={() => showModalAndMenu(false)}>
                                <MenuColumnHeader><Link to={menuItem.url}>{menuItem.title}</Link></MenuColumnHeader>
                                
                                {menuItem.productGroepen.length !== 0?
                                <MenuGroupContainer>
                                {menuItem.productGroepen.map((productGroep, index) => 
    
                                    <MenuItemContainer key={index}> 
                                        {productGroep.url !== undefined? <ProductHeader><Link to={productGroep.url}><span>{productGroep.productGroepNaam}</span></Link></ProductHeader>
                                        :
                                        <ProductHeader><Link to=''><span>{productGroep.productGroepNaam}</span></Link></ProductHeader>}
                                        {/* <h1>{productGroep.url}</h1> */}
                                        {productGroep.productSubGroep !== undefined? 
                                            <SubMenuItemContainer style={{top:getTop(index), height: getHeight(menuItem.productGroepen)}}>
                                                <SubGroepHeader>
                                                    <span><a href=""><span>{productGroep.productGroepNaam}</span></a></span>
                                                    <span><span>Bekijk alles</span><a href=''><FaChevronCircleRight/></a></span>
                                                </SubGroepHeader>
                                                <SubGroepItems>
                                                    {productGroep.productSubGroep.map((subgroep) => 
                                                        <li key={subgroep.id}><a href=""><span>{subgroep.Subgroep}</span></a></li>)} 
                                                </SubGroepItems>
                                            </SubMenuItemContainer> : '' }
                                    </MenuItemContainer> )}
                                </MenuGroupContainer> : '' }

                            </MenuColumn>)} </> : '' }
                        </MenuHorizontalContainer>
                    </MenuContainer>
                </JumboContainer> 
            </HeaderMenuBarContainer> 
        </div>
    )
 
}
export default HeaderMenuBar

const MenuHorizontalContainer = styled.ul`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height:70px;
    padding: 0px;
    p {
        font-weight: 700;
        font-size: 14px;
        padding: 0px 12px 0px 0px;
    }
    ul {
        display: none;
    }
    li:hover > ul  {
        display: block;
        color:green;
        list-style: none;
    }
`
const MenuGroupContainer = styled.ul`
    position: absolute;
    background: white;
    top: 60px;
    padding: 24px 24px;
    border-radius: 1em;
`
const MenuItemContainer = styled.li`
    position: relative;
    width: 300px;
    padding: 4px 0px;
    background: white;
    height: 36px;

    span {
        color: black;
        font-size: 16px;
        font-weight:100;
    }

`
const ProductHeader = styled.p`
    position:relative;

    a span {
        position:relative;
    }

    a span:after {
        position:absolute;
        opacity: 0;
        content: "";
        height: 4px;
        background:var(--jumbo-yellow);
        top: 24px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 100;
    }

    &:hover > a span:after {
        opacity: 1;
    }
`

const MenuColumn = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:hover > ul {
        /* display: block; */
    }

    &:hover > span::after {
        opacity: 1;
    }
`
const MenuColumnHeader = styled.span`
    color: black;
    font-size: 14px;    
    padding: 0px 10px 0px 0px;
    font-weight: 800;

    a {
        color: black;
    }

    &::after {
        position:absolute;
        opacity: 0;
        content: "";
        height: 4px;
        background:var(--jumbo-yellow);
        top: 36px;
        left: 0;
        right: 0;
        bottom: 0px;
    }
`

const SubMenuItemContainer = styled.ul`
    position: absolute;
    top: 0px;
    left:260px;
    width: 700px;
    background: white;
    border-radius: 0em 1em 1em 0em;
    border-left:solid 1px rgba(200,200,200,0.8);
    text-decoration: none;
    z-index: 100;
    li {
        display: block;
    }
`
// oufrt

const HeaderMenuBarContainer = styled.div`
    top: 40px;
    position: relative;
    height: 40px;
    width: 100%;
`
const JumboContainer = styled.div`
    position: relative;
`
const MenuContainer = styled.div`
    position: absolute;
    top: 91px;
    left: 0px;
    right: 0px;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 300;
`

const SubGroepHeader = styled.div`
    padding: 24px 0px 0px 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span a {
        color: black;
    }

    span:nth-child(1) {
        span {
            font-weight: 900;
            font-size:24px;
            color: black;
        }
    }

    span:nth-child(2) {
        font-weight: 100;
        font-size:16px;
        color: black;
        padding-right: 48px;
        span {
            padding-right: 8px;
        }
    }
`

const SubGroepItems = styled.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    flex-wrap: wrap;

    padding: 16px 0px 0px 0px;
    li {
        height: 36px;
        font-size: 16px;
        font-weight:100;
    }
    color: black;
`

const JumboModal = styled.div`
  position: fixed;
  display: flex;
  top: 171px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;

 @media (max-width: 1999px) {
        top: 171px;
    }
`

