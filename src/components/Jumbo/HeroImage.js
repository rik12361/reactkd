import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MenuData from '../Jumbo/data/HeaderMenuBar.json'

function HeroImage() {
    return (
        <div>
            <Hero src='/images/jumbo/Homepage-hero.webp' alt='jammer'>
            </Hero>
        </div>
    )
}

export default HeroImage

const Hero = styled.img`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: 5;
`
