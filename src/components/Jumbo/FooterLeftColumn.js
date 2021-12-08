import React from 'react'
import { FaChevronRight, FaFacebook, FaPhone, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import FooterContactOptions from './FooterContactOptions'

function FooterLeftColumn({sWidth}) {
    return (
        <div>           
            <LeftColumnContainer>
            <WeHelpenImgContainer>
                <WeHelpenImg src='https://jumbo.com/assets/dist/prod/assets/images/89d94da74e4c49e7fc3abbf235024159.png' alt='jammer'></WeHelpenImg>
            </WeHelpenImgContainer>
            <LeftColumn>
                {sWidth <1100? 
                    <WeHelpenTextContainerMobile>
                        <div>
                            <h4>We helpen je graag!</h4>
                            <p>Heb je een vraag of een klacht? Laat het ons weten via het <ContactForm href='#'>contactformulier</ContactForm> of:</p>
                            <Tip>
                                <span>Tip!</span><FAQLink href="#">Bekijk veelgestelde vragen</FAQLink><FaChevronRight></FaChevronRight>
                            </Tip>
                        </div>
                        <FooterContactOptions/>
                    </WeHelpenTextContainerMobile>
                :             
                    <WeHelpenTextContainer>
                        <h4>We helpen je graag!</h4>
                        <p>Heb je een vraag of een klacht? Laat het ons weten via het <ContactForm href='#'>contactformulier</ContactForm> of:</p>
                        <FooterContactOptions/>
                        <Tip>
                        <span>Tip!</span><FAQLink href="#">Bekijk veelgestelde vragen</FAQLink><FaChevronRight></FaChevronRight>
                        </Tip>
                     </WeHelpenTextContainer>
                }
            </LeftColumn>
            </LeftColumnContainer>
        </div>
    )
}
export default FooterLeftColumn
//https://www.pelvitec.nl/site/urologie/meatus-dilatatie/
//https://www.fvdvooren.nl/Search.aspx?product=catheter


const WeHelpenTextContainer = styled.div`
    width: 400px;
    padding: 0px 30px 0px 44px;
    color: white;
    h4 {
        font-size: 22px;
        font-weight: 600;
    }
    button:hover {
        background-color: green;
    }
    @media (max-width: 1536px) {padding: 0px 20px 0px 34px;width: 380px;} 
    @media (max-width: 1280px) {padding: 0px 20px 0px 30px;width: 370px;} 
`

const WeHelpenTextContainerMobile = styled(WeHelpenTextContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 800px;
`


const LeftColumnContainer = styled.div`
    display: flex;
    flex-direction: ro;
    padding: 0px 0px 0px 0px;
`
const LeftColumn = styled.div`
    display: flex;
    flex-direction: row;
`
const WeHelpenImgContainer = styled.div`
    margin: -32px 0px 0px 0px;
    width: 85px;
    height: 110px;
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