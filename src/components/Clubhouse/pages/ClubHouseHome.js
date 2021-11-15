import React from 'react'
import '../style/ClubHouseHome.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDailyCards } from '../Slices/DailyCardSlice'
import DailyInfoCards from '../components/DailyInfoCards';
import RoomInfoCards from './RoomInfoCards';
import ClubHouseHeader from '../components/ClubHouseHeader'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsGrid3X3Gap } from 'react-icons/bs'

function ClubHouseHome() {
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchDailyCards ())
        console.log('load cards')
    }, []);

    return (
        <div>
            <ClubHouseHeader></ClubHouseHeader>
            <DailyInfoCards></DailyInfoCards>
            <RoomInfoCards></RoomInfoCards>
            <div className='kd-home-action-button'>
                <button>
                    <AiOutlinePlus className='mr-2'/>
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap/>
                </button>
            </div>
        </div>
    )
}

export default ClubHouseHome
