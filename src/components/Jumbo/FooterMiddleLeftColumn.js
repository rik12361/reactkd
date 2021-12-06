import React from 'react'
import styled from 'styled-components'

function FooterMiddleLeftColumn() {
    return (
        <LeftMiddleColumn>
            <h4>Laat je inspireren</h4>
            <div><Link href="#">Nieuwsbrief</Link></div>
            <div><Link href="#">Recepten</Link></div>
            <div><Link href="#">Populairste recepten</Link></div>
            <div><Link href="#">Wat eten we vandaag?</Link></div>
            <div><Link href="#">Vind je perfecte wijn</Link></div>
            <div><Link href="#">Kook- & instructie video’s</Link></div>
            <div><Link href="#">Hallo magazine</Link></div>
            <div><Link href="#">Inspiratie</Link></div>
            <div><Link href="#">Kerst</Link></div>
            <div><Link href="#">Kerstrecepten</Link></div>
            <div><Link href="#">Voorgerecht</Link></div>
            <div><Link href="#">Kerstdiner</Link></div>
            <div><Link href="#">Kerstdessert</Link></div>
            <div><Link href="#">Kerstontbijt</Link></div>
            <div><Link href="#">Hoofdgerecht</Link></div>
            <div><Link href="#">Recepten</Link></div>
            <div><Link href="#">Gourmet</Link></div>
        </LeftMiddleColumn>
    )
}

export default FooterMiddleLeftColumn

const LeftMiddleColumn = styled.div`
    padding: 0px 0px 0px 60px;
    z-index: 3;
    p {
        color: white;
    }

    h4 {
        font-size: 22px;
        font-weight: 600;
        color: white;
    }

`

const Link = styled.a`
    color: white;
    :hover {
        color: white;
        text-decoration: underline;
    }
`