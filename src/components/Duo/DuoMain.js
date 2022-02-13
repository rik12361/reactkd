import React from 'react';
import styled from 'styled-components';
import DuoHeader from './DuoHeader';
import DuoMenuBar from './DuoMenuBar'

import DuoSectorToJourney from './DuoSectorToJourney';
import DuoBreadCrum from './DuoBreadCrum';
import DuoMainContainer from './DuoMainContent';
import DuoProcessToJourney from './DuoProcessToJourney'

function DuoMain({page}) {
  return <>
      <DuoHeaderContainer>
        <DuoHeader></DuoHeader>
        <DuoMenuBar></DuoMenuBar>
        <DuoBreadCrum></DuoBreadCrum>
      </DuoHeaderContainer>
      {page==='main'? <DuoMainContainer></DuoMainContainer> : ''}
      {page==='voorzieningenplanning'?  <DuoSectorToJourney domein={'OI-Voorzieningenplanning'} domeinName={'Voorzieningenplanning'}></DuoSectorToJourney> : ''}
      {page==='statustoekenning'? <DuoSectorToJourney domein={'OI-Statustoekenning'} domeinName={'Statustoekenning'}></DuoSectorToJourney> : ''}
      {page==='bekostigen'? <DuoSectorToJourney domein={'OI-Bekostiging'} domeinName={'Bekostiging'}></DuoSectorToJourney> : ''}
      {page==='verantwoorden'? <DuoSectorToJourney domein={'OI-Verantwoorden'} domeinName={'Verantwoorden'}></DuoSectorToJourney>: ''}
      {page==='bezwaarenberoep'? <DuoSectorToJourney domein={'OI-BenB'} domeinName={'Bezwaar en beroep'}></DuoSectorToJourney>: ''}

      {page==='ho'? <DuoProcessToJourney sector={'Hoger onderwijs'} sectorName={'Hoger onderwijs'}></DuoProcessToJourney>: ''}
      {page==='po'? <DuoProcessToJourney sector={'Primair onderwijs'} sectorName={'Primair onderwijs'}></DuoProcessToJourney>: ''}
      {page==='vo'? <DuoProcessToJourney sector={'Voortgezet onderwijs'} sectorName={'Voortgezet onderwijs'}></DuoProcessToJourney>: ''}
      {page==='mbo'? <DuoProcessToJourney sector={'Middelbaar beroepsonderwijs en Vavo'} sectorName={'Middelbaar beroepsonderwijs en Vavo'}></DuoProcessToJourney>: ''}
      {/* {page==='po'? <DuoProcessToJourney sector={'OI-Primair onderwijs'} sectorName={'Primair onderwijs'}></DuoProcessToJourney>: ''}
      {page==='po'? <DuoProcessToJourney sector={'OI-Primair onderwijs'} sectorName={'Primair onderwijs'}></DuoProcessToJourney>: ''} */}

      {/* <DuoHeroPage></DuoHeroPage> */}
      {/* <DuoNews></DuoNews>
      <DuoNewsFlash></DuoNewsFlash>
      <DuoProcess></DuoProcess>
      <DuoRulesAndSectors></DuoRulesAndSectors>
      <DuoSocialMedia></DuoSocialMedia>
      <DuoFirstFooter></DuoFirstFooter> */}
  </>;
}

export default DuoMain;

const DuoHeaderContainer = styled.div`
  /* position: fixed;
  width: 100%; */
`


//https://www.rijksoverheid.nl/binaries/content/gallery/rijksoverheid/channel-afbeeldingen/logos/logo-ro.svg
