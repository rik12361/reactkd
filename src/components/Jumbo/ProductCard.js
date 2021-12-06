import React from 'react'
import { Prompt } from 'react-router'
import styled from 'styled-components'

function ProductCard({product}) {
    return (
        <ProductLink href='#'>
        <CardContainer>
            <ImgBlockContainer>
                <ImgBlock>
                    <ProductImg src={product.imgUrl} alt=''></ProductImg>
                </ImgBlock>
            </ImgBlockContainer>
            <Promo>{product.promo}</Promo>
            <TextBlock>
                <LeftBlock>
                    <p>{product.title}</p>
                    <p>{product.contents}</p>
                </LeftBlock>
                <RightBlock>
                    <div>
                        <div> 
                            <p>{product.priceHigh}</p>
                            <span>{product.priceLow}</span>
                        </div>
                        <p>{product.pricePerContents}</p>
                    </div>
                </RightBlock>
            </TextBlock>
            <ButtonBLock>
              <ViewProductButton className='kd-jumbo-button'>Bekijk <span>product</span></ViewProductButton>
            </ButtonBLock>

        </CardContainer>
        </ProductLink>
    )
}

export default ProductCard

const CardContainer = styled.div`
    width: 250px;
    height: 400px;
    border: 1px solid var(--jumbo-grey);
`

const ButtonBLock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TextBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    margin: 0px;
`
const ImgBlockContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ImgBlock = styled.div`
    width: 180px;
    height: 180px;
    margin: 20px;
`
const ProductImg = styled.img`
    width: 100%;
    height: 100%;
`

const LeftBlock = styled.div`
    max-width: 70%;
    height: 80px;
    background-color: white;
    color: black;
    /* background: yellow; */
    text-decoration: none;
    p {
        margin: 0px 0px 0px 14px;
        padding: 0px;
    }
    p:nth-child(2) {
        color: grey;
        font-size: 10px;
    }
`
const RightBlock = styled.div`
    max-width: 30%;
    height: 100%;
    color: black;
    div {
        /* background: green; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex;
    }
    div div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        p {
            margin: 2px 1px;
            padding: 0px;
            font-size: 24px;
            font-weight: 700;
        }

        span {
            font-size:10px;
            font-weight: 700;
            padding: 9px 0px 1px 0px;
        }
    }
    p:nth-child(2) {
        color: grey;
        font-size: 10px;
    }
`

const ProductLink = styled.a`
`
const ViewProductButton = styled.a`
    margin: 20px 0px;
    display: inline;
    padding: 0px 10px;
    height: 30px;
    text-align: center;
    border: 1px solid grey;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`

const Promo = styled.div`
    background-color: var(--jumbo-red);
    display: inline;
    color: white;
    margin: 18px 0px 8px 14px;
    padding: 0px 4px;
    border-radius: 8%;
`

