import React from 'react'
import { FaChevronRight, FaFacebook, FaPhone, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

function FooterContactOptions() {
    return (
        <div>           
            <LeftColumnContainer>
                <h4>We helpen je graag!</h4>

                <ContactOption>
                <div>
                    <FaFacebook style={{fontSize: '22px'}}/>
                </div>
                <div>
                    <p>Facebook</p>
                    <p>Openingsuren: 8.00 - 20.00 uur (ma. t/m zo.)</p>
                </div>
                </ContactOption>
                <ContactOption>
                <div>
                    <FaTwitter style={{fontSize: '22px'}}/>
                </div>
                <div>
                    <p>Twitter</p>
                    <p>Openingsuren: 8.00 - 20.00 uur (ma. t/m zo.)</p>
                </div>
                </ContactOption>
                <ContactOption>
                <div>
                    <FaPhone style={{fontSize: '22px'}}/>
                </div>
                <div>
                    <p>Telefoonnummer: 0800 022 01 61</p>
                    <p>Openingsuren: 8.00 - 20.00 uur (ma. t/m zo.)</p>
                </div>
                </ContactOption>
            </LeftColumnContainer>
        </div>
    )
}
export default FooterContactOptions
//https://www.pelvitec.nl/site/urologie/meatus-dilatatie/
//https://www.fvdvooren.nl/Search.aspx?product=catheter


const LeftColumnContainer = styled.div`
    padding: 0px 0px 0px 0px;
    color: white;
    h4 {color: white}
`
const ContactOption = styled.div`
    display: flex;
    width: 280px;
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