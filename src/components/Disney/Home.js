import { useEffect, useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import backgrnd from './static/home-background.png'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useDispatch } from 'react-redux'
import setMovies from './features/MovieSlice'
import { createStore } from 'redux'
import { createSlice } from "@reduxjs/toolkit";
function Home() {
    // const dispatch = useDispatch();

    // const store = createStore(todos, ['Use Redux'])
    // const initialState = {
    //     todos: ''
    // }
    // function addTodo(text) {
    //   return {
    //     type: 'ADD_TODO',
    //     text
    //   }
    // }
    
    // store.dispatch(addTodo('Read the docs'))
    // store.dispatch(addTodo('Read about the middleware'))
    const dispatch = useDispatch();

    async function fetchTasks () {
        console.log("fetching");
        const res = await fetch ('http://localhost:8080/movie')
        const data = await res.json();
        return (data);
    }
    useEffect (() => {
        dispatch(setMovies(fetchTasks()));
    }, []);

    return (
        <Container>
            <ImgSlider/>
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
