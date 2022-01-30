import React from 'react'
import {Link} from 'react-router-dom'
import '../style/ClubHouseHeader.css'

// Top menu bar with search e-mail, calendar, alarm en user-profile picture
//
function ClubHouseHeader() {
    return (
        <div className="kd-relative">
            <div className="kd-clubhouseheader" >
                <span>
                    <Link  to='/clubhouse/explore'>
                        <img className='kd-search-icon' src='/images/clubhouse/search.png' alt='jammer'/>
                    </Link>
                </span>
                <span>
                    <Link className='kd-16-l-p' to='/clubhouse/friendsinvite'>
                        <img src='/images/clubhouse/invite.png' alt='jammer'/>
                    </Link>
                    <Link  to='/clubhouse/upcoming'>
                        <img src='/images/clubhouse/calendar.png' alt='jammer'/>
                    </Link>
                    <Link  to='/clubhouse/activity'>
                        <img src='/images/clubhouse/noti.png' alt='jammer'/>
                    </Link>
                    <Link  to='/clubhouse/profile'>
                        <img src='/images/clubhouse/b1.png' alt='jammer'/>
                    </Link>
                </span>
        </div>
        </div>
    )
}

export default ClubHouseHeader
