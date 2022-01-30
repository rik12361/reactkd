import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import styled from 'styled-components';
function DuoNewsFlash() {
  return <div>
      <OuterContainer className='kd-duo-container'>
          <InnerContainer>
              <h1><FaExclamationCircle style={{fontSize:'32px', margin:'0px 10px 2px 8px'}}></FaExclamationCircle>Let op! Vergeet niet uw jaarrekening voor 1 juli in te dienen</h1>         
         </InnerContainer>
      </OuterContainer>
  </div>;
}
export default DuoNewsFlash

const InnerContainer = styled.div`
    background: var(--duoPurple);
    color: white;
    font-size: 32px;
    font-weight: 700;
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const OuterContainer = styled.div``