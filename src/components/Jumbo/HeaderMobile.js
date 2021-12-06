import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import JumboLogo from './JumboLogo'
import MyJumboGroup from './MyJumboGroup'
import SearchBar from './SearchBar'
import MobileMenu from './MobileMenu'

function HeaderMobile({showMessageLine, setScrollable}) {
    return (
        <div>
            <HeaderMobiieContainer>
                <FlexTop style= {{borderBottomStyle: showMessageLine? 'none' : 'solid 1px',   
                                  borderBottomColor: showMessageLine? '' : 'var(--jumbo-grey)'}}>
                    <MobileMenu/>
                    <JumboLogo/>
                    <MyJumboGroup/>
                </FlexTop>
                <SearchBar showMessageLine={showMessageLine} setScrollable={setScrollable}/>
            </HeaderMobiieContainer>        
        </div>
    )
}

export default HeaderMobile

const HeaderMobiieContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 90px;
    width: 100%;
    margin: 0px;
    border-bottom: 1px solid var(--jumbo-grey);
    background-color: white;
    z-index: 1000;
`
const FlexTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px;
    background-color: white;
    margin: 0px;
    z-index: 1000;

`


