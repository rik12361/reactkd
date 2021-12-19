import React from 'react'
import styled from 'styled-components'
import { FaChevronRight } from 'react-icons/fa'

function HeroBlock() {
    return (
        <HeroContainer>
            <HeroInnerContainer className='kd-bever-container'>
                <HeroImgContainer>
                    <Img src='/images/bever/Hero.png' alt='jammer'/>
                    <HeroLinkGroup>
                        <HeroLink>Shop dames <FaChevronRight/></HeroLink>
                        <HeroLink>Shop heren <FaChevronRight/></HeroLink>
                        <HeroLink>Shop uitrusting <FaChevronRight/></HeroLink>
                    </HeroLinkGroup>
                </HeroImgContainer>
            </HeroInnerContainer>
        </HeroContainer>
    )
}

export default HeroBlock

const HeroLinkGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 80px;
`
const HeroLink = styled.div`
    text-align: center;
    margin: 18px 20px;
    padding-top: 6px;
    width: 200px;
    height: 40px;
    background: white;
    color: var(--bever-blue);
    border: 1px solid var(--bever-blue);
    border-radius: 0.3em;

    &:hover {
        background: var(--bever-blue);
        color: white;
    }
`

const HeroContainer = styled.a`
    background: var(--bever-light-grey);

`
const HeroInnerContainer = styled.div`
    position: relative;
`

const HeroImgContainer = styled.div`
    width: 100%;
    height: 419px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
