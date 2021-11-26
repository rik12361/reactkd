import React, {useState, useEffect} from 'react'
import { FaChevronDown, FaHeart, FaHeartbeat, FaMale, FaMapMarker, FaSearch, FaShoppingBasket } from 'react-icons/fa';
import styled from 'styled-components'
import JumboLeftColumn from './JumboLeftColumn'
import Modal from 'react-overlays/Modal'
import JumboButton from './components/JumboButton'

function HeaderSearchInfoBar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(false);
        window.addEventListener("click", (e) => checkDisableModal(e, show));
        return () => window.removeEventListener("click", checkDisableModal);
    }, [])

    const checkDisableModal = (e) => {
        
        console.log("JS01 en open modal");
        console.log(e);
        if (e.target.id  != 'JS02') {
            setShow(true);
        }
        if ((e.target.id != 'JS01') && (e.target.id != 'JS02'))
        {
            console.log("JS01 en open modal");
            setShow(false);
        }
    }

    return (
        <div className='kd-Jumbo-container'>
        <FlexMain>
            <FlexLogo>
                <JumboLogo src='/images/jumbo/jum-logo.svg' alt='jammer'></JumboLogo>
            </FlexLogo>

            <FlexGroup>
               <JumboSearch id="JS01" style={{border: '1px solid var( --jumbo-yellow)'}} onFocus={(e) => checkDisableModal(e)} type='search' placeholder='Waar ben je naar op zoek?'></JumboSearch>
               <SearchLoupe>
               <i class="fa fa-search"></i>
                </SearchLoupe>
                {show? (<SearchHint>
                            <span>Tip!</span><span>Je kunt zoeken op bijvoorbeeld ‘groente’, maar ook op merk of productnaam.</span>
                </SearchHint>) : ''}
            </FlexGroup>

            <SearchContainer>
            {show? (<JumboModal>                    
                    </JumboModal>) : '' }
            </SearchContainer>

            <FlexMyJumbo>
                <JumboLocator  className='kd-jumbo-button'><FaMapMarker/></JumboLocator>
                <MyJumbo className='kd-jumbo-button'>
                    <FaMale ></FaMale>
                    <span>Mijn Jumbo</span>
                    <FaChevronDown></FaChevronDown>
                </MyJumbo>
               
                <JumboMyFavorite className='kd-jumbo-button'><FaHeart/></JumboMyFavorite>
                <JumboShoppingCard className='kd-jumbo-button'><FaShoppingBasket/></JumboShoppingCard>
            </FlexMyJumbo>

            <JumboTopMenu></JumboTopMenu>
        </FlexMain>
        </div>
    )
}
export default HeaderSearchInfoBar

const DownArrow = styled.img `
    width: 16px;
    height: 16px;
    color: black;
    background-color: red;
`
const MyJumbo = styled.button`
    margin-left: 0.6em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const JumboLocator = styled.div`
    width: 40px;
    height: 40px;
    padding-top: 4px;
    text-align: center;
    border-radius: 2em;
`

const JumboMyFavorite = styled.button `
    margin-left: 0.5em;
    width: 40px;
    height: 40px;
    border-radius: 2em;
`
const JumboShoppingCard = styled(MyJumbo) `
    margin-left: 0.5em;
    width: 40px;
    height: 40px;
    background-color: var(--jumbo-yellow);
    border-radius: 2em;
`
const JumboTopMenu = styled.div``

const FlexMyJumbo = styled.div`    
    display:flex;
    flex-direction: row;
`
const FlexMain = styled.div`
    display:flex;
    position: relative;
    z-index: 4000;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1.8em 0em;
    background-color: white;
`
const FlexLogo = styled.div `    
    display:flex;
    flex-direction: row;
`
const JumboLogo = styled.img`
    width: 149px;
    height: 29px;
    position: relative;
`
const JumboModal = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`
const FlexGroup = styled.div `
    display:flex;
    position: relative;
    z-index: 5000;
`
const SearchHint = styled.div `    
    position: absolute;
    left: 132px;
    top: 55px;
    padding: 0.3em 0.7em 0.3em 0.7em;
    font-size: small;
    width: 726px;
    height: 40px;
    border: 1px solid;
    border-radius: 0.5em;
    background-color: white;
`

const JumboSearch = styled.input `
    height: 40px;
    width: 726px;
    max-width: 726px;
    padding: 0px 36px;
    margin: 0em 8em;
    border-radius: 1em;
`
const SearchLoupe = styled.div `    
    position: absolute;
    left: 822px;
    top: 7px;
`


// used?

const SearchContainer = styled.div`
    position: relative;
`



