import React from 'react'
import { Link } from 'react-router-dom'
import '../style/AllowNotification.css'

function AllowNotification() {
    return (
        <div>
            <div className='AllowNotification' >
                <h1>Last important step</h1>
                <h1>enable notifications when people are speaking</h1>
            <div className='AllowNotificationContainer m-3'>
                <div className="p-3">
                    <h3 className="kd-clubhouse-notifications">"Clubhouse would like to send you notifications"</h3>
                    <p>notifications may include alerts, images and icon-badges.</p>
                    <div  className='kd-allow-action-button' >
                    <Link exact to='/clubhouse'>Do't allow
                    </Link>
                    <Link exact to='/clubhouse'>Allow
                        <img src='/images/clubhouse/handIcon.svg' alt='jammer'></img>;
                    </Link>
                    </div>
                </div>
            </div>
            </div>
    </div>
    )
}

export default AllowNotification
