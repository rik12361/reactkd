import React from 'react'
import styled from 'styled-components'

function Logo() {
    return (
        <LogoContainer>
          <Img src='/images/bever/Bever.png' alt='jammer'></Img>
        </LogoContainer>
    )}

export default Logo

const LogoContainer = styled.div`
    width: 230px;
    height: 42px;
    padding: 0px 36px 0px 0px;

`
const Img = styled.img`
    width: 100%;
    height: 100%;
`




