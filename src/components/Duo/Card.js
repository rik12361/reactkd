import React from 'react';
import styled from 'styled-components';
function Card({imglink, header, text, reflink}) {

  console.log(imglink);
  return <div>
      <CardContainer>
                <ImgLink href={reflink}>
                    <ImgContainer>
                        <Img src={imglink} alt='jammer'></Img>
                    </ImgContainer>
                    <Header>{header}</Header>
                </ImgLink>
                <Text>{text}</Text>
      </CardContainer>
  </div>;
}
export default Card;

const ImgContainer = styled.div`
    width: 370px;
    height: 245px;
`
const Img = styled.img`
    width: 370px;
    height: 245px;
`
const Header = styled.div`
    color: var(--duoLightBlue);
    font-size: 24px;
    font-weight: 600;
    margin: 10px 0px 0px 0px;
`
const Text = styled.div``

const ImgLink = styled.a`
    color: var(--duoLightBlue);
    &:hover {
        text-decoration: underline;
    }
`

const CardContainer = styled.div`
    width: 370px;
    height: 425px;
    margin: 20px 30px 10px 0px;


`