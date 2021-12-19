import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
function ProductSample({pageTitle, prodSampleFirstView}) {
    return (
        <ProductSampleContainer>
            <ProductSampleInnerContainer className='kd-bever-container'>
            <h4>{pageTitle}</h4>
                <ProductCardContainer>
                    {prodSampleFirstView.map((id) => 
                        <ProductCard key={id} id={id}>product </ProductCard>
                    )}
                </ProductCardContainer>
            </ProductSampleInnerContainer>
        </ProductSampleContainer>
    )
}

export default ProductSample

const ProductSampleContainer = styled.div`
    height: 650px;
    width: 100%;
    background: var(--bever-light-grey);
    h4 {
        text-align: center;
        padding: 50px 0px 20px 0px;
    }
`
const ProductSampleInnerContainer = styled.div`
`
const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    div {
        margin: 0px 36px 0px 0px;
        padding: 0px;
    }

    div:last-child {
        margin: 0px 0px 0px 0px;
        padding: 0px;
    }
`
