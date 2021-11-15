import React from 'react'
import styled from 'styled-components'
import AcceptButtons from './AcceptButtons'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import { useCookies } from 'react-cookie';
function AcceptCookies() {

    const [showModal, setshowModal] = useState(false);
    const [cookies, setCookie] = useCookies(['kd-cookies-ingesteld']);
    const allCookies = new Cookies();

    useEffect (() => {
        CheckCookies();
    },[]);

    const setShowModal = (newState) => {
        setshowModal(newState);
    }

    function CheckCookies() {
        allCookies.remove('kd-cookies-ingesteld');
        if (allCookies.get('kd-cookies-ingesteld') == undefined) {
            setCookie('kd-cookies-ingesteld', 'true', { path: '/' });
            setshowModal(true);
        }
        // remove cookie:
        // allCookies.remove('kokosnoot');

        const dispCookies = allCookies.getAll();
        console.log(dispCookies);

        // Query coockies vanilla javascript:
        // var allCookiesJs = document.cookie;

        // Get all queries
        // const dispCookies = allCookies.getAll();

        // if (allCookies.get('kokosnoot') == undefined) setCookie('kokosnoot', newName, { path: '/' });
        // if (allCookies.get('kokosnoot1') == undefined) setCookie('kokosnoot1', 'kokos 2', { path: '/' });
        // if (allCookies.get('kokosnoot2') == undefined) setCookie('kokosnoot2', 'kokos 3', { path: '/' });

        // html: { cookies.kokosnoot }
    }

    const closeModal = () => {
        setshowModal(!showModal)
    }

    return (
            <>
                { showModal === true ? 
                (<ModalContainer>
                    <p id="SideBarTop"><i onClick={closeModal} className="fa fa-times"></i></p> 
                    <TextContainer>
                        <h1>Uw privacy beheren voor deze website</h1>
                        <p>Om je de best mogelijke ervaring te bieden, gebruiken zowel wij als derde partijen technologieën zoals cookies om toegang te krijgen tot apparaatinformatie en/of deze op te slaan. Door in te stemmen met deze technologieën, stel je ons en derde partijen in de mogelijkheid persoonlijke gegevens zoals browsegedrag of unieke ID's op deze website te verwerken. Indien je geen toestemming geeft of deze intrekt, kan dit bepaalde eigenschappen en functies nadelig beïnvloeden. Klik hieronder om toestemming te geven voor het bovenstaande of maak gedetailleerde keuzes, waaronder het uitoefenen van jouw recht om bezwaar te maken tegen bedrijven die persoonsgegevens verwerken, op basis van rechtmatig belang in plaats van toestemming. Je kunt je privacyinstellingen te allen tijde inzien en bijwerken, door op de tekst 'cookies' te klikken onder aan het scherm.</p>
                    </TextContainer>
                    <AcceptButtons setShowModal={setShowModal}></AcceptButtons>
                </ModalContainer>) : (<></>) } 
            </>
    )
}

const TextContainer = styled.div`
    overflow-y: scroll;
    overflow-x: scroll;
    h1 { 
        color: black;
        padding-top: 20px;
        margin-top: 20px;
        font-size: 1rem;
    } 
`
const ModalContainer = styled.div`
    color: black;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(210, 220,230);
    border: 1px solid #f7f7f7;
    z-index: 2;
    padding: 24px;
    top: 20vh;
    left: calc(50vw - 35vw);
    right: calc(50vw - 35vw);
    width: 70vw;
    height: 50vh;
    font-size: 1rem;
`
export default AcceptCookies