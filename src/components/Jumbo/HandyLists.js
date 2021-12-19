import React from 'react'
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components'
import Handies from './Handies.json'

function HandyLists() {
    const rik = () => {
        console.log(Handies);
    }
    rik();
    return (
        <div className='kd-Jumbo-container'>
            <BlockHeader>Ontdek onze <span>handige lijstjes</span></BlockHeader>

            <HandyFlex>
             {Handies.map((handy) => (
                    <HandyContainer key={handy.id}> 
                        <ImgContainer>
                            <ImgLink href='#'>
                                <HandyImg src={handy.handyImg} alt='jammer'/>
                            </ImgLink>
                        </ImgContainer>
                        <ImgLink href="#">{handy.handyTitle}</ImgLink>
                        <p>{handy.handyCheck}<FaCheck style={{color: 'lightgreen', background: '', paddingLeft: '4px', fontWeigth: '900', fontSize: '12px'}}></FaCheck></p>
                    </HandyContainer>
                    ))}
            </HandyFlex>
        </div>
    )
}

export default HandyLists

const HandyFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const BlockHeader = styled.div`
    font-size: 28px;
    margin-bottom: 22px;
    span {
        font-size: 28px;
        font-weight: 900;
    }

    @media (max-width: 1100px) { margin-top: 60px; } 
    @media (max-width: 960px) { margin-top: 100px; } 
    @media (max-width: 768px) { margin-top: 80px;} 
    @media (max-width: 640px) { margin-top: 70px;} 
    @media (max-width: 480px) { margin-top: 50px;} 
    @media (max-width: 384px) { margin-top: 30px;} 
`
const ImgContainer = styled.div`
    height: 240px;
    width: 220px;
    margin-right: 12px;
`
const ImgLink = styled.a`
    color: black;
    font-size: 16px;
    :hover {
        color: black;
        text-decoration: underline;
    }
`
const HandyImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 5%;

`
const HandyContainer = styled.div`
p {
    font-size: 12px;
    color: gray;
}
`