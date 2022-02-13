import styled from 'styled-components';
import Journeys from './Data/Journeys.json'

function DuoProcessToJourney({sector, sectorName}) {

const RemoveAbrevs = (a) => {
  a = a.replace("PO", "");
  a = a.replace("VO", "");
  a = a.replace("HO", "");
  a = a.replace("MBO/VA", "");
  a = a.replace("MBO NBI", "");
  a = a.replace("MBO nBI", "");
  a = a.replace("MBO/NBI", "");
  a = a.replace("VA NBI", "");
  a = a.replace("VO", "");
  a = a.replace("NBI", "");
  return a;
}

const groupBySector = (sector, sectorDescription) => {
// cat.Sector => sector 

  let sectorTranslated = sector;
  if (sector === 'Primair onderwijs') {
    sectorTranslated = (sectorDescription === "Overig"? "Primair onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Emancipatie"? "Primair onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Alle sectoren"? "Primair onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Sector PO en MBO"? "Primair onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Sector PO en VO"? "Primair onderwijs" : sectorDescription);
  }

  if (sector === 'Hoger onderwijs') {
    sectorTranslated = (sectorDescription === "Overig"? "Hoger onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Emancipatie"? "Hoger onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Alle sectoren"? "Hoger onderwijs" : sectorDescription);
  }

  if (sector === 'Middelbaar beroepsonderwijs en Vavo') {
    sectorTranslated = (sectorDescription === "Overig"? "Middelbaar beroepsonderwijs en Vavo" : sectorDescription);
    sectorTranslated = (sectorDescription === "Emancipatie"? "Middelbaar beroepsonderwijs en Vavo" : sectorDescription);
    sectorTranslated = (sectorDescription === "Alle sectoren"? "Middelbaar beroepsonderwijs en Vavo" : sectorDescription);
    sectorTranslated = (sectorDescription === "Sector PO en MBO"? "Middelbaar beroepsonderwijs en Vavo" : sectorDescription);
    sectorTranslated = (sectorDescription === "Sector MBO en HBO"? "Middelbaar beroepsonderwijs en Vavo" : sectorDescription);
  }


  if (sector === 'Voortgezet onderwijs') {
    sectorTranslated = (sectorDescription === "Overig"? "Voortgezet onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Emancipatie"? "Voortgezet onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Alle sectoren"? "Voortgezet onderwijs" : sectorDescription);
    sectorTranslated = (sectorDescription === "Sector PO en VO"? "Voortgezet onderwijs" : sectorDescription);
  }

  return sectorTranslated;
}

// Voorgezet onderwijs/Middelbaar beroepsonderwijs
// Alle sectoren
// Sector PO en VO
// Sector MBO en HBO
// Sector PO en MBO
// Overig
// Emancipatie

return <div>
     <OuterContainer className='kd-duo-container'>
        <InnerContainer>   
            <h1>{sectorName}</h1>
            
            {Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-Voorzieningenplanning")).length !==0?
              <>
                <SectorHeader>Voorzieningenplanning</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-Voorzieningenplanning")).map((Onderwerp) => 
                    <ProcessContainer href="/"><Process>{RemoveAbrevs(Onderwerp.Proces)} - {Onderwerp.Sector}</Process></ProcessContainer>)
                )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-Statustoekenning")).length !==0?
              <>
                <SectorHeader>Statustoekenning</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-Statustoekenning")).map((Onderwerp) => 
                  <ProcessContainer href="/"><Process>{RemoveAbrevs(Onderwerp.Proces)} - {Onderwerp.Sector}</Process></ProcessContainer>)
                  )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-Bekostiging")).length !==0?
              <>
                <SectorHeader>Bekostiging</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-Bekostiging")).map((Onderwerp) => 
                  <ProcessContainer href="/"><Process>{RemoveAbrevs(Onderwerp.Proces)}</Process></ProcessContainer>)
                  )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-Verantwoorden")).length !==0?
              <>
                <SectorHeader>Verantwoorden</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-Verantwoorden")).map((Onderwerp) => 
                    <ProcessContainer href="/"><Process>{RemoveAbrevs(Onderwerp.Proces)}</Process></ProcessContainer>)
                )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-BenB")).length !==0?
              <>
                <SectorHeader>Bezwaar en Beroep</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (groupBySector (sector, cat.Sector)===sector && cat.Domein==="OI-BenB")).map((Onderwerp) => 
                  <ProcessContainer href="/"><Process>{RemoveAbrevs(Onderwerp.Proces)} - {Onderwerp.Sector}</Process></ProcessContainer>)
                  )}</>
                : ''
            }
        </InnerContainer>
      </OuterContainer>
  </div>
}

export default DuoProcessToJourney;

const OuterContainer = styled.div`
`
const InnerContainer = styled.div`
    margin: 0px 0px 24px 0px;
`
const Process = styled.div`
`
const ProcessContainer = styled.a`
  color: black;
  &:hover {
      color: black;
      text-decoration: underline;
  }
`

const SectorHeader = styled.h2`
    margin: 16px 0px 4px 0px;
`