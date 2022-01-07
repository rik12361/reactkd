import React from 'react'
import styled from 'styled-components'

function HeroImage({sWidth}) {
    
    return (
        <HeroContainer className='kd-Jumbo-container'>
            <HeroImgContainer><Hero src='https://www.jumbo.com/INTERSHOP/static/WFS/Jumbo-Grocery-Site/-/Jumbo-Grocery/nl_NL/CMS/Images/2022/Homepage/01/Homepage-hero-L-week-01-Gratis-Eentje-Extra.jpg' alt='jammer'></Hero></HeroImgContainer>
            <HeroButton href="#" className='kd-jumbo-button'>Bekijk de producten</HeroButton>
            <CardContainer>
                {sWidth<=640? <CardGroup>
                        <Cardbox><ImgLink href="/jumbo.com/aanbiedingen"><CardImg src="/images/jumbo/Actual 1.webp" alt='jammer'></CardImg></ImgLink><span>Aanbiedingen</span></Cardbox>
                        <Cardbox><ImgLink href="#"><CardImg src="/images/jumbo/Actual 2.webp" alt='jammer'></CardImg></ImgLink><span>Recepten</span></Cardbox>
                        <Cardbox><ImgLink href="#"><CardImg src="/images/jumbo/Week-01-Assortiment-S-v2.webp" alt='jammer'></CardImg></ImgLink><span>Assortiment</span></Cardbox>
                    </CardGroup> :
                    <CardGroup>
                        <Cardbox><ImgLink href="/jumbo.com/aanbiedingen"><CardImg src="/images/jumbo/Toptaak-1.png" alt='jammer'></CardImg></ImgLink></Cardbox>
                        <Cardbox><ImgLink href="#"><CardImg src="/images/jumbo/Toptaak-2.webp" alt='jammer'></CardImg></ImgLink></Cardbox>
                        <Cardbox><ImgLink href="#"><CardImg src="/images/jumbo/Toptaak-3.webp" alt='jammer'></CardImg></ImgLink></Cardbox>
                    </CardGroup>}
            </CardContainer>
        </HeroContainer>
    )
}

export default HeroImage

const ImgLink = styled.a` 
`
const HeroContainer = styled.div`
    display: block;
    z-index: 1;
    position: relative;
    width: 100%;
    height: auto;
    top: 131px;

    @media (max-width: 960px) {top: 100px;}    
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const HeroImgContainer = styled.div`
    /* width: 1920;
    height: 800px; */
`

const Hero = styled.img`
    position: relative;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;

    @media (max-width: 960px) {transform: scale(1.4);}
    @media (max-width: 768px) {transform: scale(1.2);} 
    @media (max-width: 640px) {transform: scale(2.4);} 
    @media (max-width: 480px) {transform: scale(1.3);} 
    @media (max-width: 384) {transform: scale(1.3);} 

`
const CardGroup = styled.div`
    position: relative;
    top: calc(-3vh + 10px);
    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
    list-style-type: none;
    margin: 0px;
    padding: 0px;

    @media (max-width: 640px) { 

        div:nth-child(1) {
            border-radius: 0.5em 0em 0em 0.5em;
        }
        div:nth-child(2) {
            border-radius: 0.0em 0em 0em 0.0em;
        }
        div:nth-child(3) {
            border-radius: 0.0em 0.5em 0.5em 0em;
        }
    }

    @media (max-width: 7681px) { top: calc(-8vh -80px);} 
    @media (max-width: 3840px) { top: calc(-7vh - 20px);} 
    @media (max-width: 2560px) { top: calc(-9vh - 20px);} 
    @media (max-width: 2560px) { top: calc(-9vh - 20px);} 
    @media (max-width: 1920px) { top: calc(-10vh - 20px);} 
    @media (max-width: 1100px) { top: calc(-12vh - 20px);} 
    @media (max-width: 960px) { top: calc(2vh - 20px);} 
    @media (max-width: 768px) { top: calc(-4vh - 20px);} 
    @media (max-width: 640px) { top: calc(38vh - 20px);} 
    @media (max-width: 480px) { top: calc(8vh - 20px);} 

`

const Cardbox = styled.div`
    height: 225px;
    width: 500px;
    padding: 0px;
    background-color: white;

    /* border: 1px solid var(--jumbo-grey); */
    /* border-radius: 1em; */
    margin: 16px;

    @media (max-width: 1536px) {width: 470px; height: 213px;} 
    @media (max-width: 1280px) {width: 393px; height: 177px;}    
    @media (max-width: 1100px) {width: 320px; height: 151px} 
    @media (max-width: 960px) {width: 300px; height: 138px;margin:10px} 
    @media (max-width: 768px) {width: 220px; height: 100px;margin:8px} 
    @media (max-width: 640px) {
        width: 180px; 
        height: 180px;
        display: block;
        border: 0.1px solid rgb(200,200,200);
        margin: 0px;    
    }
    @media (max-width: 480px) {
        width: 140px; 
        height: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0.1px solid rgb(200,200,200);
        margin: 0px;    
    }
    @media (max-width: 384px) {
        width: 120px; 
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0.1px solid rgb(200,200,200);
        margin: 0px;    
    }


    /* @media (max-width: 480px) {width: 170px; height: 90px;margin:0px;}  */
    @media (max-width: 384) {width: 170px; height: 90px;margin:0px;} 

`

const CardImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0px;
    border: none;
    @media (max-width: 640px) {
        width: 80%;
        height: 80%;
    }    

`

const HeroButton = styled.a`
    font-weight: 700;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(36vh + 10px);
    left: 50%;
    transform: translate(-100px, 0px);
    width: 200px;
    margin: 0%;
    z-index: 10;
    
    &:hover {
        border: 1px solid black;
    }

    @media (max-width: 1920px) {top: calc(36vh + 10px);}
    @media (max-width: 1536px) {top: calc(40vh + 10px);} 
    @media (max-width: 1280px) {top: calc(38vh + 10px);} 
    @media (max-width: 1090px) {top: calc(36vh + 10px);} 
    @media (max-width: 960px) {top: calc(42vh + 10px);}
    @media (max-width: 768px) {top: calc(38vh + 10px);}
    @media (max-width: 640px) {top: calc(74vh + 10px);font-size:14px;height:32px}
    @media (max-width: 480px) {top: calc(38vh + 10px);font-size:14px;height:32px}
    @media (max-width: 384px) {top: calc(32vh + 10px);font-size:14px;height:32px}

    /* @media (max-width: 7681px) {} 
    @media (max-width: 3840px) {} 
    @media (max-width: 2560px) {} 
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

`


// @media (max-width: 7681px) {
// } 

// @media (max-width: 3840px) {
// } 

// @media (max-width: 2560px) {
// } 

// @media (max-width: 2560px) {
// } 

// @media (max-width: 1920px) {
// } 

// @media (max-width: 1536px) {
// } 

// @media (max-width: 1280px) {
// } 

// @media (max-width: 1100px) {
// } 

// @media (max-width: 980px) {
// } 

// @media (max-width: 768px) {
// } 

// @media (max-width: 640px) {
// } 

// @media (max-width: 480px) {
// } 

// @media (max-width: 384) {
// } 



// @media (max-width: 1536px) {} 
// @media (max-width: 1280px) {} 
// @media (max-width: 1100px) {} 
// @media (max-width: 980px) {} 
// @media (max-width: 768px) {} 
// @media (max-width: 640px) {} 
// @media (max-width: 480px) {} 
// @media (max-width: 384) {} 

