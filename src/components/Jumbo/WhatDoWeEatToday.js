import React from 'react'
import styled from 'styled-components'

function WhatDoWeEatToday() {
    return (
        <div className='kd-Jumbo-container'>
           <BlockHeader><span>Wat eten</span> we vandaag?</BlockHeader>

           <DinnerCategoriesContainer>
               <DinnerCategoriesButton className='kd-jumbo-button' href="#">Aardappels</DinnerCategoriesButton>
               <DinnerCategoriesButton className='kd-jumbo-button' href="#">Rijst</DinnerCategoriesButton>
               <DinnerCategoriesButton className='kd-jumbo-button' href="#">Pasta</DinnerCategoriesButton>
               <DinnerCategoriesButton className='kd-jumbo-button' href="#">Vlees</DinnerCategoriesButton>
               <DinnerCategoriesButton className='kd-jumbo-button' href="#">Vega</DinnerCategoriesButton>
               <DinnerCategoriesButton className='kd-jumbo-button' href="#">Vis</DinnerCategoriesButton>
           </DinnerCategoriesContainer>

                <ImgRowContainer>
                    <ImgContainer>
                        <CategoryImg src='https://www.jumbo.com/dam/homepage/2021/48/wat-eten-we/WEW-home-48-1-L.jpg' alt='jammer'/>
                    </ImgContainer>
                    <ImgContainer>
                        <CategoryImg src='https://www.jumbo.com/dam/homepage/2021/48/wat-eten-we/WEW-home-48-2-L.jpg' alt='jammer'/>
                    </ImgContainer>
                    <ImgContainer>
                        <CategoryImg src='https://www.jumbo.com/dam/homepage/2021/48/wat-eten-we/WEW-home-48-3-L.jpg' alt='jammer'/>
                    </ImgContainer>
                    <ImgContainer>
                        <CategoryImg src='https://www.jumbo.com/dam/homepage/2021/48/wat-eten-we/WEW-home-48-4-L.jpg' alt='jammer'/>
                    </ImgContainer>
                </ImgRowContainer>

            <WeekDinnerContainer>
               <WeekDinnerButton className='kd-jumbo-button' href="#">Bekijk het weekmenu</WeekDinnerButton>
           </WeekDinnerContainer>

        </div>
    )
}

export default WhatDoWeEatToday


const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 22px;
    span {
        font-size: 28px;
        font-weight: 900;
        margin-right: 4px;
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

const ImgRowContainerCentralizer = styled.div`
`
const ImgRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    @media (max-width: 640px) { 
        justify-content: flex-start;
    } 
`

const ImgContainer = styled.div`
    height: 180px;
    width: 350px;
    margin-right: 12px;
    margin-top: 10px;
`
const ImgLink = styled.a`
    color: black;
    font-size: 16px;
    :hover {
        color: black;
        text-decoration: underline;
    }
`
const CategoryImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 5%;
`

const DinnerCategoriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        justify-content: flex-start;
        flex-wrap: wrap;        
    } 

`

const DinnerCategoriesButton = styled.a`
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
`
const WeekDinnerButton = styled (DinnerCategoriesButton) `
    background: var(--jumbo-yellow);
`
const WeekDinnerContainer = styled (DinnerCategoriesContainer) `
`