import React, {useState} from 'react'
import styled from 'styled-components'
import ProductData from './Products.json'

function ProductCard({id}) {
    const [showBackImg, setshowBackImg] = useState(false);

    const checkShowBackImg = (chkState) => {
        if (showBackImg !== chkState) 
        {
            setshowBackImg(chkState);
        }
    }

    const updFavorite = (favo) => {
        console.log("LET OP " + favo);
        console.log("LET OP " + favo);        console.log("LET OP " + favo);
        // favo = !favo;
    }

    return (
        <div>
            { ProductData.filter((product) => product.id === id).map((prod) => 
            <CardContainer key={prod.id}>
            <ProdLink href="">
                <ImgContainer>
                    {prod.imgUrlBack !== prod.imgUrlFront?
                        <>
                            <ImgFront src={showBackImg? prod.imgUrlBack : prod.imgUrlFront} alt='jammer' 
                                        onMouseMove={() => checkShowBackImg(true)} 
                                        onMouseLeave={() => checkShowBackImg(false)} 
                                        style={{opacity: showBackImg? '0' : '1'}}
                            ></ImgFront>
                            <ImgBack src={prod.imgUrlBack} alt='jammer'
                                        onMouseMove={() => checkShowBackImg(true)} 
                                        onMouseLeave={() => checkShowBackImg(false)} 
                                        style={{opacity: showBackImg? '1' : '0'}}
                            ></ImgBack> 
                        </>
                        :
                        <ImgFront src={showBackImg? prod.imgUrlBack : prod.imgUrlFront} alt='jammer'></ImgFront>
                    }
                </ImgContainer>
            </ProdLink>
            <ProdLink href="">
                <DescriptionContainer>
                    <Mark>{prod.mark}</Mark>
                    <Description>{prod.description} </Description>
                </DescriptionContainer>
                <ReviewStars></ReviewStars>
                <Prices>
                    <PriceFrom>{prod.priceFrom}</PriceFrom>
                    <PriceNow>{prod.priceNow}</PriceNow>
                </Prices>
                <ReductionContainer>
                    {prod.reduction[0] !== undefined? <ReductionLeft style={{background:prod.reduction[0].color}}>{prod.reduction[0].text}</ReductionLeft>: ''}
                    {prod.reduction[1] !== undefined? <ReductionRight style={{background:prod.reduction[1].color}}>{prod.reduction[1].text}</ReductionRight>: ''}
                </ReductionContainer>
                <FavoriteContainer>
                    <FavoriteButton onClick={() => updFavorite(prod.id)}> 
                       {prod.favorite? <span className="material-icons">favorite_border</span> : 
                                       <span className="material-icons">favorite</span> }
                    </FavoriteButton>
                </FavoriteContainer>
            </ProdLink>
            <FavoriteButton onClick={() => updFavorite(prod.id)}> 
                       {prod.favorite? <span className="material-icons">favorite_border</span> : 
                                       <span className="material-icons">favorite</span> }
                    </FavoriteButton>
            </CardContainer>
            ) }
        </div>
    )
}

export default ProductCard

const FavoriteContainer = styled.div`
    position: absolute;
    z-index: 50;
    top: 0px;
    right: -20px;
`
const FavoriteButton = styled.button`
    position: relative;
    border: none;
    color: var(--bever-blue);
    z-index: 50;

    &:hover {
        background: red;
    }
`

const Prices = styled.div`
    position: absolute;
    top: 460px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const PriceFrom = styled.span`
    font-weight: 650;
    color: black;
    text-decoration: line-through;
    margin: 0px 8px 0px 0px;
`
const PriceNow = styled.span`
    font-weight: 650;
    color: red;
    margin: 0px 8px 0px 0px;
`
const ReductionLeft = styled.span`
    color: white;
    font-weight: 500;
    font-size: 12px;
    padding: 1px 6px 1px 6px;
    margin: 0px 4px 0px 0px;
`
const ReductionRight = styled.span`
    color: white;
    font-weight: 500;
    font-size: 12px;
    padding: 1px 6px 1px 6px;
    margin: 0px 4px 0px 0px;
`
const ReductionContainer = styled.span`
    position: absolute;
    top: 340px;
    left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;
`
const ProdLink = styled.a`
    text-decoration:none;
    color: black;
    &:hover {
        text-decoration: underline;
        color: black;
    }
`
const DescriptionContainer = styled.span`
        position: absolute;
        top: 380px;
`

const Mark = styled.span`
    font-weight: 650;
    padding: 0px 5px 0px 0px;
`
const Description = styled.span`
`
const ReviewStars = styled.span`
`
const ImgBack = styled.img`
    opacity: 0.0;
    width: 100%;
    height: 100%;
    transform: translateY(-360px);
    z-index: 1;
    position: relative;
    transition: all 450ms ease;
`

const ImgFront = styled.img`
    width: 100%;
    height: 100%;
    transition: all 250ms ease;

    /* &:hover + ${ImgBack} {display: block;}
    &:hover {display:none;} */
`

const ImgContainer = styled.div`
    width: 240px;
    height: 360px;
`
const CardContainer = styled.div`
    position: relative;
    width: 240px;
    height: 520px;
`