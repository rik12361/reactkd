import React from 'react'
import styled
 from 'styled-components'
function MobileExtraInfo({sWidth}) {
    return (
        <div>
            {sWidth<=640? 
                <ExtraInfoContainer>
                        <ExtraOption href='#' >
                            <ImgOption src="/images/jumbo/Toptaak-s-actuele-maatregelen.webp" alt='jammer'></ImgOption>
                        </ExtraOption>
                        <ExtraOption href='#' >
                            <ImgOption src="/images/jumbo/Homepage-toptaak-Online-bestellen-S.webp" alt='jammer'></ImgOption>
                        </ExtraOption>
                        <ExtraOption href='#' >
                            <ImgOption src="/images/jumbo/Toptaak-Extra-S.webp" alt='jammer'></ImgOption>
                        </ExtraOption>
                    </ExtraInfoContainer> 
            : ''}
        </div>
    )
}

export default MobileExtraInfo

const ExtraInfoContainer = styled.div`
    @media (max-width: 640px) {margin: 210px 0vh 0vh 0vh;}
    @media (max-width: 480px) {margin: 110px 0vh 0vh 0vh;}
    @media (max-width: 384px) {margin: 100px 0vh 0vh 0vh;}
`

const ExtraOption = styled.a`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: auto;
    @media (max-width: 640px) {width: 620px; height: 100px; margin: 10px 0px;} 
    @media (max-width: 480px) {width: 460px; height: 80px; margin: 7px 0px;}
    @media (max-width: 480px) {width: 380px; height: 60px; margin: 7px 0px;}
 `

const ImgOption = styled.img`
    width: 90%;
    height: 90%;
`