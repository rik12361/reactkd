import React from 'react'
import '../style/RoomInfoCard.css'
import data from '../components/RoomCards.json'
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs'
function RoomInfoCards() {

    return (
        <>
            <div>
                { data.map ((RoomInfo) => ( 
                    <div key={RoomInfo.id} className='kd-roomcontainer'>
                        <h6>{RoomInfo.title}</h6>
                        <h2>{RoomInfo.sub_title}</h2>
                        <div className='kd-roommembers'>
                            <div><img src='/images/clubhouse/user-img.jpg'></img></div>
                            <div><img src='/images/clubhouse/user-img2.jpg'></img></div>
                            <div className='kd-member-data'>
                                <div>
                                    {RoomInfo.members.map ((member) => (
                                        <div key={member.first_name}>
                                            <p>{member.first_name} {member.last_name} <BsChatDots/> </p>
                                        </div>
                                    ))}
                                </div>
                                <p className='d-flex align-items-center'>
                                    <span className='mr-2'>1.8</span>
                                    <BsFillPersonFill/>
                                    <span className='mx-2'></span>{" "}
                                    <span className='mr-2'></span> <BsChatDotsFill/>
                                </p>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}
export default RoomInfoCards
