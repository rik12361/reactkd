import {useState} from 'react'
import React from 'react'
import '../../css/kd-general.css'
import '../../css/kd-devices.css'
import '../../css/kd-app.css'
import Header from './Header'
import Section from './Section'
import background1 from './Static/model-3.jpg';
import background2 from './Static/model-y.jpg';
import background3 from './Static/model-s.jpg';
import background4 from './Static/model-x.jpg';
import background5 from './Static/solar-panel.jpg';
import background6 from './Static/solar-roof.jpg';
import background7 from './Static/accessories.jpg';
import favicon from './Static/favicon.ico';
import SectionBackground from './SectionBackground'
import SideBar from './SideBar'

const TeslaApp = () => {
    const  [calcPerc, setCalcPerc ]= useState (1);
    const [pg, setPg]= useState (1);

    const [sideBarClosed, setsideBarClosed]= useState (true);

    const closeSideBar = () => {
        var sBar = document.getElementById('SideBarUL');
        setsideBarClosed(!sideBarClosed);
        sideBarClosed? sBar.style.right='0px' : sBar.style.right='-300px';
    }  
 
    const doSomething = () => {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        var sh =  document.documentElement.scrollTop;
        var perc = sh/vh;
        var truncPerc = Math.trunc(perc + 0.5) + 1;
        perc = perc - Math.trunc(perc);
        setPg((truncPerc));
        perc>=0.5?setCalcPerc((perc - 0.5) * 2) : setCalcPerc(1 - (perc) *2);
    }

    return (
        <div>
            <Header favicon={favicon} closeSideBar={closeSideBar} sideBarClosed={sideBarClosed}  />
            <SideBar closeSideBar={closeSideBar} sideBarClosed={sideBarClosed}></SideBar>
            {pg === 1? <Section background={background1} 
                     title='Model 3'
                     subTitle='Plan een contactloze testrit op locatie'
                     LeftBtnText='Configureren' 
                     RightBtnText='Snel leverbaar'
                     calcPerc={calcPerc}
            ></Section> : < div /> }

            {pg === 2? <Section background={background2} 
                     title='Model Y'
                     LeftBtnText='Configureren' 
                     RightBtnText='Testrit'
                     calcPerc={calcPerc}
            ></Section>: <div /> }

            {pg === 3? <Section background={background3} 
                     title='Model S'
                     LeftBtnText='S Configureren' 
                     RightBtnText='Snel leverbaar'
                     calcPerc={calcPerc}
            ></Section> : <div />}

            {pg === 4? <Section background={background4} 
                     title='Model X'
                     subTitle='niet meer leverbaar'
                     LeftBtnText='Configureren' 
                     calcPerc={calcPerc}
            ></Section> : <div /> }

            {pg === 5? <Section background={background5} 
                     title='Solar en Powerwall'
                     subTitle='Energie voor alles'
                     LeftBtnText='Meer informatie' 
                     calcPerc={calcPerc}
            ></Section> : <div /> }
 
            {pg === 6? <Section background={background6} 
                     title='Zonnepanelen'
                     LeftBtnText='Nu bestellen' 
                     calcPerc={calcPerc}
            ></Section> : <div /> }
 
            {pg === 7? <Section background={background7} 
                     title='Accessoires'
                     LeftBtnText='Nu bestellen' 
                     calcPerc={calcPerc}
            ></Section> : <div /> }

            <SectionBackground background={background1} doSomething={doSomething} calcPerc={calcPerc} pg={pg}  ></SectionBackground> 
            <SectionBackground background={background2} doSomething={doSomething} calcPerc={calcPerc} pg={pg}  ></SectionBackground> 
            <SectionBackground background={background3} doSomething={doSomething} calcPerc={calcPerc} pg={pg}  ></SectionBackground> 
            <SectionBackground background={background4} doSomething={doSomething} calcPerc={calcPerc} pg={pg}  ></SectionBackground> 
            <SectionBackground background={background5} doSomething={doSomething} calcPerc={calcPerc} pg={pg}  ></SectionBackground> 
            <SectionBackground background={background6} doSomething={doSomething} calcPerc={calcPerc} pg={pg}  ></SectionBackground> 
            <SectionBackground background={background7} doSomething={doSomething} calcPerc={calcPerc} pg={pg}  ></SectionBackground> 
        </div>
    )
}

export default TeslaApp