import React,{useState} from 'react'
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

function Conditions() {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <ConditionsOuterContainer className='kd-Jumbo-container'>
            <ConditionsInnerContainer>
                <ConditionsToggle onClick={() => setShowDropDown(!showDropDown)}><span>Bekijk de actievoorwaarden</span>
                <FaChevronDown style={{transform: showDropDown? 'rotate(180deg)': '', transition: 'all 250ms ease'}}></FaChevronDown></ConditionsToggle>
                    <ConditionsDisplayContainer style={{
                        display:showDropDown? 'block' : 'none',
                        opacity:showDropDown?'100%': '0%',
                        height:showDropDown?'580px': '0px', transition: 'all 250ms ease'
                        }}>
                    <ConditionsText>
                        <p>2 halen, 1 betalen: 50% korting op de totaalprijs van 2 producten</p>
                        <p>2e halve prijs: 25% korting op de totaalprijs van 2 producten</p>
                        <p>2+1 gratis: 33,34% korting op de totaalprijs van 3 producten</p>
                        <p>3+1 gratis: 25% korting op de totaalprijs van 4 producten</p>
                        <p>Korting wordt aan de kassa verrekend</p>
                    </ConditionsText>
                    <ConditionsText>
                        <p>Voor alle aanbiedingen geldt maximaal 4 dezelfde aanbiedingen per klant per bezoek (bijv. een 3+1 aanbieding = vier producten = één aanbieding), tenzij anders aangegeven. Korting wordt aan de kassa of bij ophalen/bezorgen van de boodschappen verrekend. Aanbiedingen met een gratis product (bijv. 2+1 gratis) of een tweede product voor de halve prijs, hebben betrekking op dat gratis product respectievelijk op het tweede product voor de helft van de prijs en niet op de eindprijs. Acties gelden uitsluitend voor in de winkel aanwezige varianten, zolang de voorraad strekt.</p>
                    </ConditionsText>

                    <ConditionsText>
                        <p>Aanbiedingen van alcoholhoudende dranken kunnen op basis van gemeentelijke verordeningen in de betreffende winkels niet of in gewijzigde vorm gelden. In geval van beperkte beschikbaarheid en/of leverbaarheid van een of meerdere van de producten van een aanbieding, zal Jumbo genoodzaakt zijn de aanbieding tussentijds aan te passen of te staken. Prijswijzigingen, fouten en uitverkocht voorbehouden.</p>
                    </ConditionsText>

                    <ImgContainer>
                        <Img src="https://www.jumbo.com/aanbiedingen/_nuxt/img/NIX_18_logo.3ba5207.png"></Img>
                    </ImgContainer>
                </ConditionsDisplayContainer>
            </ConditionsInnerContainer>
        </ConditionsOuterContainer>
    )
}

export default Conditions

const ConditionsOuterContainer = styled.div``
 
const ConditionsInnerContainer = styled.div`
    width: 100%;
    height: auto;
    span {
        font-weight: 600;
        margin: 0px 24px 0px 0px;
    }
`
const ConditionsToggle = styled.div`

`
const ConditionsText= styled.div`
    margin: 20px 0px;
    width: 600px;
    p {
        font-size: 16px;
        font-weight: 400;
        padding: 0px 0px;
        margin: 0px 0px;
        line-height: 1.3;
        color: black;
    }
`
const ImgContainer = styled.div `
    width:300px;
    height: 150px;
`
const Img = styled.img`
    width: 75%;
    height: 75%;
`

const ConditionsDisplayContainer = styled.div`
    height: 0px;
    opacity: 0%;
`