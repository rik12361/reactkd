import React from 'react'
import styled from 'styled-components'

function FooterNeedHelp() {
    return (
        <FooterNeedHelpContainer>
            <p>Hulp nodig?</p>
            <p>Onze ervaren medewerkers staan klaar om je vragen te beantwoorden!</p>
        </FooterNeedHelpContainer>
    )
}

export default FooterNeedHelp

const FooterNeedHelpContainer = styled.div`
    height: 70px;
    width: 452;
    padding: 0px 0px 0px 0px;
    background: var(--bever-grey);
    p {
        margin: 0px;
        padding: 0px;
        font-size: 22px;
    }
    p:first-child {
        font-weight: 600;
        color: white;
    }

    p:last-child {
        font-weight: 100;
        color: white;
        line-height: 1em;
        font-size: 14px;
    }
`