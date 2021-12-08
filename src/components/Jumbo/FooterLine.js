import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'

function FooterLine({sWidth}) {
    return (
        <div className='kd-Jumbo-container'>
            {sWidth<=1100?
             ''
             :
            <FlexContainer>
            <LeftBlock>
                <Link href='#'><span>Algemene voorwaarden</span></Link>
                <Link href='#'><span>Cookies & privacy</span></Link>
                <Link href='#'><span>Sitemap</span></Link>
                <Link href='#'><span>Cookie voorwaarden</span></Link>
            </LeftBlock>
            <RightBlock>
                <Link href='#'><span><FaFacebook style={{width:'24px', height:'24px'}}/></span></Link>
                <Link href='#'><span><FaPinterest style={{width:'24px', height:'24px'}}/></span></Link>
                <Link href='#'><span><FaInstagram style={{width:'24px', height:'24px'}}/></span></Link>
                <Link href='#'><span><FaTwitter style={{width:'24px', height:'24px'}}/></span></Link>
                <Link href='#'><span><FaYoutube style={{width:'24px', height:'24px'}}/></span></Link>
            </RightBlock>
            </FlexContainer>
            }
        </div>
    )
}

export default FooterLine

const FlexContainer = styled.div`
    margin: 16px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const LeftBlock = styled.div`
    display: flex;
    flex-direction: row;
    span {
        font-size: 12px;
        padding: 0px 32px 0px 0px;
    }
`
const RightBlock = styled.div`
    display: flex;
    flex-direction: row;
    span {
        padding: 0px 12px 0px 0px;
    }
    span:hover {
        color: grey;
    }
`
const Link = styled.div`
    color: white;
    :hover {
        color: white;
        text-decoration: underline;
    }
`
 /* @media (max-width: 7681px) {} 
    @media (max-width: 3840px) {} 
    @media (max-width: 2560px) {} 
    @media (max-width: 1920px) {} 
    @media (max-width: 1536px) {} 
    @media (max-width: 1280px) {} 
    @media (max-width: 1100px) {} 
    @media (max-width: 980px) {} 
    @media (max-width: 768px) {} 
    @media (max-width: 640px) {} 
    @media (max-width: 480px) {} 
    @media (max-width: 384) {}  */