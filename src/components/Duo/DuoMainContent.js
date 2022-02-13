import React from 'react';
import styled from 'styled-components';
import DuoHeader from './DuoHeader';
import DuoMenuBar from './DuoMenuBar'
import DuoHeroPage from './DuoHeroPage';
import DuoNews from './DuoNews';
import DuoProcess from './DuoProcess';
import DuoRulesAndSectors from './DuoRulesAndSectors';
import DuoNewsFlash from './DuoNewsFlash';
import DuoFirstFooter from './DuoFirstFooter';
import DuoSocialMedia from './DuoSocialMedia';
import DuoBreadCrum from './DuoBreadCrum';
function DuoMainContainer() {
  return <>
      <DuoHeroPage></DuoHeroPage>
      <DuoNews></DuoNews>
      <DuoNewsFlash></DuoNewsFlash>
      <DuoProcess></DuoProcess>
      <DuoRulesAndSectors></DuoRulesAndSectors>
      <DuoSocialMedia></DuoSocialMedia>
      <DuoFirstFooter></DuoFirstFooter>
  </>;
}

export default DuoMainContainer;

const MainContainer = styled.div`
  width: 1920px;
  height: 1200px;
`

//https://www.rijksoverheid.nl/binaries/content/gallery/rijksoverheid/channel-afbeeldingen/logos/logo-ro.svg
