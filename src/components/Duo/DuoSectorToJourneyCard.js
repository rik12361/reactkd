import styled from 'styled-components';
import Journeys from './Data/Journeys.json'
import ProcessCard from './ProcessCard';
function DuoSectorToJourney({domein, domeinName}) {

return <div>
     <OuterContainer className='kd-duo-container'>
        <InnerContainer>   
            <h1>{domeinName}</h1>

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Alle sectoren")).length !==0?
              <>
                <SectorHeader>Alle sectoren</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Alle sectoren")).map((Onderwerp) => 
                    <ProcessCard onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Sector PO en VO")).length !==0?
              <>
                <SectorHeader>Sector PO en VO</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Sector PO en VO")).map((Onderwerp) => 
                  <ProcessCard onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                  )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Sector PO en MBO")).length !==0?
              <>
                <SectorHeader>Sector PO en MBO</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Sector PO en MBO")).map((Onderwerp) => 
                  <ProcessCard Key={Onderwerp.ProdId} onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                  )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Primair onderwijs")).length !==0?
              <>
                <SectorHeader>Primair onderwijs</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Primair onderwijs")).map((Onderwerp) => 
                  <ProcessCard Key={Onderwerp.ProdId} onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Voortgezet onderwijs")).length !==0?
              <>
                <SectorHeader>Voortgezet onderwijs</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Voortgezet onderwijs")).map((Onderwerp) => 
                  <ProcessCard Key={Onderwerp.ProdId} onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Middelbaar beroepsonderwijs en Vavo")).length !==0?
              <>
                <SectorHeader>Middelbaar beroepsonderwijs en Vavo</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Middelbaar beroepsonderwijs en Vavo")).map((Onderwerp) => 
                  <ProcessCard Key={Onderwerp.ProdId} onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Hoger onderwijs")).length !==0?
              <>
                <SectorHeader>Hoger onderwijs</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Hoger onderwijs")).map((Onderwerp) => 
                  <ProcessCard Key={Onderwerp.ProdId} onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Overig")).length !==0?
              <>
                <SectorHeader>Overig</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Overig")).map((Onderwerp) => 
                  <ProcessCard Key={Onderwerp.ProdId} onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                )}</>
                : ''
            }

            {Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Emancipatie")).length !==0?
              <>
                <SectorHeader>Emancipatie</SectorHeader>
                {(
                  Journeys.Journey.filter((cat) => (cat.Domein===domein && cat.Sector==="Emancipatie")).map((Onderwerp) => 
                  <ProcessCard Key={Onderwerp.ProdId} onderwerp={Onderwerp.Proces} sector={Onderwerp.Sector}></ProcessCard>)
                )}</>
                : ''
            }

        </InnerContainer>
      </OuterContainer>
  </div>
}

export default DuoSectorToJourney;

const OuterContainer = styled.div`
`
const InnerContainer = styled.div`
`
const Process = styled.div`
`


const SectorHeader = styled.h2`
    margin: 16px 0px 4px 0px;
`