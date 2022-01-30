import React from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

function DuoFirstFooter() {
  return <div>
      <OuterContainer>
        <InnerContainer>
            <InnerSpacer className='kd-duo-container'>
                <LeftColumn>De Rijksoverheid. Voor Nederland</LeftColumn>
                <MiddleColumn>
                    <h1>Service</h1>                
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Contact</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Abonneren</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>RSS</span></Link></MenuItem>
                </MiddleColumn>
                <RightColumn>
                    <h1>Over deze site</h1>                
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Over deze site</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Rijksoverheid.nl</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Wetten en regelingen</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Wetten en regelingen</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Privacy</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Cookies</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Toegankelijkheid</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Open data</span></Link></MenuItem>
                    <MenuItem><Link href="/"><FaChevronRight style={{height:'16px', color:'white', padding:'0px 0px 2px 0px'}}/><span>Kwetsbaarheden melden</span></Link></MenuItem>
                </RightColumn>
            </InnerSpacer>
        </InnerContainer>
      </OuterContainer>
  </div>;
}

export default DuoFirstFooter;

const OuterContainer = styled.div`
    background: var(--duoLightBlue);
`
const InnerContainer = styled.div`
    width: 100%;
    height: 520px;
`
const InnerSpacer = styled.div`
    padding: 40px 0px;
    display: flex;
    flex-direction: row;
`
const LeftColumn = styled.div`
    width: 70vw;
    color: white;
    font-size: 28px;
    font-weight: 500;
    font-style: italic;
`
const MiddleColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
        font-size: 28px;
        font-weight: 400;
        color: white; 
    }
    span {
        color: white;
    }
    width: 15vw;
    overflow: wrap;
`
const RightColumn = styled(MiddleColumn)`
`
const Link = styled.a`
    width: 20vw;
    span: {
        font-size: 10px;
        font-weight: 50;
    }
    span:hover {
        text-decoration: underline;
    }
`
const MenuItem = styled.div`
    margin: 8px 0px;
`
