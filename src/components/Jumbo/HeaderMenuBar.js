import React, {useState, useRef, useEffect} from 'react'
import { FaDove } from 'react-icons/fa';
import styled from 'styled-components'
import MenuData from '../Jumbo/data/HeaderMenuBar.json'

function HeaderMenuBar() {

    const [showModal, setshowModal] = useState(false)
    const onMouseOver = (onOff) => {
        if (showModal != onOff) {
            setshowModal(onOff);
        }
    }

    return (
        <div>
            <ZIndexContainer>    
            {/* <div  style={{ position: 'relative', zIndex: '4000!important', background:'red'}}>     */}
        <div className='kd-Jumbo-container'>
            <MenuList>
                {MenuData.map((menuItem) => (
                    <div id='A01'>
                    <li id='L01' onMouseOver={() => onMouseOver(true)}  onMouseLeave={() => onMouseOver(false)}><a id='A02' href="#"><span>{menuItem.title}</span></a></li>
                    <div className='kd-relative'>
                    {showModal? (<JumboModal/>) :  ('') }
                    <ProductGroep>
                        <ul>
                            <li>
                                <div>
                                    {menuItem.producten.map((productGroep) => <a href='#'>{productGroep.ProductGroep}</a>)}
                                </div>
                            </li>
                        </ul>
                    </ProductGroep> 
                    </div>
                    </div>
                ))} 
            </MenuList>            
        </div>
        </ZIndexContainer></div>
    )
}

export default HeaderMenuBar
const MenuList = styled.ul`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
    padding: 0px 0px 16px 0px;
    margin: 0em;
    z-index: 4000;
    background-color: white;

    // open menu with productgroups. last option is empty:
    #A01:hover:not(:last-child) div {
         display: flex;
    } 

    // line under menu choice:
    #A01:hover li a span::after {
        opacity: 1;
        transform: scaleX(1);
    } 

    #A02 span {
        position: relative;
        color: black;
        padding: 0em 0em 0em 0em;
        margin: 0em 2.5em 0em 0em;
        font-size: 16px;
        font-weight: 800;       
        &::after {
                opacity: 0;
                content: "";
                height: 4px;
                position:absolute;
                background:var(--jumbo-yellow);
                top: 162%;
                left: 0;
                right: 0;
                bottom: 1.9em;
                transform: scaleX(0);
                transition: all 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }        

`

const ZIndexContainer = styled.div`
    display: relative;
    z-index: 5000;
    background-color: white;
`

const JumboModal = styled.div`
  position: fixed;
  display: flex;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.1);
  opacity: 0.5;
`

const ProductGroep = styled.div`
display: flex;
position: absolute;
top: 2em;
left: -2.1em;

div {
    background-color: white;
    border: 2px solid  var(--jumbo-grey);
    border-radius: 1em;
    padding: 1em 2em;
    display: none;
    flex-direction: column;
    text-align: flex-start;
    z-index: 3000;
}

ul {
    list-style-type: none;
    float: none;
}

a { 
    line-height: 1.375;
    font-size: 1em;
    font-weight: 400;
    color: black;
    padding: 0.5em 0em 0.5em 0em;
    white-space: nowrap;
}
`
