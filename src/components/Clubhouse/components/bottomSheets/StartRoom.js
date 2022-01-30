import React, { useState} from 'react'
import '../../style/StartRoom.css'
import {FcGlobe} from 'react-icons/fc'

function StartRoom({setSheetCreateRoom, setSheetVisible, setSheetTitle, sheetTitle}) {
    const [room, setRoom] = useState('');
    console.log("Sheetvi");
    console.log(setSheetVisible);
    return (
        <div>
        <div className='kd-switch-line'>
            
        </div>
        <div className='kd-text-right'>
            <button className='kd-add-topic-btn'>
                <span>+ Add a toppic</span>
            </button>
            <div className='kd-select-room'>
                <button className={room ==='open'? 'kd-active' : ""} onClick={() => setRoom('open')}>
                    <div>
                        <FcGlobe />
                    </div>
                    Open
                </button>
                <button className={room === 'social'? 'kd-active' : ""} onClick={() => setRoom('social')}>
                    <div>
                        <FcGlobe />
                    </div>
                    Social
                </button>
                <button className={room === 'closed'? 'kd-active' : ""} onClick={() => setRoom('closed')}>
                    <div>
                        <FcGlobe />
                    </div>
                    Closed
                </button>
            </div>
            <p><span >{room === 'closed' ? 'For people I choose':
                       room === 'social' ? 'For people I follow':
                       'open to everone'}</span>
            </p>
            <div className='kd-text-center'>
                <button className='kd-let-go-btn' onClick={() => {
                            setSheetCreateRoom(true);
                            setSheetVisible(true);
                            setSheetTitle('New room');
                        }
                    }><span className='kd-12-r-p'>🎉</span>Let's go!</button>
            </div>
                       
        </div>
        </div>
    )
}

export default StartRoom
