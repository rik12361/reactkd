import React, {useState, useEffect} from 'react'
import { FaCheck, FaHome, FaPhoneAlt } from 'react-icons/fa'
import styled from 'styled-components'
import JumboLeftColumn from './JumboLeftColumn'
function HeaderMessage() {
 
    const [showHeaderMessage, setshowHeaderMessage] = useState(true);
    var aap = false;

    useEffect (() => {
        window.addEventListener("scroll", () => checkRemoveHeaderMessage(setshowHeaderMessage));
        setshowHeaderMessage(true);
        return () => window.removeEventListener("scroll", checkRemoveHeaderMessage);
    }, []);

    const checkRemoveHeaderMessage = () => {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        var sh =  document.documentElement.scrollTop;
        sh > 0? setshowHeaderMessage(false):setshowHeaderMessage(true);
        console.log("JA" + aap);
        console.log("vh " + vh + " sh" + sh + " ==>" + showHeaderMessage);
    }

    return (
        <>
        {showHeaderMessage? (<MessageBar>
            <JumboLeftColumn/>
            <ServiceMesg>
                <a href="#"><FaCheck color='rgb(15,198,71)' size='0.8em'/><span>Gratis bezorging of afhalen bij actieproducten</span></a>
                <a href="#"><FaCheck color='rgb(15,198,71)' size='0.8em'/><span>Grootste assortiment, laagste prijs</span></a>
                <a href="#"><FaCheck color='rgb(15,198,71)' size='0.8em'/><span>Vers is ook écht vers</span></a>
            </ServiceMesg>
            <ShopsAndCustomerService>
                <a href="#"><FaHome color='rgb(120,120,120)' size='0.9em'/><span>Winkels & openingstijden</span></a>
                <a href="#"><FaPhoneAlt color='rgb(120,120,120)' size='0.9em'/><span>Klantenservice</span></a>
            </ShopsAndCustomerService>
        </MessageBar>) : ''}
        </>
 
    )
}

export default HeaderMessage

const MessageBar = styled.div`
    background-color: rgb(227,227,227);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    height: 32px;
    a {
        color: black;
    }
    span {
            font-size: 0.875rem;
            letter-spacing: 0.3px;
            padding: 0px 10px 0px 2px;
            color: black;
            position: relative;
            &:after {
                content: "";
                height: 1px;
                position:absolute;
                background:black;
                left: 0;
                right: 0;
                bottom: 6px;
                // opacity: 0;
                transform: scaleX(0);
                transition: all 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        @media screen and (max-width: 1024px) {
            display: none;
        }

`
const ServiceMesg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.1em;
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
    display: flex;
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