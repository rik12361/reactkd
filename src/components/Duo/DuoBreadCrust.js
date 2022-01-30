import React from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

function DuoBreadCrust() {
  return <div>
      <OuterContainer>
          <InnerContainer>
            <BreadCrust className='kd-duo-container'><LinkTo>Home<FaChevronRight style={{height:'12px', margin:'0px 0px 0px 10px',padding:'0px 0px 0px 0px'}}/></LinkTo></BreadCrust>   
          </InnerContainer>
      </OuterContainer>
  </div>
}
export default DuoBreadCrust;
const OuterContainer = styled.div`
    height: 30px;
    background: var(--duoExtremeLightBlue);
`
const InnerContainer = styled.div`
    width: 100%;
`
const BreadCrust = styled.div`
  color: var(--duoLightBlue);
`
const LinkTo = styled.a`
  color: var(--duoLightBlue);
  cursor:pointer;
`
