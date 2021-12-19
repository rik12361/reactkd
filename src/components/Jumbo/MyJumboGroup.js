import React, {useState} from 'react'
import { FaChevronDown, FaHeart, FaMale, FaMapMarker, FaShoppingBasket } from 'react-icons/fa';
import styled from 'styled-components'
import MyJumboDropdownMenu from './MyJumboDropdownMenu'

function MyJumboGroup() {

    const [showDropDown, setShowDropDown] = useState(false)

    const openDropdown = () => {
        setShowDropDown(true);
    }

    return (
        <MyJumboContainer>
            <FlexMyJumbo>
                <JumboLocator href="#" className='kd-jumbo-button'><FaMapMarker/></JumboLocator>
                <MyJumbo className='kd-jumbo-button' onClick={() => openDropdown()}>
                    <FaMaleStyle><FaMale></FaMale></FaMaleStyle>
                    <span>Mijn Jumbo</span>
                    <FaChevronStyle style={{ transform: showDropDown? 'rotate(180deg)' : '',
                                             transition: 'transform 250ms ease-out'
                                            }}><FaChevronDown></FaChevronDown></FaChevronStyle>
                </MyJumbo>
                <JumboMyFavorite href="#" className='kd-jumbo-button'><FaHeart/></JumboMyFavorite>
                <JumboShoppingCard href="#" className='kd-jumbo-button'><FaShoppingBasket/></JumboShoppingCard>
            </FlexMyJumbo>
            <MyJumboDropdownMenu showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
        </MyJumboContainer>
    )
}
export default MyJumboGroup

const MyJumboContainer = styled.div`
    position: relative;
`
const FlexMyJumbo = styled.div`
    height: 60px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    z-index: 580;
    @media (max-width: 960px) {
        height: 44px;
        padding: 2px;
    }    
`
const FaChevronStyle = styled.span`
    width: 40px;
    @media (max-width: 960px) {
        display: none;
    }    
`
const FaMaleStyle = styled.span`
    width: 40px;
    padding: 4px 0px;
    margin: 0px;
`

const JumboLocator = styled.a`
    width: 40px;
    padding-top: 4px;
    text-align: center;
    border-radius: 100%;
    margin: 0px;

    @media (max-width: 960px) {
        display: none;
    }
`
const MyJumbo = styled.a`
    margin-left: 0.6em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span:nth-child(2) {
        width: 100px;
        @media (max-width: 960px) {
            display: none;
        }
    }
`

const JumboMyFavorite = styled.a `
    margin-left: 0.5em;
    width: 40px;
    border-radius: 2em;
    padding: 4px 0px 0px 3px;
    
`
const JumboShoppingCard = styled.a`
    width: 40px;
    margin-left: 0.5em;
    background-color: var(--jumbo-yellow);
    border-radius: 2em;
    padding: 4px 0px 4px 0px;
    @media (max-width: 1100px) {
        margin-right: 17px;
    }
`
