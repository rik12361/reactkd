import React from 'react'
import styled from 'styled-components'
import v1 from './static/viewers-disney.png'
import v2 from './static/viewers-marvel.png'
import v3 from './static/viewers-pixar.png'
import v4 from './static/viewers-starwars.png'
import v5 from './static/viewers-national.png'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <a href="#"><img src={v1}></img></a>
            </Wrap>
            <Wrap>
                <a href="#"><img src={v2}></img></a>
            </Wrap>
            <Wrap>
                <a href="#"><img src={v3}></img></a>
            </Wrap>
            <Wrap>
                <a href="#"><img src={v4}></img></a>
            </Wrap>
            <Wrap>
                <a href="#"><img src={v5}></img></a>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div `
    padding: 30px;
    margin-top: 60px;
    display: grid;
    grid-gap: 55px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

`
const Wrap = styled.div `
    padding: 30px 30px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 16px;
    box-shadow:  rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all ease-out 250ms;
    cursor: pointer;

    img {
            width: 100%;
            height: 100%;
            object-fit: cover;
    }

    &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249,249, 0.8);
    box-shadow:  rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;

}

`

