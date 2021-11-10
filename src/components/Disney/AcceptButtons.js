import React from 'react'
import styled from 'styled-components'
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

function AcceptButtons({setShowModal}) {
    const [cookies, setCookie] = useCookies();

    function AcceptAllCookies() {
        setCookie('kd-functioneel', 'true', { path: '/' });
        setCookie('kd-advertentie', 'true', { path: '/' });
        setCookie('kd-sociale-media', 'true', { path: '/' });
        setCookie('kd-analytisch', 'true', { path: '/' });
        setCookie('kd-cookies-ingesteld', 'true', { path: '/' });
        setShowModal(false);
    }

    const ConfigureAllCookies = () => {
        setCookie('kd-functioneel', 'false', { path: '/' });
        setCookie('kd-advertentie', 'false', { path: '/' });
        setCookie('kd-sociale-media', 'false', { path: '/' });
        setCookie('kd-analytisch', 'false', { path: '/' });
        setCookie('kd-cookies-ingesteld', 'true', { path: '/' });
        setShowModal(false);
    }

    return (
        <ButtonGroup>
            <LeftButton onClick={ConfigureAllCookies}>instellingen beheren</LeftButton>
            <RightButton onClick={AcceptAllCookies}>alles accepteren</RightButton>
        </ButtonGroup>
    )
}

export default AcceptButtons

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-shrink: 1;
    padding: 10px;
`

const LeftButton = styled.button`
    background-color: #202020;
    border: 2px solid #202020;
    color: #f0f0f0;
    margin: 0px 8px;
    text-align: center;
    border-radius: 4px;
    &:hover {
        opacity: 0.5;
    }
    transition: all 0.25s;
`
const RightButton = styled (LeftButton)`
    background-color: #f0f0f0;
    border: 2px solid #202020;
    color: #202020;

`