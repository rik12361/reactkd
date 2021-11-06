import { useEffect } from 'react' 
import React from 'react'
import styled from 'styled-components'
import bg1 from './static/login-background.jpg'
import logoOne from './static/cta-logo-one.svg'
import logoTwo from './static/cta-logo-two.png'
import userName from './userSlice'
import userPhoto from './userSlice'
import {selectUserName, selectUserPhoto } from './userSlice'
import { useSelector } from 'react-redux'

function Login() {

    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        console.log("UseEffect");
      }, []);

    return (
        <Container>
            <Content>
                <Logo1>
                    <img src={logoOne} alt='jammer'></img>
                </Logo1>
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                </Description>
                <Logo2>
                    <img src={logoTwo} alt='jammer'></img>
                </Logo2>
            </Content>              
        </Container>
    )
}

export default Login

const Container = styled.div`
    position:relative;
    height: calc(100vh - 70px);
    display:flex;
    text-align:center;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    &:before {
        position:absolute;
        width: auto;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(${bg1});
        background-position:center;
        background-repeat: no-repeat;
        background-size:cover;
        z-index:-1;
    }

`
const Content = styled.div`
    max-width: 45vw;
    width: 45vw;
`

const Logo1 = styled.div`
    width: inherit;
    img {
        width:100%;
        height:100%;
        object-fit:contain;
    }
`
const Logo2 = styled(Logo1) `
    padding-top: 20px;
`

const SignUp = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 17px;
    color: white;
    width: inherit;
    background: #0063e5;
    color: #f9f9f9;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    padding: 17px 0px;
    cursor: pointer;
    transition: all 250ms;
    margin-top: 8px;
    margin-bottom: 2px;
    &:hover {
        background-color: #0483ee;
    }
    `
const Description = styled.p`
    width: inherit;
    color: white;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align:center;
    padding-top: 8px;
    line-height: 1.5;
`

