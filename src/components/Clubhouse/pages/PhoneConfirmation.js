import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '../style/PhoneConfirmation.css'

function PhoneConfirmation() {
    const [value, setValue] = useState(1);

    return (
        <div className='PhoneConfirmation'>
            <h1>Enter your phone:</h1>
            <p>by entering your phonenumber, you are agreeing with our terms</p>
            <span>term of service and privacy policy</span>
            Thanks!
            {value}
        </div>
    )
}

export default PhoneConfirmation
