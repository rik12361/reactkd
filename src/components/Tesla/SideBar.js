import React from 'react'

const SideBar = ({closeSideBar, sideBarClosed}) => {
    return (
        <div>
                <div id='SideBar'>
                <ul className="kd-white kd-move" id='SideBarUL'>
                    <li id="SideBarTop"><i onClick={closeSideBar} className="fa fa-times"></i></li>
                    <li/>
                    <li>Snel leverbaar</li>
                    <li>Occasions</li>
                    <li>Inruilen</li>
                    <li>Testrit</li>
                    <li>Fleet en business</li>
                    <li>Cybertruck</li>
                    <li>Roadstar</li>
                    <li>Semi</li>
                    <li>Commerciële stroomvoorziening</li>
                    <li>Nutsvoorzieningen</li>
                    <li>Energy</li>
                    <li>Nutsvoorzieningen</li>
                    <li>Vind Tesla</li>
                    <li>Evenementen</li>
                    <li>Support</li>
                    <li>Investeerders</li>
                    <li>Nederland</li>
                    </ul>
                </div>
        </div>
    )
}

export default SideBar