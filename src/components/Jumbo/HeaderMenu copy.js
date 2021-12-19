import React, {useState} from 'react'
import styled from 'styled-components'
import MenuData from './data/HeaderMenuBar.json'

function HeaderMenuBar({showMessageLine}) {

    const [showModal, setshowModal] = useState(false)

    const showModalAndMenu = (newState) => {
        setshowModal(newState);
        // var d = new Date();
        // console.log("hovering..." + d.getSeconds());
    }

    return (
        <div>
           <HeaderMenuBarContainer>
            {showModal? (<JumboModal/>) :  ('') }
                <div className='kd-Jumbo-container kd-relative'>
                    <MenuHeader>
                        {MenuData.map((menuItem) => (
                            <ul onMouseOver={() => showModalAndMenu(true)} onMouseLeave={() => showModalAndMenu(false)}>
                            <div><a href="/"><span>{menuItem.title}</span></a></div>
                            <div>
                            {menuItem.producten !== 0?  
                                <li><a href="/">{menuItem.producten.map((productGroep) => <a href='/'>{productGroep.ProductGroep}</a>)}</a></li>
                                : ''                                
                            }
                            </div>
                            </ul>
                            ))}
                    </MenuHeader>
                </div> 
            </HeaderMenuBarContainer> 
        </div>
    )
}
export default HeaderMenuBar

const MenuHeader = styled.div`
    position: absolute;
    top: 91px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 300;
`
const HeaderMenuBarContainer = styled.div`
    top: 40px;
    position: relative;
    height: 40px;
    width: 100%;
    ul:hover > div a span:nth-child(1)::after {
        opacity: 1;
    }

    ul:hover > div li {
        display: flex;
    }

    span:nth-child(2) {
        display: list-item;
        border: 1px solid black;
        border-radius: 1em;
        position: absolute;
        background-color: yellow;
        top: 0px;
        margin-top: 0px;
        top: 31px;
        padding: 0px 0px;
    }

    ul {
        position: relative;
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        a {
            span:nth-child(1) {
                color: black;
                font-size: 14px;
                padding-right: 30px;
                font-weight: 800;
                &::after {
                    position:absolute;
                    opacity: 0;
                    content: "";
                    height: 4px;
                    background:var(--jumbo-yellow);
                    top: 36px;
                    left: 0;
                    right: 0;
                    bottom: 0px;
                    /* transform: scaleX(0);
                    transition: all 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; */
                }
            }

        }
    }
    li {
        list-style-type: none;
        position: absolute;
        top: 53px;
        padding-top: 1em;
        color: black;
        padding: 0px;
        display: none;
        background-color: white;
        padding: 1em;
        border-radius: 1em;
        width: 260px;
        overflow-x: hidden;
        a {
            top: 10px;
            left: 0px;
            color: black;
        }
    }

`

const JumboModal = styled.div`
  position: fixed;
  display: flex;
  top: 171px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;

 @media (max-width: 1999px) {
        top: 171px;
    }
`

