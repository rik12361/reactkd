import React from 'react'
import Products from './Products.json'
import ProductCard from './ProductCard'
import styled from 'styled-components'

function Productoverview() {
    return (
        <div className='kd-Jumbo-container'>
            <BlockHeader className='kd-Jumbo-container'>Hallo, heerlijke <span>Kerst lekkernijen</span></BlockHeader>
                <ProductContainer>
                {Products.map((product) => 
                    <ProductCard key={product.id} product={product}>
                    </ProductCard> )}
                </ProductContainer>
        </div>
    )
}

export default Productoverview

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
`
const BlockHeader = styled.div`
    margin-top: 40px;
    font-size: 28px;
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
