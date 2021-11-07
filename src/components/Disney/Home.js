import { useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
import backgrnd from './static/home-background.png'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import AcceptCookies from './AcceptCookies'

import { useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'
// import { mdecrement, mincrement, setmovies, incrementAsync, fetchTasks } from './moviesSlice'
import { fetchTasks } from './moviesSlice'
import Cookies from 'universal-cookie';

function Home() {
    const dispatch = useDispatch();
    const allCookies = new Cookies();

    useEffect (() => {
        dispatch(fetchTasks());
        setAllCookie('Ja 2');
    },[]);

    function setAllCookie(newName) {
        // console.log(allCookies.get('kd-cookies-ingesteld'));
        // console.log(allCookies.get('kd-functioneel'));
        // console.log(allCookies.get('kd-advertentie'));
        // console.log(allCookies.get('kd-sociale-media'));
        // console.log(allCookies.get('kd-analytisch'));
        
        // remove cookie:
        // allCookies.remove('kokosnoot');

        // Query coockies vanilla javascript:
        // var allCookiesJs = document.cookie;

        // Get all queries
        // const dispCookies = allCookies.getAll();

        // if (allCookies.get('kokosnoot') == undefined) setCookie('kokosnoot', newName, { path: '/' });
        // if (allCookies.get('kokosnoot1') == undefined) setCookie('kokosnoot1', 'kokos 2', { path: '/' });
        // if (allCookies.get('kokosnoot2') == undefined) setCookie('kokosnoot2', 'kokos 3', { path: '/' });

        // html: { cookies.kokosnoot }
     }

     return (
        <Container>
            <ImgSlider/>
            <AcceptCookies></AcceptCookies>
            {/* {<h1>{title}</h1>} */}
            {/* <button onClick={() => dispatch(increment())} >inc</button>
            <button onClick={() => dispatch(decrement())} >dec</button>
            <button onClick={() => dispatch(mincrement())} >minc</button>
            <button onClick={() => dispatch(mdecrement())} >mdec</button>
            <button onClick={() => DoIt()} >doit</button> */}
            <Viewers></Viewers>
            <Movies></Movies>
        </Container>            
    )
}

export default Home

const Container = styled.main `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5w + 5px);
    background-color: #040714;
    background-image: url(${backgrnd});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    top:0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
    color: white;
    h1 { color: white;}

`
