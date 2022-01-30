import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import duoNews from './Data/CardsData.json'

function DuoProcess() {
  return <div>
       <OuterContainer className='kd-duo-container'>
        <InnerContainer>            
            <hr></hr>
            <h1>Hoe regelt u de financiering van uw onderwijsinstelling?</h1>
            <CardsContainer>
            {duoNews.CardsCategory.filter(cat => cat.CardCategory === "Process").map((news) => (
              news.Cards.map((card) => <Card header={card.CardTitle} imglink={card.CardUrl} text={card.CardText} reflink={''}></Card>)
            )
            )}
            </CardsContainer>

        </InnerContainer>
      </OuterContainer>
  </div>;
}

export default DuoProcess;
//url(data:image/svg+xml,%3Csvg id='icon-bell' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 100'%3E%3Cpath d='M85,69.28a3.78,3.78,0,0,1-1.26,2.46,3.82,3.82,0,0,1-2.64,1h-77a4,4,0,0,1-2.7-1A3.63,3.63,0,0,1,0,69.34a4.06,4.06,0,0,1,.66-2.75l6.6-9.94A39.27,39.27,0,0,0,11.37,46l4.92-18.57a26.54,26.54,0,0,1,17.87-19V8.26A7.85,7.85,0,0,1,36.62,2.4a8.4,8.4,0,0,1,11.76,0,7.85,7.85,0,0,1,2.46,5.86v.12a26.54,26.54,0,0,1,17.87,19L73.63,46a36,36,0,0,0,4.08,10.54l6.6,10.06A3.74,3.74,0,0,1,85,69.28Zm-57,14.32H57.08l.24,1.67a13.81,13.81,0,0,1-2,7.31A16,16,0,0,1,49.88,98a14.43,14.43,0,0,1-14.76,0,15.91,15.91,0,0,1-5.4-5.39,13.81,13.81,0,0,1-2-7.31Z' style='fill: %23fff'/%3E%3C/svg%3E);

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const OuterContainer = styled.div`
`
const InnerContainer = styled.div`
    padding: 30px 0px 20px 0px;
    h1 {
      color: var(--duoLightBlue)
    }
`
const Title = styled.div`
    font-weight: 600;
    font-size: 32px;
`
