import React from 'react'
import styled from 'styled-components'
import menuData from './BeverMenu.json'

function ShowBlock({groupnm}) {
    return (
        <MenuBlock>
             {/* {menuData.menuItems.map((item) => <p1>{item.menuGroup}</p1>)} */}
             {/* <h1>{menuData[0].menuGroup.menuItems[0]}</h1> */}
            <h1>{groupnm}</h1>
        </MenuBlock>
    )
}

export default ShowBlock

const MenuBlock = styled.div`
    position: relative;
    z-index: 500;
`