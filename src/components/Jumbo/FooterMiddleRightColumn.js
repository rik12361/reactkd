import React from 'react'
import styled from 'styled-components'

function FooterMiddleRightColumn() {
    return (
        <RightMiddleColumn>
            <h4>Over Jumbo</h4>
            <div><Link href="#">Nieuwsbrief</Link></div>
            <div><Link href="#">>De 7 Zekerheden</Link></div>
            <div><Link href="#">Werken bij Jumbo</Link></div>
            <div><Link href="#">Online boodschappen doen</Link></div>
            <div><Link href="#">Thuisbezorgen</Link></div>
            <div><Link href="#">Boodschappen ophalen</Link></div>
            <div><Link href="#">Openingstijden</Link></div>
            <div><Link href="#">Het bedrijf Jumbo</Link></div>
            <div><Link href="#">100-jarig jubileum</Link></div>
            <div><Link href="#">Duurzaamheid</Link></div>
            <div><Link href="#">Foodcoach</Link></div>
            <div><Link href="#">Pers</Link></div>
            <div><Link href="#">Corona maatregelen</Link></div>
            <div><Link href="#">Jumbo België</Link></div>
        </RightMiddleColumn>
    )
}

export default FooterMiddleRightColumn

const RightMiddleColumn = styled.div`
    padding: 0px 0px 0px 120px;
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