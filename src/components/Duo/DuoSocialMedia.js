import React from 'react';
import styled from 'styled-components';

function DuoSocialMedia() {
  return <div>
    <OuterContainer className='kd-duo-container'>
        <InnerContainer>
            <hr></hr>
            <Header>Sociale Media</Header>
            <Media><img src="https://img.icons8.com/color/48/000000/facebook.png"/><a href="/">Facebook Duo</a></Media>
            <Media><img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/><a href="/">Twitter Duo</a></Media>
            <Media><img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"/><a href="/">Instagram Duo</a></Media>
            <Media><img src="https://img.icons8.com/color/48/000000/linkedin.png"/><a href="/">Linkedin Duo</a></Media>
            <Media><img src="https://img.icons8.com/color/48/000000/youtube-play.png"/><a href="/">Youtube Duo</a></Media>
            <Media><img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/><a href="/">WhatsApp Duo</a></Media>
        </InnerContainer>
    </OuterContainer>
  </div>;
}

export default DuoSocialMedia;

const OuterContainer = styled.div`
  height: 360px;
`
const InnerContainer = styled.div`
    width: 20vw;
`
const Header = styled.div`
    color: black;
    font-size: 24px;
    font-weight: 600;
`
const Media = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 10px 0px 0px 0px;

    img {
        width: 32px;
        height: 32px;
    }
    a {
        padding: 0px 0px 0px 8px;
        color: var(--duoLightBlue);
        font-size: 20px;
    }
    a:hover {
        text-decoration: underline;        
    }
`
const InnearContainer = styled.div`
`