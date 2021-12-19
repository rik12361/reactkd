import React, {useRef} from 'react'
import styled from 'styled-components'
import { FaBox, FaList, FaMale, FaReceipt, FaTrophy } from 'react-icons/fa'

function MyJumboDropdownMenu({showDropDown, setShowDropDown}) {

    const menuRef = useRef();

    const checkCloseMenu = (e) => {
        if (e.target === menuRef.current)
        {
            setShowDropDown(false);
        }
    }

    return (
        <div>
            {showDropDown? <DropDownContainer onClick={(e) => checkCloseMenu(e)}>
                <DropDownMenu>
                    <MenuLine><FaMale/><a href="/"><span>Inloggen</span></a></MenuLine>
                    <MenuLine><FaBox/><a href="/"><span>Bestellen</span></a></MenuLine>
                    <MenuLine><FaTrophy/><a href="/"><span>Eerder gekocht</span></a></MenuLine>
                    <MenuLine><FaList/><a href="/"><span>Lijstjes</span></a></MenuLine>
                    <MenuLine><FaReceipt/><a href="/"><span>Recepten</span></a></MenuLine>
                    <MenuLine><span>Nog geen account?</span></MenuLine>
                    <MenuLine><RegisterMe href="/" className='kd-jumbo-button'>Registreer</RegisterMe></MenuLine>
                </DropDownMenu>
                <DropDownModal ref={menuRef}/> 
            </DropDownContainer>: '' }
        </div>
    )
}

export default MyJumboDropdownMenu

const DropDownContainer = styled.div` 
`
const RegisterMe = styled.a `
    background-color: var(--jumbo-yellow);
    height: 25px;
    width: 120px;
    color: black;
    padding: 4px 28px 4px 28px;
    font-size: 10px;
    text-align: center;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: white;
        color: black;
    }
`

const MenuLine = styled.li`
    position: relative;
    display: flex;
    color: rgb(120,120,120);
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    span {
        padding: 8px 5px;
        font-size: 10px;
        color: black;
        &::after {
                position: absolute;
                content: "";
                opacity: 0;
                top: 20px;
                left:20px;
                right: 0px;
                bottom: 0px;
                height: 2px;
                background-color: var(--jumbo-yellow);
        }
    }
    a:hover > span::after {
        opacity: 1;
    }
    /* li:hover > a span::after {
        opacity: 1;
    } */
`

const DropDownMenu = styled.ul`
    color: rgb(200,200,200);
    position: absolute;
    left: 120px;
    top: 50px;
    background: white;
    border: 1px solid var(--jumbo-grey);
    border-radius: 0.5em;
    padding: 15px;
    z-index: 40;
`
const DropDownModal = styled.div`
    position: fixed;
    z-index: 30;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.0);

`