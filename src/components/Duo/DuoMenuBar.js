import React from 'react';
import styled from 'styled-components';
import {useState} from 'react'
import { Fade } from 'react-reveal';

function DuoMenuBar() {

 const [search, setSearch] = useState(false);

  return <div>
      <OuterContainer>          
        <InnerContainer className='kd-duo-container'> 
            <LeftContainer><Menu href="#">Home</Menu></LeftContainer> 
            <RightContainer>
                <SearchFieldContainer style={{
                    width:search? '300px': '0px', 
                    border:search? '2px dotted black' : 'none'}}>
                        <SearchField type='text' placeholder='Zoeken' size='36'></SearchField>
                </SearchFieldContainer>
                <SearchContainer><SearchBtn onClick={()=>setSearch(!search)}><i className="fa fa-search"></i></SearchBtn> </SearchContainer>
            </RightContainer> 
        </InnerContainer>
      </OuterContainer>
  </div>;
}

export default DuoMenuBar;

const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LeftContainer = styled.div`
    color: white;
    font-size: 32px;
    padding: 12px 0px 12px 0px;
`

const RightContainer = styled(LeftContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    i {
        font-size: 32px;        
    }
`
const OuterContainer = styled.div`
    height: 85px;
    width: 100%;
    background: var(--duoLightBlue);
`

const SearchBtn = styled.button`
    position: relative;
    z-index: 2;

    height: 56px;
    width: 56px;
    margin: 2px 0px 0px 0px;
    background: white;
    border: none;

    i {
        color: black;
    }

    &:hover {
        background: black;
        color: white;
    }
    &:hover > i {
        color: white;
    }
    transition: all 450ms ease;
`
const SearchField = styled.input`
    padding: 4px;
    border: 13px solid red;
    background: white;
    border: none;
    color: black
    width: 200px;
    size: 1;
    height: 56px;
`
const SearchContainer = styled.div``
const SearchFieldContainer = styled.div`
    margin: 0px;
    padding: 0px;
    font-size: 24px;
    width: 300px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: all 400ms ease;
`
const Menu = styled.a`
    color: white;
    font-size: 24px;
    &:hover {
        color: white;
        text-decoration: underline;
    }
`
