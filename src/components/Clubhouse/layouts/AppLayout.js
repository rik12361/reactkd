import React from 'react'

function AppLayout({children}) {
    return (
        <div style={{width:'100%', maxWidth:'500px', margin:'auto', height: '100vh', backgroundColor:'#f2f0e4'}}>
            {children}
        </div>
    )
}

export default AppLayout
