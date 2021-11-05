import React from 'react'
import styled from 'styled-components'
import logo from './static/logo.svg'
import home from './static/home-icon.svg'
import search from './static/search-icon.svg'
import watchlist from './static/watchlist-icon.svg'
import original from './static/original-icon.svg'
import series from './static/series-icon.svg'
import userImg from './static/Rik 2014.jpg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Nav>
                <Logo src={logo}/>
                <NavMenu>
                    <a href="www.nu.nl">
                        <Link to={'/disney'}>
                        <img src={home} alt='jammer'/>
                        <span>Home</span>
                        </Link>
                    </a>
                    <a href="www.nu.nl">
                        <img src={search} alt='jammer'/>
                        <span>search</span>
                    </a>
                    <a href="www.nu.nl">
                        <img src={watchlist} alt='jammer'/>
                        <span>watchlist</span>
                    </a>
                    <a href="www.nu.nl">
                        <img src={original} alt='jammer'/>
                        <span>original</span>
                    </a>
                    <a href="www.nu.nl">
                        <img src={series} alt='jammer'/>
                        <span>series</span>
                    </a>
                </NavMenu>
                <Link to='/disney/Login'>
                <UserImg src={userImg} alt='jammer'></UserImg>
                </Link>
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
    @media (max-width: 679px) {
        display: none;
    }
    color: white;
    display: flex;
    justify-content: row;
    flex: 1;
`
const UserImg = styled.img `
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
`