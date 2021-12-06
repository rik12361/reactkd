import React, {useState, useEffect, } from 'react'
import styled from 'styled-components'
import JumboLogo from './JumboLogo'
import MyJumboGroup from './MyJumboGroup'
import SearchBar from './SearchBar'

function HeaderSearchInfoBar({showMessageLine, setScrollable}) {
    
    return (
        <HeaderSearchContainer style={{ top: showMessageLine? '40px' : '0px', 
                                        height: showMessageLine? '91px' : '105px'}}>
            <div className='kd-Jumbo-container'>
                <FlexMain>
                    <JumboLogo/>
                    <SearchBar showMessageLine={showMessageLine} setScrollable={setScrollable}/>
                    <MyJumboGroup/>
                </FlexMain>
            </div>
        </HeaderSearchContainer>
    )
}
export default HeaderSearchInfoBar

const HeaderSearchContainer = styled.div`
    position: fixed;
    width: 100%;
    top:40px;
    left: 0px;
    right: 0px;
    height: 00px;
    z-index: 580;
    background-color: white;
    padding: 0px;

    @media (min-width: 961px) {
        /* height: 55px; */
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: var(--jumbo-grey);
    }

`

const FlexMain = styled.div`
    position: relative;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 34px 0px 0px 0px;
    height: 40px;
    z-index: 580;
`
