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
import DuoBreadCrust from './DuoBreadCrust';
function DuoMain() {
  return <>
      <DuoHeader></DuoHeader>
      <DuoMenuBar></DuoMenuBar>
      <DuoBreadCrust></DuoBreadCrust>
      <DuoHeroPage></DuoHeroPage>
      <DuoNews></DuoNews>
      <DuoNewsFlash></DuoNewsFlash>
      <DuoProcess></DuoProcess>
      <DuoRulesAndSectors></DuoRulesAndSectors>
      <DuoSocialMedia></DuoSocialMedia>
      <DuoFirstFooter></DuoFirstFooter>
  </>;
}

export default DuoMain;

const MainContainer = styled.div`
  width: 1920px;
  height: 1200px;
`

//https://www.rijksoverheid.nl/binaries/content/gallery/rijksoverheid/channel-afbeeldingen/logos/logo-ro.svg
