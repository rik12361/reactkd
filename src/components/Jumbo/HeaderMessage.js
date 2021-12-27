import React from 'react'
import { FaCheck, FaHome, FaPhoneAlt } from 'react-icons/fa'
import styled from 'styled-components'

function HeaderMessage({showMessageLine}) {
 
    return (
        <div className='kd-fixed'>
            {showMessageLine?
            <GreyBar>
                <div className='kd-Jumbo-container'>
                    <MessageBar>
                        <ServiceMsg>
                            <a href="/"><FaCheck color='rgb(15,198,71)' size='0.8em'/><span>Gratis bezorging of afhalen bij actieproducten</span></a>
                            <a href="/"><FaCheck color='rgb(15,198,71)' size='0.8em'/><span>Grootste assortiment, laagste prijs</span></a>  
                            <a href="/"><FaCheck color='rgb(15,198,71)' size='0.8em'/><span>Vers is ook écht vers</span></a>
                        </ServiceMsg>
                        <ShopsAndCustomerService>
                            <a href="/"><FaHome color='rgb(120,120,120)' size='0.9em'/><span>Winkels & openingstijden</span></a>
                            <a href="/"><FaPhoneAlt color='rgb(120,120,120)' size='0.9em'/><span>Klantenservice</span></a>
                        </ShopsAndCustomerService>
                    </MessageBar>
                </div>
            </GreyBar> : '' }
        </div>
    )
}

export default HeaderMessage

const GreyBar = styled.div`
    display: block;
    position: fixed;
    width: 100%;
    z-index: 4000;
    background-color: var(--jumbo-grey);
    height: 40px;
    @media screen and (max-width: 1024px) {
            display: none;
    }
`
const MessageBar = styled.div`
    display: inline;
    position: relative;
    top: 0px;
    z-index: 4000;
    background-color: var(--jumbo-grey);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    a {
        color: black;
        margin: 0px 16px 0px 16px;
    }
    span {
            font-size: 0.75rem;
            letter-spacing: 0.3px;
            padding: 0px 6px 0px 2px;
            color: black;
            position: relative;
            &:after {
                content: "";
                height: 1px;
                position:absolute;
                background:black;
                left: 0;
                right: 0;
                bottom: 0.1em;
                opacity: 0;
                transform: scaleX(0);
                transition: all 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        @media screen and (max-width: 1024px) {
            display: none;
        }
`
const ServiceMsg = styled.div`
    display: inline;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.75px;
    a:nth-child(1) {
        padding: 0em 0em 0em 0em;
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
    a:nth-child(2) {
        /* padding: 0em 0em 0em 2em; */
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }    
    }

    /* Merkwaardig genoeg blijft de padding van element 2 kracht bij element 3 */
    a:nth-child(3) {

        padding: 0em 0em 0em 2em;
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }

    @media (max-width: 1199px) {
        a:nth-child(3) {
            display:none;
        }
    }
`

const ShopsAndCustomerService = styled.div`
    display: inline;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 2em;
    a:nth-child(1) {
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
    a:nth-child(2) {
        /* padding: 0em 12em 0em 2em; */
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`