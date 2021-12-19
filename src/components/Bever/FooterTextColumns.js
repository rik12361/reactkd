import React from 'react'
import styled from 'styled-components'

function FooterTextColumns() {
    return (
        <FooterTextColumnContainer>
            <FooterTextColumnInnerContainer className='kd-bever-container'>
                <FooterColumnContainer>
                    <FooterTextColumnContainer>
                        <FooterMenuLink href=''><span>KLANTENSERVICE</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Bestellen & betalen</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Bezorgen & afhalen</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Retourneren & ruilen</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Services</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Garantie & reparatie</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Actievoorwaarden</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Klachten</span></FooterMenuLink>
                    </FooterTextColumnContainer>

                    <FooterTextColumnContainer>
                        <FooterMenuLink href=''><span>OVER BEVER</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Duurzaam</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Contactgegevens</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Vacatures</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Partners</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Bever Blog</span></FooterMenuLink>
                    </FooterTextColumnContainer>

                    <FooterTextColumnContainer>
                        <FooterMenuLink href=''><span>WINKELEN</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Click & collect</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Advies & inspiratie</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Winkelen op afspraak</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Buitenvriend voordeel</span></FooterMenuLink>
                    </FooterTextColumnContainer>

                    <FooterTextColumnContainer>
                        <FooterMenuLink href=''><span>ONZE WINKELS</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Corona-maatregelen</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Alle winkels</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Openingstijden</span></FooterMenuLink>
                        <FooterMenuLink href=''><span>Zakelijk</span></FooterMenuLink>
                    </FooterTextColumnContainer>
                </FooterColumnContainer>
                <BottomLine></BottomLine>
            </FooterTextColumnInnerContainer>
        </FooterTextColumnContainer>
    )
}

export default FooterTextColumns

const FooterTextColumnContainer = styled.div`
    width: 330px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const FooterTextColumnInnerContainer = styled.div`
`

const FooterMenuLink = styled.a`

    span {
        color: white;
    }

    &:hover {
        color: white;
        text-decoration: underline;
    }

`

const FooterColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const BottomLine = styled.div`
    position: relative;
    margin: 2px 0px 0px 0px;
    width: 100%;
    height: 4px;
    border-style: solid;
    border-top-color: transparent;
    border-bottom-color: rgba(255,255,255,0.4);
`
