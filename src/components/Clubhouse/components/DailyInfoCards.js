import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../style/DailyInfoCards.css'
import { mincrement }  from '../Slices/DailyCardSlice';
import {useEffect, useState} from 'react'

function DailyInfoCards() {
    var dailyCardsDisp = useSelector(state => state.dailycards.dailyCards);
    const [roomCrd, setroomCrd] = useState([]);

    useEffect (() => {
        // setroomCrd(Roomcards); 
        // console.log('Roomcards');
        // console.log(roomCrd);
    }, []);

    const dispatch = useDispatch();
    const LocalDateTimeToAMPMHHMM = (rdate) => {
        var sdate = rdate.split('T');
        var AmPmc = sdate[1].substring(0, 2);
        var AmPC = AmPmc >= "12:00" ? "PM" : "AM";
        return sdate[1].substring(0,sdate[1].length-2) + AmPC;
    }
 
    // const fun = () => {
    //     dispatch(mincrement());
    //     // dispatch(getDailyCards());
    //     console.log('cards!!!!');
    //     console.log(dailyCardsDisp);
    // }

    return (
        <div className="kd-dailyInfoCard-container">
            <div className='kd-dailyInfoCard'>
                { dailyCardsDisp.map((dailycard) => (
                    <div key={dailycard.id}>
                        <span>{LocalDateTimeToAMPMHHMM(dailycard.time)}</span>
                        <div>
                            <span>{dailycard.title}</span>                    
                            <p>{dailycard.description}</p>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div>
            </div>

        </div>
    )
}

export default DailyInfoCards
