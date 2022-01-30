import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import AllOffers from './AllOffers';
import ThisWeekOffers from './ThisWeekOffers';
import SeasonOffers from './SeasonOffers'
import NoOrderCosts from './NoOrderCosts'

function OfferMain({sWidth}) {

    const [actualPage, setActualPage] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined)
        { 
                setActualPage(Number(id));
                console.log('/jumbo.com/aanbiedingen/'+id);
                console.log(typeof id);
                console.log(typeof actualPage);
        }
        else
        {
            console.log("In useEffect no page....");
            setActualPage(0);
        }
    }, [id])

    return (
        <OfferMainOuterContainer className='kd-Jumbo-container'>
            <OfferMainInnerContainer>
                {sWidth>=768? <TopText>Aanbiedingen</TopText> : ''}
                <PagerBarContainer>
                    <Link to='' onClick={() => setActualPage(0)}>
                        <PageTabContainer style={{
                                background:actualPage===0? 'white' : 'rgb(227,227,227)',
                                borderTop:actualPage===0? '3px solid var(--jumbo-yellow)' : 'rgb(227,227,227)'
                                }}>
                            {sWidth>=960?
                            <>
                                <ImgContainer>
                                    <Img src='/images/jumbo/extragoedkoop.webp' alt='jammer'></Img>
                                </ImgContainer>
                                <span>Alle aanbiedingen</span> 
                            </>
                            :
                                <span>Alles</span>
                            }
                        </PageTabContainer>
                    </Link>
                    <Link to='' onClick={() => setActualPage(1)}>
                        <PageTabContainer style={{
                                background:actualPage===1? 'white' : 'rgb(227,227,227)',
                                borderTop:actualPage===1? '3px solid var(--jumbo-yellow)' : 'rgb(227,227,227)'
                                }}>
                            {sWidth>=960?
                            <>
                                <ImgContainer>
                                    <Img src='/images/jumbo/extragoedkoop.webp' alt='jammer'></Img>
                                </ImgContainer>
                                <span>Extra goedkoop week</span>
                            </>
                            :
                                <span>Week</span>
                            }
                        </PageTabContainer>
                    </Link>
                    <Link to='' onClick={() => setActualPage(2)}>
                        <PageTabContainer style={{
                                background:actualPage===2? 'white' : 'rgb(227,227,227)',
                                borderTop:actualPage===2? '3px solid var(--jumbo-yellow)' : 'rgb(227,227,227)'
                                }}>
                            {sWidth>=960?
                            <>
                                <ImgContainer>
                                    <Img src='/images/jumbo/extragoedkoop.webp' alt='jammer'></Img>
                                </ImgContainer>
                            <span>Extra goedkoop Seizoen</span>
                            </>
                            :
                                <span>Seizoen</span>
                            }
                        </PageTabContainer>
                    </Link>
                    <Link to='' onClick={() => setActualPage(3)}>
                        <PageTabContainer style={{
                                background:actualPage===3? 'white' : 'rgb(227,227,227)',
                                borderTop:actualPage===3? '3px solid var(--jumbo-yellow)' : 'rgb(227,227,227)'
                                }}>
                            {sWidth>=960?
                            <>
                                <ImgContainer>
                                    <Img src='/images/jumbo/geenbestelkosten.png' alt='jammer'></Img>
                                </ImgContainer>
                                <span>Geen bestelkosten</span>
                            </>
                            :
                                <span>Bestelkosten</span>
                            }
                        </PageTabContainer>
                    </Link>
                </PagerBarContainer>

                {actualPage===0?  <AllOffers/> : '' }
                {actualPage===1?  <ThisWeekOffers/> : '' }
                {actualPage===2?  <SeasonOffers/> : '' }
                {actualPage===3?  <NoOrderCosts sWidth={sWidth}/> : '' }
            </OfferMainInnerContainer>
        </OfferMainOuterContainer>
    )
}

export default OfferMain

const TopText = styled.div`
    padding: 16px 0px;
    font-size: 36px;
    font-weight: 800;
    height: 80px;
`
const PagerBarContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    background: rgb(227,227,227);

    @media (max-width: 960px) {
        background: rgb(255,255,255);
        font-size:12px;

        a:nth-child(4) div
        {
            background: linear-gradient(90deg, rgb(227,227,227),rgb(255,255,255))!important;
            /* color: linear-gradient(90deg, rgb(255,0,0),rgb(255,255,255))!important; */
        }
        a:nth-child(4) span {
            background: -webkit-linear-gradient(0deg, rgb(0,0,0),rgb(255,255,255));
            -webkit-background-clip: text;
	        -webkit-text-fill-color: transparent;    
        }
    }

`
const PageTabContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    border-right: 1px solid white;

    background: var(--jumbo-grey);
    border-top: 3px solid var(--jumbo-yellow);
    span {
        margin-left: 10px;
        margin-right: 20px;
        font-weight:600;
        color: black;
    }

    @media (max-width: 960px) {
        width: 200px
        span {
            font-size:14px;
        }
    } 
    @media (max-width: 768px) {
        width: 200px;
        span {
            font-size:14px;
        }
    } 

    @media (max-width: 640px) {
        width: 160px;
        span {
            font-size:14px;
        }
    } 

    @media (max-width: 480px) {
        width: 120px;
        span {
            font-size:12px;
        }
    } 

    @media (max-width: 384px) {
        width: 80px;
        span {
            font-size:10px;
        }
    } 

`

const ImgContainer = styled.div`
    margin: 0px 0px 02px 10px;
    transform:translatey(-2px);
    height: 20px;
    width: 20px;
`
const Img = styled.img`
    height: 100%;
    width: 100%;
`

const OfferMainOuterContainer = styled.div`
    position: relative;
    top: 131px;
    height: auto;
    background: white;
`
const OfferMainInnerContainer = styled.div``
