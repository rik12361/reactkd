import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'

function ExtraPromo() {
    return (
        <div>
                <div className='kd-Jumbo-container'>
                    <BlockHeader>Alles voor een <span>Heerlijke avond</span></BlockHeader>

                    <ExtraPromoCentralizer>
                    <ExtraPromoContainer>
                        <ExtraPromoLink href='#'>
                            <ExtraImgContainer>
                                <ExtraImg src='https://www.jumbo.com/dam/homepage/2021/47/ingangen/Home-47-ingang-1.jpg' alt='jammer'></ExtraImg>
                                <p>Gourmet<FaChevronRight/></p>
                            </ExtraImgContainer>
                        </ExtraPromoLink>
                        <ExtraPromoLink href='#'>
                            <ExtraImgContainer>
                                <ExtraImg src='https://www.jumbo.com/dam/homepage/2021/47/ingangen/Home-47-ingang-2.jpg' alt='jammer'></ExtraImg>
                                <p>Kaasfondue<FaChevronRight/></p>
                            </ExtraImgContainer>
                        </ExtraPromoLink>
                        <ExtraPromoLink href='#'>
                            <ExtraImgContainer>
                                <ExtraImg src='https://www.jumbo.com/dam/homepage/2021/47/ingangen/Home-47-ingang-3.jpg' alt='jammer'></ExtraImg>
                                <p>Borrelhapjes<FaChevronRight/></p>
                            </ExtraImgContainer>
                        </ExtraPromoLink>
                        <ExtraPromoLink href='#'>
                            <ExtraImgContainer>
                                <ExtraImg src='https://www.jumbo.com/dam/homepage/2021/47/ingangen/Home-47-ingang-4.jpg' alt='jammer'></ExtraImg>
                                <p>Chocolademelk<FaChevronRight/></p>
                            </ExtraImgContainer>
                        </ExtraPromoLink>
                        <ExtraPromoLink href='#'>
                            <ExtraImgContainer>
                                <ExtraImg src='https://www.jumbo.com/dam/homepage/2021/47/ingangen/Home-47-ingang-5.jpg' alt='jammer'></ExtraImg>
                                <p>Pepernoten<FaChevronRight/></p>
                            </ExtraImgContainer>
                        </ExtraPromoLink>
                        <ExtraPromoLink href='#'>
                            <ExtraImgContainer>
                                <ExtraImg src='https://www.jumbo.com/dam/homepage/2021/44/ingangen/Home-44-ingang-6.jpg' alt='jammer'></ExtraImg>
                                <p>Hallo magazine<FaChevronRight/></p>
                            </ExtraImgContainer>
                        </ExtraPromoLink>
                    </ExtraPromoContainer>
                    </ExtraPromoCentralizer>
                </div>
        </div>
    )
}

export default ExtraPromo

const ExtraPromoCentralizer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ExtraPromoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
` 
const ExtraImgContainer = styled.div`
    width: 220px;
    height: 240px;
    padding: 12px 12px 0px 0px;
    p {
        font-weight:500;
        padding: 4px 0px 0px 0px;
    }
`
const ExtraImg = styled.img`
    width: 100%;
    height:100%;
    border-radius: 5%;
`

const ExtraPromoLink = styled.a`
    width: 220px;
    height: 290px;
    display: block;
    color: black;
    :hover {
        color: black;
    }
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