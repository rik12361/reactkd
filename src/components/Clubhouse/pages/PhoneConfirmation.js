import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '../style/PhoneConfirmation.css'
import PhoneInput from 'react-phone-number-input'

function PhoneConfirmation() {
    const [value, setValue] = useState();

    return (
        <div className='PhoneConfirmation'>
            <Link exact to='' ><img src='/images/clubhouse/arrow.png' className='kd-backButton' alt='jammer'></img></Link>
            <h1>Enter your phone:</h1>
            <div className='kd-block'><PhoneInput international defaultCountry='NL' value={value} onChange={setValue} className='kd-PhoneInput' ></PhoneInput></div>
            <div> <p className='kd-block'>by entering your phonenumber, you are agreeing with our terms of service and privacy policy</p></div>
            <span>Thanks!</span>
            <Link exact to='/codeConfirm' className='d-flex align-item-center kd-prim-button kd-confirm-button' >next<img src='/images/clubhouse/nextArrowIcon.svg' className='kd-16-l-p' alt='jammer' ></img></Link>
        </div>
    )
}

export default PhoneConfirmation
