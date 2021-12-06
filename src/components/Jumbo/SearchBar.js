import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
import ShowScreenResolution from './ShowScreenResolution'

function HeaderSearchInfoBar({showMessageLine, setScrollable}) {
    const [show, setShow] = useState(false);
    const [showTip, setShowTip] = useState(false);
    const [showDefaultTip, setShowDefaultTip] = useState(true);
    const [showDropDown, setShowDropDown] = useState(false);
    const [searchId, setSearchId] = useState("searchText");
    const defaultTip = "Je kunt zoeken op bijvoorbeeld ‘groente’, maar ook op merk of productnaam.";

    const [searchWidth, setSearchWidth] = useState('726px');
    const [searchMargin, setSearchMargin] = useState('0px 127px');

    const [searchTipWidth, setSearchTipWidth] = useState('726px');
    const [searchTipLeft, setSearchTipLeft] = useState('127px');

    const [loupeLeft, setLoupeLeft] = useState('818px');
    const [modalBackgroundColor, setModalBackgroundColor] = useState('rgba(,0,0,0.5');
    const [tip, setTip] = useState('');

    const searchRef = useRef();
    const searchTipRef = useRef();
    const searchLoupeRef = useRef();
    const loupeTop = '16px';

     useEffect(() => {
        console.log("USEFFECT+++++++++++++++++++");
        console.log(setScrollable);

        setShow(false);
        setShowTip(false);
        setShowDropDown(false);
        setShowDefaultTip(true);
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () =>  {
            window.removeEventListener("click", checkDisableModal)
            window.removeEventListener('resize',updateDimensions);
        }
    }, []);

    const updateDimensions = () => {
        var sWidth ='726px';
        var sbWidth ='726px';
        var sbLeft ='127px';
        var sMargin = '0px 127px';
        var sBackground = 'white';
        var sLoupe = "818p";
        const width = window.innerWidth;
        // console.log("UPDATE DIMENSION !!!!!!!!!!!!!!!")

        if (width <=1920) {
            sWidth = '726px';
            sbWidth = '726px';
            sbLeft ='127px'
            sMargin = '4px 127px';
            sLoupe = "818px";
            sBackground = 'red';
        }

        if (width <=1536) {
            sWidth = '700px';
            sbWidth = '700px';
            sbLeft ='90px'
            sMargin = '4px 85px';
            sLoupe = "750px";
            sBackground = 'green';
        }

        if (width <=1280) {
            sWidth = '600px';
            sbWidth = '600px';
            sbLeft ='90px'
            sMargin = '4px 84px';
            sBackground = 'blue';
            sLoupe = "649px";
        }

        if (width <=1100) {
            sWidth = '524px';
            sbWidth = '524px';
            sbLeft ='40px'
            sMargin = '4px 40px';
            sBackground = 'grey';
            sLoupe = "535px";
        }

        if (width <=960) { // break
            sWidth = '940px';
            sbWidth = '860px';
            sbLeft ='15px'
            sMargin = '4px 10px';
            sLoupe = "25px";
            sBackground = 'orange';
            // setModalBackgroundColor('rgba(255,255,255,0.5');
        }

        if (width <=768) {
            sWidth = '748px';
            sbWidth = '670px';
            sbLeft ='8px'
            sMargin = '4px 8px';
            sLoupe = "18px";
            sBackground = 'yellow';
        }
        if (width <=640) {
            sWidth = '618px';
            sbWidth = '549px';
            sbLeft ='6px'
            sMargin = '3px 5px';
            sLoupe = "15px";
            sBackground = 'pink';
        }
        if (width <=480) {
            sWidth = '460px';
            sbWidth = '390px';
            sbLeft ='5px'
            sMargin = '5px 5px';
            sLoupe = "15px";
            sBackground = 'purple';
        }

        if (width <=384) {
            sWidth = '363px';
            sbWidth = '297px';
            sbLeft ='5px'
            sMargin = '5px 5px';
            sLoupe = "15px";
            sBackground = 'purple';
        }
        // console.log('sbwith');
        // console.log(sbWidth);

        // searchRef.current.style.background = sBackground;

        setSearchWidth(sWidth);
        setSearchMargin(sMargin)
        setSearchTipLeft(sbLeft);
        setSearchTipWidth(sbWidth);
        setLoupeLeft(sLoupe);
}

    const searchEntered = (e) => {
        // console.log("LET OP SEARCH !!!!!!!!!!!!!!!")
        console.log(e.target.value);
        setShowDropDown(false);
        setShowDefaultTip(true);
        setShow(true);
        setScrollable(false);
        searchRef.current.style.border = '1px solid var(--jumbo-yellow)';

        if (e.target.value.length == 0) 
        {
            setShowTip(true);
            setShowDefaultTip(true);
            setShowDropDown(false)
            console.log("Len=0");
        }

        if (e.target.value.length < 3 && e.target.value.length > 0 ) 
        {
                console.log("Ja");
                setShowTip(false);
                setShowDefaultTip(false);
                setShowDropDown(false)
                console.log("Len 0-3");
                setTip(e.target.value);
        } 

        if (e.target.value.length >= 3) 
        {
                console.log("Nee");
                setShowTip(true);
                setShowDefaultTip(false);
                setShowDropDown(true) 
                setTip(e.target.value);
                // console.log("Len>3");
        }
    }

    const checkDisableModal = (e) => {
    {
        // console.log("CHECK DISAVLES !!!!!!!!!!!!!!!")
            // console.log(searchRef);
            // console.log(searchLoupeRef);
            const width = window.innerWidth;

            // console.log(e);
            if ((e.target == searchRef.current) || (e.target == searchLoupeRef.current))
            {
                // console.log("searchtext true");
                searchEntered(e);
            }
            else
            {
                // console.log("CHECK DISABLE SHOW !!!!!!!!!!!!!!!");
                if (width > 960)
                {
                    disableSearchTip();
                }
            }
        }
    }

    const disableSearchTip = () => {
        setShow(false);
        setShowTip(false);
        setScrollable(true);
        searchRef.current.style.border = '1px solid grey';
    }
    const enableModal = (e) =>
    {
        // console.log("ENAVLES !!!!!!!!!!!!!!!")
        setShow(true);
        setShowTip(true);
        setShowDefaultTip(true);
        setShowDropDown(false)
    }

    return (
        <div>
        {true? 
        <HeaderSearchContainer onClick={(e) => checkDisableModal(e) }>
            {/* <ShowScreenResolution/> */}
            <FlexGroup>
               <JumboSearch style={{border: '1px solid grey', width:searchWidth, margin:searchMargin}}
                            onFocus={(e) => enableModal(e)} 
                            onChange={(e) => searchEntered(e)}   
                            type='search' placeholder='Waar ben je naar op zoek?' 
                            ref={searchRef}
                            ></JumboSearch>
                {show? 
                        <Fade right><CLoseButton onClick={() => disableSearchTip() }>Sluiten</CLoseButton></Fade>
                        : ''}
               <SearchLoupe>
                <i ref={searchLoupeRef} style={{position: 'absolute', top: loupeTop, left : loupeLeft}} id='searchLoupe' class="fa fa-search"></i>
                </SearchLoupe>
                {showTip? (
                    <SearchHint ref={searchTipRef} style={{left: searchTipLeft, width: searchTipWidth}}>                        
                            { showDefaultTip? 
                                (
                                    <span><TIP>Tip!</TIP><span>{defaultTip}</span></span>
                                ) : '' 
                            } 
                            { showDropDown?
                                (
                                    <span>{tip}
                                    </span>
                                ) : '' 
                            }
                    </SearchHint>) : ''}
            </FlexGroup>

            <SearchContainer>
            {show? (<JumboModal style={{backgroundColor: modalBackgroundColor}}>                    
                    </JumboModal>) : '' }
            </SearchContainer>

        </HeaderSearchContainer>
         : ''}
         </div>
    )
}
export default HeaderSearchInfoBar

