import React from 'react'
import styled from 'styled-components'
import i1 from './static/scale.png'
import b1 from './static/play-icon-black.png'
import b2 from './static/play-icon-white.png'
import b3 from './static/group-icon.png'

function Detail() {
    return (
        <Container id="sc01">
            <Background>
            <ImageTitle>
                <img src={i1} alt='jammer'></img>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src={b1} alt='jammer'></img>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src={b2} alt='jammer'></img>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src={b3} alt='jammer'></img>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
            <h4>   2018 - 7 min - familt, happiness, fun </h4>
            </SubTitle>
            <Description>
            <p className="kd-c-white" >In Toronto, Canada, a Chinese Canadian woman cooks a meal of baozi for her and her husband. One of her buns comes alive, much to her shock. She raises the steamed bun as a child, feeding and caring for it, as it enjoys the time spent with her.</p>
            </Description>
            </Background>
        </Container>
    )
}

export default Detail

const Container=styled.div `
    padding: 0 calc(3.5vw + 5px);
    background-color: #040714;
    position:relative;
    overflow:scroll;
`
const Background=styled.div`
    position: fixed;
    z-index:-1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    min-height: calc(100vh - 70px);
    background-image: url('https://cdn.vox-cdn.com/thumbor/K_gXqgjL3uJ1H_NwYmRAFCR-syU=/0x0:4096x2304/920x613/filters:focal(1973x1175:2627x1829):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    opacity: 0.8;
    a {
        left: 16px;
        padding: 16px 40px 16px 40px;
        height: 70px;
        font-size: 26px;
        width:200px;
        background: white;
        // border: 3px solid rgba(249,249,249,0.2)
        border-radius: 12px;
        overflow:hidden;
        color: red;
    }
`
const ImageTitle = styled.div`
    height: 300px;
    width: 350px;
    min-height: 170px;
    min-width: 200px;
    left: 1px;
    margin-top: 120px;
    
    img{
        width: 100%;
        height: 100%;
        object-fit:contain;
    }
`

const Controls = styled.div`
    color:white;
    display:flex;
    flex-direction: row;
    transition: all ease-out 450ms;
    align-items:center;
`
const PlayButton = styled.button `
    padding: 0px 24px 0px 24px;
    transition: all ease-out 250ms;
    height: 56px;
    margin: 8px;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid grey;
    border-radius: 12px;
    letter-spacing: 1.8px;
    cursor:pointer;
    &:hover {
        background: rgba(200,200,200,0.8);
    }
`
const TrailerButton = styled(PlayButton)`
    span{color:white;};
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    text-transform: uppercase;
`

const AddButton = styled.div`
    transition: all ease-out 250ms;
    margin: 8px;
    span {color:white;}
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    padding: 22px;
    span {font-size: 30px;}
    border-radius: 50%;
    height: 44px;
    width: 44px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    &:hover {
        background: rgba(200,200,200,0.8);
    }
`
const GroupWatchButton = styled(AddButton) `
    background: rgba(0,0,0,0.8);
`
const SubTitle = styled.div`
    width: 550px;
    padding: 10px 15px;
    h4 {color:white;}
`
const Description = styled(SubTitle)`
    p {
        color: white;
        text-align: left;
    }

`