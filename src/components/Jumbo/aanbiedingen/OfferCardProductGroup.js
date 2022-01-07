import React from 'react'
import styled from 'styled-components';
import OfferCard from './OfferCard';
import productData from '../Products.json'

function OfferCardProductGroup  ({showBlock, ProductGroup}) {
    return (
        <OfferCardProductGroupOuterContainer className='kd-Jumbo-container'>
            <OfferCardProductGroupInnerContainer>
                {productData.filter((prd) => prd.productGroep === ProductGroup.id).length > 0?
                <Cardscontainer>
                    <>{showBlock.current === 0? showBlock.current = ProductGroup.id : ''}</>
                    <OfferCard prodGroup={ProductGroup} showProdGroup={true} showFreeDelivery={false}></OfferCard>
                    {productData.filter((prd) => prd.productGroep === ProductGroup.id).map((prod) => 
                        <OfferCard prod={prod} prodGroup={ProductGroup} showProdGroup={false} showFreeDelivery={false}></OfferCard>
                    )}
                </Cardscontainer>
                :
                ''
                }
            </OfferCardProductGroupInnerContainer>
        </OfferCardProductGroupOuterContainer>
    )
}

export default  OfferCardProductGroup

const OfferCardProductGroupOuterContainer = styled.div``
const OfferCardProductGroupInnerContainer = styled.div`
    width: 100%;
`
const Cardscontainer = styled.div`
    margin: 30px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
`
