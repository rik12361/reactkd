import React from 'react'
import styled from 'styled-components'

function HowToSaveMoney() {
    return (
        <div>
            <div className='kd-Jumbo-container'>
                <BlockHeader>Zo ben je <span>voordeliger</span> uit</BlockHeader>

                <HowToSaveButtonContainer>
                   <HowToSaveButton className='kd-jumbo-button' href="#">Extra goedkoop seizoen</HowToSaveButton>
                   <HowToSaveButton className='kd-jumbo-button' href="#">Extra goedkoop week</HowToSaveButton>
                   <HowToSaveButton className='kd-jumbo-button' href="#">Bieraanbiedingen</HowToSaveButton>
                   <HowToSaveButton className='kd-jumbo-button' href="#">20% gebakskorting</HowToSaveButton>
                   <HowToSaveButton className='kd-jumbo-button' href="#">Geen bestelkosten</HowToSaveButton>
                   <HowToSaveButton className='kd-jumbo-button' href="#">Altijd lage prijs</HowToSaveButton>
                </HowToSaveButtonContainer>
            </div>
        </div>
    )
}

export default HowToSaveMoney


const HowToSaveButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


    @media (max-width: 640px) {
        justify-content: flex-start;
        flex-wrap: wrap;        
    } 

    @media (max-width: 640px) { 
        justify-content: flex-start;
    } 

`

const HowToSaveButton = styled.a`
    display: inline;
    margin: 20px 5px;
    padding: 0px 20px;
    height: 30px;
    text-align: center;
    border: 1px solid grey;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }

    @media (max-width: 1100px) { margin-top: 0px; } 

`

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 22px;
    span {
        font-size: 28px;
        font-weight: 900;
        margin: 0px 4px;
    }

    @media (max-width: 1100px) { margin-top: 60px; } 
    @media (max-width: 960px) { margin-top: 100px; } 
    @media (max-width: 768px) { margin-top: 80px;} 
    @media (max-width: 640px) { margin-top: 70px;} 
    @media (max-width: 480px) { margin-top: 50px;} 
    @media (max-width: 384px) { margin-top: 30px;} 

    @media (max-width: 640px) { 
        justify-content: flex-start;
    } 

`