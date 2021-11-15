import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Movies() {

    var movies = useSelector(state => state.movie.movies);
    return (
        <Container>
            <TitleContainer>
            <h1>Welkom</h1>
            <h4>Recommended for you: </h4>
            </TitleContainer>
            <Content>
                {movies && movies.map((movie) => (
                    <Wrap key={movie.id} >
                        <Link to={`/disney/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt='jammer'></img>       
                        </Link>
                    </Wrap>
                ))}
                {/* <Wrap>
                    <img src='https://www.rtlnieuws.nl/sites/default/files/content/images/2019/11/13/Simpsons.jpg?itok=FjiMdDn8&offsetX=0&offsetY=0&cropWidth=2000&cropHeight=1125&width=1024&height=576&impolicy=dynamic'></img>        
                </Wrap> */}
           </Content>
        </Container>
    )
}

export default Movies
const Container = styled.div`
h1 {
    color: white;
    padding: 10px 40px;
}
h4 {
    color: white;
    padding: 30px 40px;
}
`
const TitleContainer = styled.div`
    padding-top: 10%;
    padding-bottom: 1%;
`

const Content = styled.div`
    padding: 10px 40px 270px  40px;
    display:grid;
    grid-gap: 4%;
    grid-template-columns: repeat(5, minmax(00px, 1fr));
    @media screen and (max-width: 1536px) {
        grid-template-columns: repeat(4, minmax(00px, 1fr));
    }
    @media screen and (max-width: 1368px) {
        grid-template-columns: repeat(3, minmax(00px, 1fr));
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(00px, 1fr));
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, minmax(00px, 1fr));
    }
`
const Wrap = styled.div`
cursor: pointer;
border-radius: 10px;
overflow:hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow:  rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms ease-out;

&:hover {
    transform: scale(1.05);
    box-shadow:  rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249,0.8);
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`