import React from 'react'
import styled from 'styled-components'
import logo from './static/logo.svg'
import home from './static/home-icon.svg'
import search from './static/search-icon.svg'
import watchlist from './static/watchlist-icon.svg'
import original from './static/original-icon.svg'
import series from './static/series-icon.svg'
import { Link } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from'./userSlice'
import {useSelector} from 'react-redux'
import { auth, provider } from './firebaseDisney'
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router'
import { useEffect } from 'react'
import Cookies from 'universal-cookie';

function Header() {
    var userName=  useSelector (selectUserName);
    var userPhoto=  useSelector (selectUserPhoto);
    const history = useNavigate ();
    const dispatch = useDispatch();
 
    const shwCookies = () => {
        const allCookies = new Cookies();
        const dispCookies = allCookies.getAll();
        console.log(dispCookies);
    }

    useEffect (() => {
        auth.onAuthStateChanged(async (user) => {
            if (user)
            {
            dispatch(setUserLogin(
                {
                    userName: user.displayName, 
                    userEmail: user.email, 
                    userPhoto: user.photoURL, 
                }))
                history.push("/disney/home");
            }
         })
    });

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            // console.log(result.user.displayName);
            // console.log(result.user.email);
            // console.log(result.user.photoURL);
            shwCookies();
            dispatch(setUserLogin(
                {
                    userName: result.user.displayName, 
                    userEmail: result.user.email, 
                    userPhoto: result.user.photoURL, 
                }))
                console.log("USER ");
                console.log(result.user.photoURL);
                console.log(result.user.email);
                console.log(result.user.displayName);

                history.push("/disney/home");
            })
    }

    const signOut = () => {
        auth.signOut().then(dispatch(setSignOut()));
        history.push("/disney/login");
    }

    const goHome = () => {
        history.push("/disney/home");
    }

    return (
        <div>
            <Nav>
                <Logo src={logo} onClick={goHome}/>
                {!userName ? (
                    <LoginContainer>
                        <Login onClick={signIn}>
                            Login
                        </Login>  
                        {/* <Login onClick={shwCookies}>
                            cookies
                        </Login>   */}
                    </LoginContainer>) :
                (<>
                <NavMenu>
                        <Link to={'/disney'}>
                            <img src={home} alt='jammer'/>
                            <span>Home</span>
                        </Link>
                    <a href="/disney">
                        <img src={search} alt='jammer'/>
                        <span>search</span>
                    </a>
                    <a href="/disney">
                        <img src={watchlist} alt='jammer'/>
                        <span>watchlist</span>
                    </a>
                    <a href="/disney">
                        <img src={original} alt='jammer'/>
                        <span>original</span>
                    </a>
                    <a href="/disney">
                        <img src={series} alt='jammer'/>
                        <span>series</span>
                    </a>
                </NavMenu>
                    <UserImg onClick={signOut} src={userPhoto} alt='jammer'></UserImg>
                </>)} 
            </Nav>
        </div>
    )
}

export default Header

const Nav = styled.nav `
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    a {
        padding: 0 10px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        // text-transform: uppercase;
        img {
            height:  20px;
            width: auto;
        }
        span {
            color: white;
            letter-spacing: 1px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                position:absolute;
                background:white;
                left: 0;
                right: 0;
                bottom: -6px;
                // opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
}
`
const Logo = styled.img `
    width: 80px;
    height: 70px;
`
const NavMenu = styled.div `
    color: white;
    display: flex;
    justify-content: row;
    flex: 1;
    
    @media screen and (max-width: 1536px) {
        grid-template-columns: repeat(4, minmax(00px, 1fr));
    }
    @media screen and (max-width: 1368px) {
        grid-template-columns: repeat(3, minmax(00px, 1fr));
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(00px, 1fr));
    }

    /* @media screen and (max-width: 0px) {
        position: fixed;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: white;
        width:200px;
        z-index: 2;
        flex-direction: column;
        align-items: flex-start;
        a span {
            margin: 0px;
            padding: 20 20px;
            font-size: 32px;
            color: black;
        }
        a img {
            display: none;
        }
    } */
 
`
const UserImg = styled.img `
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
const Login = styled.div`
    border: 1px solid #f9f9f9;
    color: #f9f9f9;
    border-radius: 4px;
    padding: 8px 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    &:hover {
        background-color:#f9f9f9;
        color: #000;
        border-color: transparent;
        transform: 0.25s;
        cursor: pointer;
    }
`
const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`