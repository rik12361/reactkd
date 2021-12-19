import React from 'react'
import '../style/ClubHouseHome.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDailyCards } from '../Slices/DailyCardSlice'
import DailyInfoCards from '../components/DailyInfoCards';
import RoomInfoCards from '../components/RoomInfoCards';
import ClubHouseHeader from '../components/ClubHouseHeader';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';
import BottomSheet from '../components/BottomSheet';

function ClubHouseHome() {

    const [sheetVisible, setSheetVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(true);
    const [sheetTitle, setSheetTitle] = useState('');
    const [sheetCreateRoom, setSheetCreateRoom] = useState(true);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [cardId, setCardId] = useState(1);
    const dispatch = useDispatch();
    const kaarten = ['aap', 'noot', 'mies'];

    var dailyCards = useSelector(state => state.dailycards.dailyCards);

    useEffect (() => {
        dispatch(fetchDailyCards ())
        console.log('load cards')
        var rik=kaarten.find.isAap;
        setItemsVisible(itemsVisible);
        setSheetCreateRoom(sheetCreateRoom);
        setCardId(cardId);
        console.log(rik);
    }, [dispatch, kaarten.find.isAap, itemsVisible, sheetCreateRoom, cardId]);

    return (
        <div>
            
            {loaderVisible ? 
                (<div className='kd-loader'> <img src='/images/clubhouse/loader.gif' alt="jammer"></img></div>) : 
                ('') }
    
            <ClubHouseHeader></ClubHouseHeader>
            <DailyInfoCards></DailyInfoCards>
            <RoomInfoCards></RoomInfoCards>
            <div className='kd-home-action-button'>
                <button onClick={() => {
                            setSheetVisible(true);
                            setSheetTitle('Start room');
                            console.log(sheetTitle);
                        }}>
                    <AiOutlinePlus className='mr-2'/>
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap/>
                </button>
            </div>
            <BottomSheet
                //rik={(item) => console.log(item)} // hier geef je een callback door. die kun je daar uitvoeren met een arg
                // rik={console.log('ok')} // hier wordt console.log uitgevoerd en het resultaat (undefined) wordt doorgegeven
                //rik={(item) => voegSterrenToe(item)} // hier wordt console.log uitgevoerd en het resultaat (undefined) wordt doorgegeven
                sheetTitle={sheetTitle}
                setSheetTitle= {(item) => setSheetTitle(item)}
                setSheetVisible={(item) => setSheetVisible(item)}
                sheetVisible={sheetVisible}
                cardDetail = {dailyCards.find((item) => item.id === cardId)}
                setItemsVisible={((item) => setItemsVisible(item))}
                setSheetCreateRoom= {(item => {
                    setLoaderVisible(true)
                    setTimeout(() => {
                        setSheetCreateRoom(item);
                        setLoaderVisible(false);
                    }, 1000);
                })}
                >
                
            </BottomSheet>
            {/* <NewRoom 
                sheetTitle='New room'
                setSheetVisible={(item) => setSheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={(item) => setItemsVisible(item)}
            >

            </NewRoom> */}

        </div>
    )
}

export default ClubHouseHome
