import React, {useState} from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'
import styled from 'styled-components'
import MenuData from './data/HeaderMenuBar.json'

function HeaderMenuBar({showMessageLine}) {

    const [showModal, setshowModal] = useState(false)

    const showModalAndMenu = (newState) => {
        setshowModal(newState);
        // var d = new Date();
        // console.log("hovering..." + d.getSeconds());
    }

    return (
        <div>
           <HeaderMenuBarContainer>
            {showModal? (<JumboModal/>) :  ('') }
                <JumboContainer className='kd-Jumbo-container'>
                    <MenuContainer>
                        {MenuData.map((menuItem) => 
                            <MenuColumn href='' onMouseOver={() => showModalAndMenu(true)} 
                                                onMouseLeave={() => showModalAndMenu(false)}>
                                <MenuHeader><span>{menuItem.title}</span></MenuHeader>
                                {menuItem.producten.length !== 0? 
                                    <MenuItemsContainer>
                                        {menuItem.producten.map((productGroep) => 
                                            <div>
                                                <a href='/'><span>{productGroep.ProductGroep}</span></a>
                                                <SubItemContainer>
                                                    {productGroep.ProductSubGroep !== undefined? 
                                                        <SubGroepMenu>
                                                            <SubGroepHeader>
                                                                <span>{productGroep.ProductGroep}</span>
                                                                <span>Bekijk alles<FaChevronCircleRight/></span>
                                                            </SubGroepHeader>
                                                            <SubGroepItems>
                                                            {productGroep.ProductSubGroep.map((subgroep) => 
                                                                <p>{subgroep.Subgroep}</p>)
                                                            }
                                                            </SubGroepItems>
                                                        </SubGroepMenu>
                                                        :
                                                        ''
                                                    }
                                                </SubItemContainer>
                                            </div>)}
                                    </MenuItemsContainer> : '' }
                            </MenuColumn>)
                        }                            
                    </MenuContainer>
                </JumboContainer> 
            </HeaderMenuBarContainer> 
        </div>
    )
}
export default HeaderMenuBar

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
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 300;
`
const MenuColumn = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:hover > div {
        display: block;
    }

    &:hover > a > span::after {
            opacity: 1;
    }
`
const MenuHeader = styled.a`
    position: relative;
    padding: 0px;
    margin: 0px 30px 0px 0px;
    span {
        color: black;
        font-size: 14px;    
        padding: 0px 0px 130px 0px;
        font-weight: 800;

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
    }
`
const SubItemContainer = styled.div`
    position: absolute;
    left:290px;
    top: 110px;
    display: none;
    width: 690px;
    background: white;
    border: 1px solid grey;
    z-index:100;
`
const SubGroepHeader = styled.div``

const SubGroepMenu= styled.div``

const SubGroepItems= styled.div``

const MenuItemsContainer = styled.div`
    position: relative;
    top:54px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: white;
    padding: 32px 32px 16px 32px;
    border-radius: 1em;
    display: none;

    div a span {
        position: absolute;
        padding: 0px 0px 16px 0px;
        display: inline-block;
        color: red;
        background: yellow;
        white-space: nowrap;
        &::after {
             position:absolute;
             opacity: 1;
             content: "";
             height: 4px;
             background:var(--jumbo-yellow);
             top: 26px;
             left: 0;
             right: 0;
             bottom: 0px;
        }

        &:hover::after {
            opacity: 1;
        }

    }
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

