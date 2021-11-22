import React from 'react'
import styled from 'styled-components'
import JumboLeftColumn from './JumboLeftColumn'

function HeaderSearchInfoBar() {
    return (
        <FlexMain>
            <JumboLeftColumn/>
            <FlexLogo>
                <JumboLogo src='/images/jumbo/jum-logo.svg' alt='jammer'></JumboLogo>
            </FlexLogo>
            <FlexSearch>
                <JumboSearch></JumboSearch>
            </FlexSearch>
            <FlexMyJumbo>
                <JumboLocator></JumboLocator>
                <JumboMyJumbo></JumboMyJumbo>
                <JumboMyFavorite></JumboMyFavorite>
                <JumboShoppingCard></JumboShoppingCard>
            </FlexMyJumbo>
            <JumboTopMenu></JumboTopMenu>
        </FlexMain>
    )
}

export default HeaderSearchInfoBar
const FlexMain = styled.div`
    display:flex;
    flex-direction: row;
`
const FlexLogo = styled.div `    
    display:flex;
    flex-direction: row;
`
const FlexSearch = styled.div `    
display:flex;
flex-direction: row;
`
const FlexMyJumbo = styled.div `    
display:flex;
flex-direction: row;
`
const JumboLogo = styled.img`
    width: 149px;
    height: 29px;
`
const JumboSearch = styled.div``
const JumboLocator = styled.div``
const JumboMyJumbo = styled.div``
const JumboMyFavorite = styled.div``
const JumboShoppingCard = styled.div``
const JumboTopMenu = styled.div``
