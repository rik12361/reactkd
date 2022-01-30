import React from 'react';
import styled from 'styled-components';
function DuoHeader() {
  return <div>
      <OuterContainer className='kd-duo-container'>
        <InnerContainer>
            <ImgContainer>
                  <Img src='../images/duo/DuoLogo.png' alt='jammer'></Img>
            </ImgContainer>
        </InnerContainer>
      </OuterContainer>
  </div>;
  
}

export default DuoHeader;

const OuterContainer = styled.div`
`
const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 125px;
  width: 100%;
  background: white;
`
const ImgContainer = styled.div`
  margin: 0px 0px 0px 140px;
  height: 100px;
  width: 194px;
`
const Img = styled.img`
  height: 100%;
  width: 100%;
`