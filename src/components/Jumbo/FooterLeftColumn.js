import React from 'react'
import { FaChevronRight, FaFacebook, FaPhone, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

function FooterLeftColumn() {
    return (
        <div>           
            <LeftColumnContainer>
            <LeftColumn>
                    <WeHelpenImgContainer>
                        <WeHelpenImg src='https://jumbo.com/assets/dist/prod/assets/images/89d94da74e4c49e7fc3abbf235024159.png' alt='jammer'></WeHelpenImg>
                   </WeHelpenImgContainer>
                   <WeHelpenTextContainer>

                        <h4>We helpen je graag!</h4>

                        <p>Heb je een vraag of een klacht? Laat het ons weten via het <ContactForm href='#'>contactformulier</ContactForm> of:</p>
                        <ContactOption>
                        <div>
                            <FaFacebook style={{fontSize: '22px'}}/>
                        </div>
                        <div>
                            <p>Facebook</p>
                            <p>Openingsuren:8.00 - 20.00 uur (ma. t/m zo.)</p>
                        </div>
                        </ContactOption>
                        <ContactOption>
                        <div>
                            <FaTwitter style={{fontSize: '22px'}}/>
                        </div>
                        <div>
                            <p>Twitter</p>
                            <p>Openingsuren:8.00 - 20.00 uur (ma. t/m zo.)</p>
                        </div>
                        </ContactOption>
                        <ContactOption>
                        <div>
                            <FaPhone style={{fontSize: '22px'}}/>
                        </div>
                        <div>
                            <p>Telefoonnummer:0800 022 01 61</p>
                            <p>Openingsuren:8.00 - 20.00 uur (ma. t/m zo.)</p>
                        </div>
                        </ContactOption>
                        <Tip>
                        <span>Tip!</span><FAQLink href="#">Bekijk veelgestelde vragen</FAQLink><FaChevronRight></FaChevronRight>
                        </Tip>
                        </WeHelpenTextContainer>
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
`
const LeftColumnContainer = styled.div`
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

const ContactOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    margin: 0px 0px 16px 12px;
    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        margin: 0px;
        flex: 1 1 10%;
    }
    div:nth-child(2) {
        margin: 0px;
        padding: 0px 0px 0px 8px;
        flex: 1 1 90%;
        p:nth-child(1) {
            font-weight: 500;
            margin: 0px;
            line-height: 16px;
        }
        p:nth-child(2) {
            margin: 0px;
            font-size: 10px;
            line-height: 12px;
        }
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

