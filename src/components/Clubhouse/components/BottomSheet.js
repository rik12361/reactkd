import React from 'react'
import SwipeAbleBottomSheet from 'react-swipeable-bottom-sheet'
import '../style/BottomSheet.css'
import StartRoom from '../components/bottomSheets/StartRoom'
import AppLayout from '../layouts/AppLayout'
import NewRoom from './bottomSheets/NewRoom'

function BottomSheet({sheetTitle, setSheetTitle, setSheetVisible, sheetVisible, cardDetail, setItemsVisible, setSheetCreateRoom }) {
    // console.log(cardDetail);
    // console.log(setSheetVisible);
    console.log("rik:");
    console.log(sheetTitle);
    // setSheetVisible(false);
    console.log("einde rik");

    return (
        <div>
            <SwipeAbleBottomSheet
                open={sheetVisible}
                onChange={() => {setSheetVisible(!sheetVisible);
                    setItemsVisible(true)}}
                fullscreen={sheetTitle === 'room detail' ? true : false}
            >
            <div className='kd-bottom-sheet-bontainer' 
                style={{backgroundColor: sheetTitle === 'profile'? 'transparent' : ''}}
            >
            { sheetTitle==='New room'? (
                <AppLayout>
                    <NewRoom
                        cardDetail={cardDetail}
                        rik = {(a) => console.log(a)}
                            setSheetVisible = {((item) => 
                                {
                                    setSheetVisible(item);
                                    setItemsVisible(true);
                                })}
                        >
                    </NewRoom>
                </AppLayout>
            ) : (
                    sheetTitle==='Start room'? (
                     <AppLayout>
                        <StartRoom 
                        setSheetTitle={setSheetTitle}
                        setSheetCreateRoom={setSheetCreateRoom} 
                        setSheetVisible = {((item) => 
                            {
                                setSheetVisible(item);
                                setItemsVisible(true);
                            })}
                            sheetTitle={sheetTitle}
                        >
                        </StartRoom>        
                    </AppLayout>
                    ): ('')
                  
                    )
            }
            </div>                                
            </SwipeAbleBottomSheet>
        </div>
    )
}

export default BottomSheet
