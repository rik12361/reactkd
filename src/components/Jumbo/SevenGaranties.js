import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'

function SevenGaranties() {
    return (
        <div>
            <div className='kd-Jumbo-container'>
                <BlockHeader>
                    <ColumnWrapper>
                        <p><span>Hallo Jumbo’s 7 Zekerheden</span></p>
                        <p>Da’s leuk boodschappen doen</p>
                    </ColumnWrapper>
                </BlockHeader>
                <GarantyContainer>
                    <GarantyWrapper href="#">
                        <p>1</p>
                        <p>Euro's goedkoper <FaChevronRight/></p>
                    </GarantyWrapper>
                    <GarantyWrapper href="#">
                        <p>2</p>
                        <p>Service met een glimlach<FaChevronRight/></p>
                    </GarantyWrapper>
                    <GarantyWrapper href="#">
                        <p>3</p>
                        <p>Voor al je boodschappen<FaChevronRight/></p>
                    </GarantyWrapper>
                    <GarantyWrapper href="#">
                        <p>4</p>
                        <p>Vers is ook echt vers<FaChevronRight/></p>
                    </GarantyWrapper>
                    <GarantyWrapper href="#">
                        <p>5</p>
                        <p>Vlot winkelen<FaChevronRight/></p>
                    </GarantyWrapper>
                    <GarantyWrapper href="#">
                        <p>6</p>
                        <p>Niet goed? Geld terug!<FaChevronRight/></p>
                    </GarantyWrapper>
                    <GarantyWrapper href="#">
                        <p>7</p>
                        <p>Jouw wensen staan centraal<FaChevronRight/></p>
                    </GarantyWrapper>
                </GarantyContainer>
           </div>
        </div>
    )
}

export default SevenGaranties

const GarantyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: flex-start;
     } 
`

const GarantyWrapper = styled.a`

    p:nth-child(1) {
        text-align: center;
        font-size: 32px;
        font-weight: 900;
        color: var(--jumbo-yellow);
        @media (max-width: 1100px) {
            display: inline;
        }
    }

    p:nth-child(2) {
        @media (max-width: 1100px) {
            display: inline;
            margin-left: 12px;
        }
    }

    color: black;
    :hover {
        color: black;
    }
`

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 8px;
    @media (max-width: 1100px) { justify-content: flex-start } 

`
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 28px;
        font-weight: 400;
        line-height: 36px;
        margin: 0px;
    }

    span {
        font-size: 28px;
        font-weight: 900;
        margin-right: 4px;
        line-height: 36px;
    }

    @media (max-width: 1100px) { margin-top: 60px; } 
    @media (max-width: 960px) { margin-top: 100px; } 
    @media (max-width: 768px) { margin-top: 80px;} 
    @media (max-width: 640px) { margin-top: 70px;} 
    @media (max-width: 480px) { margin-top: 50px;} 
    @media (max-width: 384px) { margin-top: 30px;} 
`