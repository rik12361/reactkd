import React from 'react';
import styled from 'styled-components';

function DuoHeroPage() {
  return <div>
      <OuterContainer className='kd-duo-container'>
          <InnerContainer>
                <HeroImageContainer>
                    <Img src='../images/duo/Onderwijs school 1.jpg' alt='jammer'></Img>
                    <LinkTo href="/"><ImgSlogan>Samen maken we onderwijs mogelijk</ImgSlogan></LinkTo>
                </HeroImageContainer>
          </InnerContainer>
      </OuterContainer>
  </div>;
}

export default DuoHeroPage;

const OuterContainer = styled.div``
const InnerContainer = styled.div`
    width: 100%;
`
const HeroImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 420px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
const ImgSlogan = styled.div`
    position: absolute;
    border-radius: 0em;
    font-size: 40px;
    font-weight: 700;
    background: rgba(0,0,0,0.5);
    padding: 20px;
    color:white;
    bottom: 160px;
    left: 20%;    
    &:hover {
        text-decoration: underline;
    }
`
const TabLink = styled.div`
    height: 40px;
    width: 20%;
    padding: 0px 10px;
    border: 1px solid grey;
`
const LinkTo = styled.a`
`