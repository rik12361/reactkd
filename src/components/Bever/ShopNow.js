import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'
function ShopNow({shopnowFirstView}) {
    return (
        <ShowNowContainer>
            <ShowNowInnerContainer className='kd-bever-container'>
                <ShowNowProductContainer>
                    {shopnowFirstView.map ((shopNow) => 
                    <ShopNowImgContainer key={shopNow.id}>
                        <ShopNowImg src={'/images/bever/shopnow' + shopNow.id + '.png'}></ShopNowImg>
                        <ShopNowButton href='/'>{shopNow.title}<FaChevronRight style={{width:'12px', height:'12px', paddingLeft:'6px'}}/></ShopNowButton>
                    </ShopNowImgContainer>
                    )}
                </ShowNowProductContainer>
            </ShowNowInnerContainer>
        </ShowNowContainer>
    )
}

export default ShopNow

const ShowNowContainer = styled.div`
    text-align: center;
    background: var(--bever-light-grey);
`
const ShowNowInnerContainer = styled.div`
`
const ShowNowProductContainer = styled.div`
    display: flex;
    flex-direction: row;

    div {
        margin: 0px 16px 0px 0px;
    }

    div:last-child {
        margin: 0px 0px 0px 0px;
    }
`
const ShopNowImgContainer = styled.div`
    position: relative;
    width: 435px;
    height: 291px;
`

const ShopNowImg = styled.img`
    width: 100%;
    height: 100%;
`
const ShopNowButton = styled.a`
    position: absolute;
    top: 220px;
    left: 130px;
    background: white;
    width: 160px;
    height: 32px;
    padding: 3px 0px 0px 0px;
    border: 1px solid var(--bever-blue);
    border-radius: 5%;
    color: var(--bever-blue);
    text-align: center;

    &:hover {
        color: white;
        background: var(--bever-blue);
    }
`