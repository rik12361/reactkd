import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

function HeaderSearchInfoBar({showMessageLine, setScrollable}) {
    const [show, setShow] = useState(false);
    const [showTip, setShowTip] = useState(false);
    const [showDefaultTip, setShowDefaultTip] = useState(true);
    const [showDropDown, setShowDropDown] = useState(false);
    const defaultTip = "Je kunt zoeken op bijvoorbeeld ‘groente’, maar ook op merk of productnaam.";
    const [tip, setTip] = useState('');

    const searchRef = useRef();
    const searchTipRef = useRef();
    const searchLoupeRef = useRef();

     useEffect(() => {
        console.log("USEFFECT+++++++++++++++++++");
        console.log(setScrollable);

        setShow(false);
        setShowTip(false);
        setShowDropDown(false);
        setShowDefaultTip(true);
    }, [setScrollable]);

    const searchEntered = (e) => {
        console.log(e.target.value);
        setShowDropDown(false);
        setShowDefaultTip(true);
        setShow(true);
        setScrollable(false);
        searchRef.current.style.border = '1px solid var(--jumbo-yellow)';

        if (e.target.value.length === 0) 
        {
            setShowTip(true);
            setShowDefaultTip(true);
            setShowDropDown(false)
        }

        if (e.target.value.length < 3 && e.target.value.length > 0 ) 
        {
                setShowTip(false);
                setShowDefaultTip(false);
                setShowDropDown(false)
                setTip(e.target.value);
        } 

        if (e.target.value.length >= 3) 
        {
                setShowTip(true);
                setShowDefaultTip(false);
                setShowDropDown(true) 
                setTip(e.target.value);
        }
    }

    const checkDisableModal = (e) => {
        const width = window.innerWidth;

        // console.log(e);
        if ((e.target === searchRef.current) || (e.target === searchLoupeRef.current))
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
               <JumboSearch style={{border: '1px solid grey'}}
                            onFocus={(e) => enableModal(e)} 
                            onChange={(e) => searchEntered(e)}   
                            type='search' placeholder='Waar ben je naar op zoek?' 
                            ref={searchRef}
                            ></JumboSearch>
                {show? 
                        <Fade right><CLoseButton onClick={() => disableSearchTip() }>Sluiten</CLoseButton></Fade>
                        : ''}
               <SearchLoupe>
                <i ref={searchLoupeRef} id='searchLoupe' class="fa fa-search"></i>
                </SearchLoupe>
                {showTip? (
                    <SearchHint ref={searchTipRef}>                        
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
            {show? (<JumboModal style={{backgroundColor: 'rgba(,0,0,0.5'}}>                    
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
    z-index: 600;
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
    outline: none;
    padding: 0px 36px;
    margin: 0px 127px;
    border-radius: 2em;
    border: 1px solid var(--jumbo-grey);

    @media (max-width: 7681px) {width:726px;margin:0px 127px;} 
    @media (max-width: 1920px) {width:726px;margin:4px 127px;} 
    @media (max-width: 1536px) {width:700px;margin:4px 85px;} 
    @media (max-width: 1280px) {width:600px;margin:4px 84px;}
    @media (max-width: 1100px) {width:508px;margin:4px 40px;} 
    @media (max-width: 980px) {width:940px;margin:4px 10px;} 
    @media (max-width: 768px) {width:748px;margin:4px 8px;} 
    @media (max-width: 640px) {width:618px;margin:3px 8px;} 
    @media (max-width: 480px) {width:460px;margin:5px 5px;} 
    @media (max-width: 384) {width:363px;margin:5px 5px;}

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
    
    @media (max-width: 7681px) {width:726px;left:127px} 
    @media (max-width: 1920px) {width:726px;left:127px} 
    @media (max-width: 1536px) {width:700px;left:90px} 
    @media (max-width: 1280px) {width:600px;left:90px} 
    @media (max-width: 1100px) {width:508px;left:40px} 
    @media (max-width: 980px) {width:852px;left:15px} 
    @media (max-width: 768px) {width:670px;left:8px} 
    @media (max-width: 640px) {width:549px;left:5px} 
    @media (max-width: 480px) {width:390px;left:5px} 
    @media (max-width: 384px) {width:297px;left:5px}
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
    position: absolute;
    left: 818px;
    top: 10px;

    @media (max-width: 7681px) {left:818px} 
    @media (max-width: 1920px) {left:818px} 
    @media (max-width: 1536px) {left:750px} 
    @media (max-width: 1280px) {left:649px} 
    @media (max-width: 1100px) {left:517px} 
    @media (max-width: 980px) {left:25px} 
    @media (max-width: 768px) {left:18px} 
    @media (max-width: 640px) {left:15px} 
    @media (max-width: 480px) {left:15px} 
    @media (max-width: 384) {left:15px;}    
`

const SearchContainer = styled.div`
    position: relative;
`



