import React from 'react';
import styled from 'styled-components';

function ProcessCard({onderwerp, sector}) {
  return <div>
      <ProcessContainer>
          <Subject><LinkRef  href="/">{sector}</LinkRef></Subject>
          <Subject><LinkRef  href="/">{onderwerp}</LinkRef></Subject>
      </ProcessContainer>
  </div>
}

export default ProcessCard;

const ProcessContainer = styled.div`
    width: 400px;
    height: 100px;
    margin: 20px 20px 20px 0px;
    border: 1px solid black;
`

const LinkRef = styled.a`
  color: black;
  &:hover {
      color: black;
      text-decoration: underline;
  }
`
const Subject = styled.div`
    margin: 0px 0px 0px 8px;
    &:nth-child(1) {
        margin: 6px 0px 0px 8px;
    }
    &:nth-child(2) {
        margin: 0px 0px 6px 8px;
    }
`
