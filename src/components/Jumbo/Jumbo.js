import React from 'react'
import HeaderMessage from './HeaderMessage'
import HeaderSearchInfoBar from './HeaderSearchInfoBar'
import '../../css/kd-general.css'
import '../../css/kd-devices.css'
import '../../css/kd-app.css'

function Jumbo() {
    return (
        <div>
            <HeaderMessage></HeaderMessage>
            <HeaderSearchInfoBar></HeaderSearchInfoBar>
        </div>
    )
}
export default Jumbo
