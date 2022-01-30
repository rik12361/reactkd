import React from 'react';
import styled from 'styled-components';
function Card({imglink, header, text, reflink, date, time}) {

  console.log(imglink);
  return <div>
      <CardContainer>
                <ImgLink href={reflink}>
                    <Header>{header}</Header>
                    <DateTime>
                        {date}<span>|</span>{time}
                    </DateTime>
                    <Text>{text}</Text>
                </ImgLink>
      </CardContainer>
  </div>;
}
export default Card;

const DateTime = styled.div`
    color: black;
    font-weight:bold;
    margin: 4px 0px;
    span {
        margin: 0px 4px;
    }
`
const Img = styled.img`
`
const Header = styled.div`
    color: var(--duoLightBlue);
    font-size: 24px;
    font-weight: 600;
    margin: 10px 0px 0px 0px;
`
const Text = styled.div`
    color: black;
`

const ImgLink = styled.a`
    color: black;

    &:hover > div:nth-child(1) {
        text-decoration: underline;
    }
`
const CardContainer = styled.div`
    width: 370px;
    height: 225px;
    margin: 20px 30px 10px 0px;


`