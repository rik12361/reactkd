import React from 'react'
import { FaCalendar, FaFacebook, FaPhoneSquareAlt, FaRegCalendar, FaShopify, FaTwitter } from 'react-icons/fa'
import styled
 from 'styled-components'
function FooterContactOptions() {
    return (
        <FooterContactOptionsContainer>
            <FooterContactOptionsInnerContainer className="kd-bever-container">

                <TopLineContainer>
                    <ContactOption>
                        <OptionLink href=''><FaPhoneSquareAlt style={{marginTop:'4px', color:'white', fontSize:'40px', borderRadius:'200%'}}/></OptionLink>
                        <ContactOptionText>
                            <OptionLink href=''><p>Klantenservice</p></OptionLink>
                            <p>Voor hulp, informatie en contact</p>
                        </ContactOptionText>
                    </ContactOption>

                    <ContactOption>
                        <OptionLink href=''><FaShopify style={{marginTop:'4px', color:'white', fontSize:'40px', borderRadius:'200%'}}/></OptionLink>
                        <ContactOptionText>
                            <OptionLink href=''><p>Winkels</p></OptionLink>
                            <p>Laat onze experts je helpen</p>
                        </ContactOptionText>
                    </ContactOption>

                    <ContactOption>
                        <OptionLink href=''><FaCalendar style={{marginTop:'4px', color:'white', fontSize:'40px', borderRadius:'200%'}}/></OptionLink>
                        <ContactOptionText>
                            <OptionLink href=''><p>Winkel op afspraak</p></OptionLink>
                            <p>Persoonlijk advies van een productexpert</p>
                        </ContactOptionText>
                    </ContactOption>
                </TopLineContainer>

                <BottomLineContainer>
                    <ContactOption>
                        <OptionLink href=''><FaTwitter style={{marginTop:'4px', color:'white', fontSize:'40px', borderRadius:'200%'}}/></OptionLink>
                        <ContactOptionText>
                            <OptionLink href=''><p>Twitter</p></OptionLink>
                            <p>Stuur ons een bericht</p>
                        </ContactOptionText>
                    </ContactOption>

                    <ContactOption>
                        <OptionLink href=''><FaFacebook style={{marginTop:'4px', color:'white', fontSize:'40px', borderRadius:'200%'}}/></OptionLink>
                        <ContactOptionText>
                            <OptionLink href=''><p>Facebook</p></OptionLink>
                            <p>Neem contact met ons op</p>
                        </ContactOptionText>
                    </ContactOption>
                </BottomLineContainer>
            </FooterContactOptionsInnerContainer>  
            <BottomLine/>
        </FooterContactOptionsContainer>
    )
}

export default FooterContactOptions

const FooterContactOptionsContainer = styled.div`
    height: 215px;
    width: 100%;
    background: var(--bever-grey);

    hr {
        color: white;
        font-weight: 600;
    }
`

const FooterContactOptionsInnerContainer = styled.div``

const TopLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 0px 36px 0px;
`
const BottomLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 0px 36px 0px;
`

const ContactOption = styled.div`

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 330px;
    height: 52px;
`

const OptionLink = styled.a`
    cursor:pointer;
    &:hover {
        text-decoration: underline;
    }
`

const ContactOptionText = styled.div`

    margin-left: 16px;

    p {
        color: white;
        line-height: 1.25em;
        margin: 0px;
        font-size: 22px;
    }

    p:nth-child(1) {
        font-size: 22px;
        text-decoration: underline;
    }

    p:nth-child(2) {
        font-size: 14px;        
    }
`

const BottomLine = styled.div`
    width: 100%;
    height: 0px;
    border-style: solid;
    border-top-color: transparent;
    border-bottom-color: rgba(255,255,255,0.4);
`

