import React from 'react'
import { useEffect } from 'react'
import faviconIco from './Static/favicon.ico'
import LeftMenu from './LeftMenu';
import MidMenu from './MidMenu';
import RightMenu from './RightMenu';
import logo from './Static/logo.svg';

const Header = ({favicon, closeSideBar, sideBarClosed}) => {

    useEffect(() => {
        const faviconUpdate = async () => {
          console.log(closeSideBar);
        const elfavicon = document.getElementById("favicon");
        elfavicon.href = './Static/favicon.ico';
        };
        faviconUpdate();
      }, []);

    return (

            <div id='Container' >
              {/* <button onClick={() => closeSideBar()}>XX</button> */}
                  <LeftMenu>
                  </LeftMenu>
                  <MidMenu>
                  </MidMenu> 
                  <RightMenu closeSideBar={ closeSideBar } sideBarClosed={sideBarClosed}>
                  </RightMenu>
            </div>
    )
}

export default Header
