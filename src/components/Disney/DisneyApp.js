import '../../css/kd-general.css'
import '../../css/kd-devices.css'
import '../../css/kd-app.css'

import React from 'react'
import Header from './Header'
import Home from './Home'
import { CookiesProvider } from 'react-cookie';

function DisneyApp() {
  
    return (
        <div>
            <CookiesProvider>
              <Header></Header>
              <Home></Home>
            </CookiesProvider>
        </div>
    )
}
export default DisneyApp
