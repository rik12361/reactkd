import React, { useState} from 'react'
import PropTypes from 'prop-types'
import  { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai'
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs'
import '../../style/NewRoom.css'
import cards from './NewRoom.json'

function NewRoom(cardDetail, setSheetVisible) {
    const [micMuteVisible, setmicMuteVisible] = useState(true);
    const [itemsVisible, setItemsVisible] = useState(true);
    const card = cardDetail;
    console.log("SJKJKJ");
console.log(setSheetVisible);
    return (
        <>
            <div className='kd-roomdetail-container'>
                <div className='kd-roomdetail-head'>
                    <div className='d-flex align-items-center'>
                        <a href='' onClick={() => setSheetVisible(false)}></a>
                        <img src='/images/clubhouse/arrow.png' className='kd-arrow-icon' alt='jammer'></img>
                        <span>Hallway</span>
                    </div>
                    <div>
                        <AiOutlineFile></AiOutlineFile>
                        <img src='/images/clubhouse/user-img.jpg' className='kd-user-image'></img>
                    </div>
                </div>
                <div className='kd-room-detailcard'>
                    <div className='d-flex align-items-center justify-content-between flex' style={{padding:'0.5em 1em'}}>
                            {cards.members.map(((item) => 
                                // <p>{item.first_name}</p>
                                    (<div key='first_name' className='kd-member-container' >
                                     {micMuteVisible === true? (
                                         <div className='kd-audio-icon'>
                                             <BsMicMuteFill/>
                                         </div>
                                     ) : ('')}
                                     <img src='/images/clubhouse/user-img.jpg' alt='jammer' className='kd-user-start-a-room'></img>
                                     <p>
                                         <span>.</span>
                                         {item.first_name}
                                    </p>
                                    </div>)
                                   ))}
                    </div>
                </div>
                <div className='kd-footer-new-room'>
                    <button onClick={() => setSheetVisible(false)}>
                        <img src='/images/clubhouse/hand-peace.png' className='kd-newroom-hand-peace' alt='jammer'></img>
                    </button>
                    <div>
                        <AiOutlinePlus></AiOutlinePlus>
                    </div>
                    <button onClick={() =>console.log(setSheetVisible)}>
                        <img src='/images/clubhouse/stopHandIcon.png' className='kd-newroom-hand-peace' alt='jammer'></img>
                    </button>
                    <button onClick={() => setmicMuteVisible(!micMuteVisible)}>
                        {micMuteVisible? <BsMicMuteFill/> : <BsMicFill/>}
                    </button>
                </div>
            </div>
        </>
    )
}

NewRoom.propTypes = {

}

export default NewRoom

