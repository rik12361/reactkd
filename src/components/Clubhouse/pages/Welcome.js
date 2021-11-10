import React from 'react'
import '../style/Welcome.css'
import {Link} from 'react-router-dom'

function Welcome() {
    return (
        <div className="WelcomeContainer">
            <h1 className="WelcomeContainer">Welcome!</h1>
            <div className="WelcomeInfo">
                <p>We are working hard to get Clubhouse up and running for everyone. While we wrap up the finishing touches! We are adding people gradually to make sure. Noting nothing breaks!</p>
                <p>Anyone can join with an invite of one of the member who already joined the Clubhouse. We are so gratefull you are here so let's hope you are as excited as the whole team is to welcome every new member!</p>
                <p>Paul, Rohan and the Clubhouse team"</p>
            </div>
            <div className='actionButton'>
                <Link className='btn btn-primary d-flex align-items-center mb-3' exact to='/clubhouse/getUsername'>Get your username</Link >
                <Link>Have an invite text? Sign in</Link>
            </div>
        </div>
    )
}

export default Welcome
