import React, {useState, useRef, useEffect} from 'react'
import { FaDove } from 'react-icons/fa';
import styled from 'styled-components'
import MenuData from '../Jumbo/data/HeaderMenuBar.json'

// TROEP TROEP TROEP TROEP

// TROEP TROEP TROEP TROEP
// TROEP TROEP TROEP TROEP
// TROEP TROEP TROEP TROEP


function HeaderMenuBar() {

    const [showModal, setshowModal] = useState(false)
    const href =  React.useRef('A01');

    const showModalAndMenu = (newState) => {
        var d = new Date();
        setshowModal(newState);
        console.log("hovering..." + d.getSeconds());
        console.log(href);
    }

    return (
        <div>
            <HeaderMenuBarContainer>    
            {/* <div  style={{ position: 'relative', zIndex: '4000!important', background:'red'}}>     */}
        <div className='kd-Jumbo-container'>
            <MenuList>
                {MenuData.map((menuItem) => (
                    <div id='A01' onMouseOver={() => showModalAndMenu(true)}  onMouseLeave={() => showModalAndMenu(false)}>
                    {/* <div id='A01' onMouseOver={() => setshowModal(true)}  onMouseLeave={() => setshowModal(false)}> */}
                    <li id='L01' ><a id='A02' href="#"><span>{menuItem.title}</span></a></li>
                    <div className='kd-relative'>
                    {showModal? (<JumboModal/>) :  ('') }
                    <ProductGroep>
                        <ul>
                            <li>
                                <div >
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
        </HeaderMenuBarContainer></div>
    )
}

export default HeaderMenuBar

const HeaderMenuBarContainer = styled.div`
    width: 100%;
    height: 40px;
`
const MenuList = styled.ul`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
    padding: 0px 0px 16px 0px;
    margin: 0em;
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
        font-size: 14px;
        font-weight: 800;       
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
        &::after {
                opacity: 0;
                content: "";
                height: 4px;
                position:absolute;
                background:var(--jumbo-yellow);
                top: 33px;
                left: 0;
                right: 0;
                bottom: 0px;
                transform: scaleX(0);
                transition: all 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }        

`

const JumboModal = styled.div`
  position: fixed;
  display: flex;
  z-index: 0;
  top: 171px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.1);
`

const ProductGroep = styled.div`
display: flex;
position: absolute;
top: 32px;
left: -2.1em;
z-index: 4000;

div {
    background-color: white;
    border: 2px solid  var(--jumbo-grey);
    border-radius: 1em;
    padding: 1em 2em;
    display: none;
    flex-direction: column;
    text-align: flex-start;
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
