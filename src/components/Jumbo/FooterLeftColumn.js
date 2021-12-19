import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'
import FooterContactOptions from './FooterContactOptions'

function FooterLeftColumn({sWidth}) {
    return (
            <LeftColumnContainer>
                {sWidth <1100? 
                    <WeHelpenContainerMobile className='kd-Jumbo-container'> 
                        <WeHelpenImgContainer>
                            <WeHelpenImg src='https://jumbo.com/assets/dist/prod/assets/images/89d94da74e4c49e7fc3abbf235024159.png' alt='jammer'></WeHelpenImg>
                        </WeHelpenImgContainer>
                        <WeHelpenGraagTextAndOptionsWrapper>
                            <WeHelpenGraagTextContainer>
                                <h4>We helpen je graag!</h4>
                                <p>Heb je een vraag of een klacht? Laat het ons weten via het <ContactForm href='#'>contactformulier</ContactForm> of:</p>
                                <Tip>
                                    <span>Tip!</span><FAQLink href="#">Bekijk veelgestelde vragen</FAQLink><FaChevronRight></FaChevronRight>
                                </Tip>
                            </WeHelpenGraagTextContainer>
                            <FooterContactOptions/>
                        </WeHelpenGraagTextAndOptionsWrapper>
                    </WeHelpenContainerMobile>
                :             
                    <WeHelpenContainer>
                        <WeHelpenImgContainer>
                            <WeHelpenImg src='https://jumbo.com/assets/dist/prod/assets/images/89d94da74e4c49e7fc3abbf235024159.png' alt='jammer'></WeHelpenImg>
                        </WeHelpenImgContainer>
                        <WeHelpenGraagWrapper>
                            <WeHelpenGraagTextContainer>
                                <h4>We helpen je graag!</h4>
                                <p>Heb je een vraag of een klacht? Laat het ons weten via het <ContactForm href='#'>contactformulier</ContactForm> of:</p>
                            </WeHelpenGraagTextContainer>
                            <FooterContactOptions/>
                            <Tip>
                               <span>Tip!</span><FAQLink href="#">Bekijk veelgestelde vragen</FAQLink><FaChevronRight></FaChevronRight>
                            </Tip>
                        </WeHelpenGraagWrapper>
                     </WeHelpenContainer>
                }
            </LeftColumnContainer>
    )
}
export default FooterLeftColumn
//https://www.pelvitec.nl/site/urologie/meatus-dilatatie/
//https://www.fvdvooren.nl/Search.aspx?product=catheter

const LeftColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0px;
    width: 100%;
    @media (max-width: 1100px) {background: black;} 
    @media (max-width: 960px) {background: black;margin-top:2vh} 
    @media (max-width: 640px) {background: black;margin-top:24vh} 
    @media (max-width: 480px) {background: black;margin-top:32vh} 
    @media (max-width: 384px) {background: black;margin-top:40vh} 
`

const WeHelpenContainerMobile = styled.div`
    position: relative;
    padding: 10px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    height: 200px;
    h4 {
        font-size: 20px;
        font-weight: 600;
    }
    @media (max-width: 1100px) {margin-top:40px} 
    @media (max-width: 640px) {flex-direction:row;height: 280px;padding:0px;margin-top:20px} 
    @media (max-width: 480px) {flex-direction:row;height: 320px;padding:0px;margin-top:20px} 
    `

const WeHelpenGraagTextAndOptionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 640px) {flex-direction: column;} 
    @media (max-width: 480px) {margin-top: 60px;} 
`

const WeHelpenGraagTextContainer = styled.div`
    margin: 0px 0px 0px 0px;
    width: 300px;
    @media (max-width: 1100px) {width:450px;margin-left:40px;} 
    @media (max-width: 960px) {width:350px;margin-left:40px;} 
    @media (max-width: 768px) {width:330px;margin-left:20px;} 
`
const WeHelpenContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 540px;
    height: 400px;
    padding: 0px 30px 0px 44px;
    color: white;
    h4 {
        font-size: 22px;
        font-weight: 600;
    }
    button:hover {
        background-color: green;
    }
    @media (max-width: 1280px) {padding: 0px 0px 0px 0px;width: 440px} 
 
`
const WeHelpenGraagWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 40px;
`

const WeHelpenImgContainer = styled.div`
    width: 85px;
    height: 110px;
    @media (max-width: 1100px) {margin: 0px 20px 0px 0px;} 
    @media (max-width: 960px) {width:100px;height:125px;margin-left:20px;} 
    @media (max-width: 480px) {position: absolute; top: -100px;left:40vw} 
`

const WeHelpenImg = styled.img`
    width: 100%;
    height: 100%;
`

const FAQLink = styled.a`
    color: white;
    :hover {
        color: white;
        text-decoration: underline;
    }
`

const Tip = styled.div`
    span:nth-child(1) {
        font-family: serif;
        font-style: italic;
        font-weight: 700;
        padding-right: 4px;
    }
    span:nth-child(2) {
        padding-right: 4px;
    }
`

const ContactForm = styled.a`
    color: white;
    text-decoration: underline;
    :active {
        color: white;
        text-decoration: none;

    }
    &:hover {
        color: white;
        text-decoration: none;
    }
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