import React, {useState, useEffect} from 'react'
import { FaChevronDown, FaHeart, FaHeartbeat, FaMale, FaMapMarker, FaSearch, FaShoppingBasket } from 'react-icons/fa';
import styled from 'styled-components'
import JumboLeftColumn from './JumboLeftColumn'
import Modal from 'react-overlays/Modal'
import JumboButton from './components/JumboButton'
import MenuData from '../Jumbo/data/HeaderMenuBar.json'

function HeaderMenuBar() {
    return (
        <div className='kd-Jumbo-container'>
            <MenuList>
                {MenuData.map((menuItem) => (
                    <div className='kd-inline-block'>
                    <li><a href="#"><span>{menuItem.title}</span></a></li>
                    <ProductGroep>
                        <ul>
                            <li>
                                <div className='kd-block'>
                                    {menuItem.producten.map((productGroep) => <a href='#'>{productGroep.ProductGroep}</a>)}
                                </div>
                            </li>
                        </ul>
                    </ProductGroep>
                    </div>
                ))} 
            </MenuList>            
        </div>
    )
}

export default HeaderMenuBar

const ProductGroep = styled.div`

ul {
    list-style-type: none;
    float: none;
}

a {
    line-height: 1.375;
    font-size: 1em;
    font-weight: 400;
    color: black;
}
`
const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    list-style-type: none;
    padding: 0em;
    margin: 0em;

    li {
        float: left;
    }

    a {
        float: left;
        position: relative;
    }

    span {
        color: black;
        padding: 0em 2.5em 0em 0em;
        font-size: 14px;
        font-weight: 800;

    &::after {
        content: "";
        /* height: 14px;
        position:absolute; */
        background:black;
        left: 0;
        right: 0;
        bottom: 0.1em;
        transform: scaleX(0);
        transition: all 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
}
`