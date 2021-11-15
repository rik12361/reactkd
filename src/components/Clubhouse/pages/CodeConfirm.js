import React from 'react'
import '../style/CodeConfirm.css'
import {Link} from 'react-router-dom'

function CodeConfirm() {
    return (
        <div className="CodeConfirmation">
            <div className="text-center">
                <Link exact to='' className='kd-backButton'><img src="/images/clubhouse/arrow.png"></img></Link>
                <h1>Enter the code we just texted you:</h1>
                <input type="text"></input>
                <p className="mt-2">Didn't recieve it? <span>tap to resend</span></p>
                <Link exact to='/codeConfirm' className='kd-code-confirm-button align-item-center ' >next<img src='/images/clubhouse/nextArrowIcon.svg' className='kd-16-l-p' alt='jammer' ></img></Link>                
            </div>
        </div>
    )
}

export default CodeConfirm
