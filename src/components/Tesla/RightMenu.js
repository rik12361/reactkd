import React from 'react'

const RightMenu = ({closeSideBar, sideBarClosed}) => {

    return (
        <div id='RightMenu'>
            {/* <button onClick={() =>closeSideBar()}>x</button> */}
            <a href="#RightMenu">Support</a>
            <a href="#RightMenu">Shop</a>
            <a href="#RightMenu">Account</a>
            <a href="#RightMenu" onClick={() =>closeSideBar()}>Menu</a>
        </div>
    )
}

export default RightMenu