const HeaderSearchContainer = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    background-color: white;

`
const JumboModal = styled.div`
    position: fixed;
    z-index: 500;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);

    @media (max-width: 961px) {
        top: 90px;
        background-color: rgba(255,255,255,0.9);
        z-index: 100;
    }
    
`
const FlexGroup = styled.div `
    display:flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    height: 40px;
    z-index: 580;
`
const TIP = styled.span`
    font-family: serif;
    font-style: italic;
    font-weight: 600;
`

const JumboSearch = styled.input `
    height: 41px;
    /* width: 726px; */
    /* max-width: 726px; */
    /* border-style: none;  */
    outline: none;
    padding: 0px 36px;
    margin: 0px 127px;
    border-radius: 2em;
    border: 1px solid var(--jumbo-grey);
`
const SearchHint = styled.div `    
    position: absolute;
    left: 127px;
    top: 50px;
    padding: 0.3em 0.7em 0.3em 0.7em;
    font-size: small;
    width: 726px;
    min-height: 40px;
    border: 1px solid;
    border-radius: 1em;
    background-color: white;

    span {
        background-color: white;
    }
`
const CLoseButton = styled.button`
    display: none;
    width: 80px;
    height: 40px;
    border-radius: 2em;
    border: none;
    background-color: transparent;
    font-size: 14px;
    padding: 0px 14px;
    
    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 961px) {
        display: inline-block;
    }
`
const SearchLoupe = styled.div `    
    /* position: absolute;
    left: 818px;
    top: 10px; */
`

// used?

const SearchContainer = styled.div`
    position: relative;
`



