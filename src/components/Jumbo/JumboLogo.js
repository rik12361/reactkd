import React from 'react'
import styled from 'styled-components'

function JumboLogo() {
    return (
        <div>
            <Logo src='/images/jumbo/jum-logo.svg' alt='jammer'></Logo>
        </div>
    )
}
export default JumboLogo

const Logo = styled.img`
    width: 149px;
    height: 42px;
    position: relative;
    padding: 0px;
    margin: 0px;
    z-index: 50;

    @media (max-width: 960px) {
        width: 100px;
        height: 28px;
    }

}

`
