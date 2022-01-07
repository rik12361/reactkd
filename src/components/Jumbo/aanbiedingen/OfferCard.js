import React from 'react'
import styled from 'styled-components';

function OfferCard  ({prod, prodGroup, showProdGroup, showFreeDelivery, freeDelivery}) {
    return (
            <>
            {showProdGroup? <EmptyCard id={prodGroup.id}><div>{prodGroup.productGroepNaam}</div></EmptyCard>
            :
            <>            
                {showFreeDelivery? 
                    <FreeDeliveryCard id={1}>
                        <div>
                            <div>{freeDelivery.title}</div>
                            <div>{freeDelivery.subtitle}</div>
                        </div>
                    </FreeDeliveryCard>
                :
                    <OfferCardInnerContainer>
                        <ImgContainer>
                            <Img src={prod.imgUrl} alt='jammer'></Img>
                        </ImgContainer>
                        <PromoContainer>
                            {prod.promoChannel.length === 0?
                                <FirstBlock>
                                    <PromoFirstLine></PromoFirstLine>
                                    <PromoSecondLine style={{borderRadius: '10%'}}><span>{prod.promo}</span></PromoSecondLine>
                                </FirstBlock>
                                :
                                <SecondBlock>
                                    <PromoFirstLine><span>{prod.promoChannel}</span></PromoFirstLine>
                                    <PromoSecondLine><span>{prod.promoChannel}</span></PromoSecondLine>
                                </SecondBlock>
                            }
                        </PromoContainer>
                        <PromoPeriod><span>{prod.promoPeriod}</span></PromoPeriod>
                        <ProdTitle><span>{prod.title}</span></ProdTitle>
                        <ExtraInfoContainer>
                            <p>{prod.extraInfoR1}</p>
                            <p>{prod.extraInfoR2}</p>
                        </ExtraInfoContainer>
                        <PromoButtonContainer>
                            <PromoButton href="" className='kd-jumbo-button'>Bekijk aanbieding</PromoButton>
                        </PromoButtonContainer>
                </OfferCardInnerContainer>}
                </>}
            </>
    )

}

export default  OfferCard

const EmptyCard = styled.div`
    display: inline-block;
    scroll-margin-top: 120px;
    width: 250px;
    height: 400px;
    margin: 5px 0px;
    padding: 0px 10px;
    border: 1px solid rgb(227,227,227);

    div {
        font-size: 26px;
        font-weight:1000;

        @media (max-width: 480px) {font-size: 22px;} 
        @media (max-width: 384px) {font-size: 20px;} 
    }
    @media (max-width: 980px) {} 
    @media (max-width: 768px) {} 
    @media (max-width: 640px) {} 
    @media (max-width: 480px) {width: 200px;} 
    @media (max-width: 384px) {width: 170px;} 
`

const FreeDeliveryCard = styled(EmptyCard)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    div > div:nth-child(2) {
        font-size: 16px;
        font-weight: 200;
    }
    div {
        margin: 0px 0px 10px 0px;
    }
`

const OfferCardInnerContainer =  styled(EmptyCard)`
    position: relative;
    margin: 5px 0px;
    padding: 0px 12px;

    p {
        font-size: 14px;
        font-weight: 100;
        margin: 0px;
        padding: 0px;
        line-height: 1.2;
        color: rgba(0,0,0,0.6);

        @media (max-width: 480px) {font-size: 12px;} 
        @media (max-width: 384px) {font-size: 10px;} 
   }

`
const PromoContainer = styled.div`
    position: relative;
    top: -3px;
    width: 130px;
    height: 50px;
    margin: 0px;
`

const PromoFirstLine=styled.p`
    height: 25px;
    span {
        color: var(--jumbo-red);
        font-weight: bold;
        padding: 0px 0px 0px 10px;

        @media (max-width: 480px) {font-size: 14px;} 
        @media (max-width: 384px) {font-size: 12px;} 
    }
`

const PromoSecondLine=styled.p`
    height: 25px;
    padding: 0px 0px 0px 0px;
    background: var(--jumbo-red);
    span {
        color: white;
        font-weight: bold;
        padding: 0px 0px 0px 10px;

        @media (max-width: 480px) {font-size: 14px;} 
        @media (max-width: 384px) {font-size: 12px;} 
    }
`

const FirstBlock = styled.div``
const SecondBlock = styled.div`
    border: solid 1px var(--jumbo-red);
    border-radius: 10%;
`
const PromoPeriod = styled.div`
    height: 25px;
    span {
        font-size: 16px;
        font-weight: 100;
        color: rgb(127,127,127);

        @media (max-width: 480px) {font-size: 14px;} 
        @media (max-width: 384px) {font-size: 12px;} 
    }
`

const ProdTitle = styled.div`
    height: 40px;
    padding: 10px 0px 0px 0px;
    line-height: 80%;
    span {
        font-size: 16px;
        font-weight: 400;

        @media (max-width: 480px) {font-size: 14px; font-weight: 300;} 
        @media (max-width: 384px) {font-size: 12px; font-weight: 200} 
    }
`
const ImgContainer = styled.div`
    width: 180px;
    height: 180px;
    margin: auto;

    @media (max-width: 480px) { width: 165px; height: 165px;} 
    @media (max-width: 384px) { width: 150px; height: 150px;} 

`

const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0px 0px;
`
const PromoButtonContainer = styled.div`
    width: 100%;
    margin: 12px auto 0px auto;
    text-align: center;
`
const PromoButton = styled.a`
    padding: 5px 24px;
    border: 1px solid rgba(0,0,0,0.4);
    font-size: 16px;
    font-weight: bold;

    @media (max-width: 480px) {padding: 4px 16px;font-size: 14px;} 
    @media (max-width: 384px) {padding: 3px 8px;font-size: 12px;} 
`
const ExtraInfoContainer = styled.div`
    height: 32px;
`