import React from 'react';
import styled from 'styled-components';

function WhatDoWeEat() {
  return <>
        <WhatDoWeEatContainer className='kd-Jumbo-container'>
          <FirstBlock>
            <FirstBlockLeft>
              <h1><span>Wat eten we </span>vandaag recepten</h1>
              <p>Zoek makkelijk en snel de Wat eten we vandaag-recepten van jouw voorkeur.</p>
            </FirstBlockLeft>            
            <FirstBlockRight>
              <FirstBlockRightImgContainer>
                <FirstBlockRightImg src='https://www.jumbo.com/watetenwe/_jcr_content/par/contentcontainer_431521550/columntwo/image.coreimg.jpeg/1641194248073/wat-eten-we-rosbiefrolletjes.jpeg' alt='jammer'>                
                </FirstBlockRightImg>
              </FirstBlockRightImgContainer>
            </FirstBlockRight>            
          </FirstBlock>
        </WhatDoWeEatContainer>
      </>;
}

export default WhatDoWeEat;

const WhatDoWeEatContainer = styled.div`
`
const FirstBlock = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const FirstBlockLeft = styled.div`
  h1 {
    font-size: 42px;
  }
  span {
    font-size: 42px;
    font-weight: 900;
  }
`
const FirstBlockRight = styled.div`
`
const FirstBlockRightImgContainer= styled.div`
  width: 735px;
  height: 500px;
`
const FirstBlockRightImg= styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1em;
`