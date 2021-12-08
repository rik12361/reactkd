import React from 'react'
import { FaApple, FaChevronRight, FaGooglePlay } from 'react-icons/fa'
import styled from 'styled-components'
function FooterRightColumn() {
    return (
        <div>
            <RightMiddleColumn>
            <h4>Download onze app</h4>
            <p>Met de Jumbo app doe je nog vlotter boodschappen. Met de service, ruime keuze en laagsteprijsgarantie die je van ons gewend bent!</p>
            <AppLink href="#"><span>Lees meer over de App</span><FaChevronRight></FaChevronRight></AppLink>

            <AppContainer>
            <AppLink href="#">
                <StoreContainer>
                <FaApple style={{width:'30px', height:'30px'}}/>
                <div>
                    <p>Download in the</p>
                    <p>App Store</p>
                </div>
                </StoreContainer>
            </AppLink>
            <AppLink href="#">
                <StoreContainer>
                <FaGooglePlay style={{width:'30px', height:'30px'}}/>
                <div>
                    <p>Ontdek het in</p>
                    <p>Google Play</p>
                </div>
                </StoreContainer>
            </AppLink>
            </AppContainer>
            </RightMiddleColumn>
        </div>
    )
}

export default FooterRightColumn


const RightMiddleColumn = styled.div`
    width: 400px;
    margin: 0px 0px 0px 90px;
    button {
        width: 200px;
        height: 40px;
        :hover {
            background: green;
        }
    }
    h4 {
        font-size: 22px;
        font-weight: 600;
        color: white;
    }

    p {
        color: white;
    }
    @media (max-width: 1536px) {margin: 0px 0px 0px 90px; width: 380px} 
    @media (max-width: 1280px) {padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px; width: 360px;}
    @media (max-width: 1100px) {padding: 0px 0px 0px 0px; margin: 16px 0px 0px 0px; width: 960px;}
`    

const AppContainer = styled.div`
    margin: 16px 0px 0px 0px;
    display: flex;
    justify-content: center;
    width: 220px;
    padding: 12px 148px 12px 148px;
    border-radius: 1em;
    border: 1px solid white;
    border-spacing: 15px 250px;
    @media (max-width: 1100px) {margin: 32px 0px 8px 0px;}
`
const StoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 130px;
    p {
        margin: 0px;
        padding: 0px;
        line-height: 12px;
    }
    p:nth-child(1) {
        font-size: 8px;
    }
    p:nth-child(2) {
        font-size: 18px;        
    }

    :hover {
        color: black;
        background-color: white;
    }
    :hover div p {
        color: black;
        background-color: white;
    }
`


const Apple = styled.img `
    width: 200px;
    height:60px;
`

const AppLink = styled.a`
    color: white;
    /* :hover {
        color: green;
        background-color: green;
    } */
    span {
        padding: 0px 4px 0px 0px;
    }
`

const RightColumn = styled.div`
`
const MidRightColumn = styled.div`
`
 /* @media (max-width: 7681px) {} 
    @media (max-width: 3840px) {} 
    @media (max-width: 2560px) {} 
    @media (max-width: 1920px) {} 
    @media (max-width: 1536px) {} 
    @media (max-width: 1280px) {} 
    @media (max-width: 1100px) {} 
    @media (max-width: 980px) {} 
    @media (max-width: 768px) {} 
    @media (max-width: 640px) {} 
    @media (max-width: 480px) {} 
    @media (max-width: 384) {}  */