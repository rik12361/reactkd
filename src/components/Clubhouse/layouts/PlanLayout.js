import React from 'react'

function PlanLayout({children}) {
    return (
        <div style={{width:'100%', maxWidth:'500px', margin:'auto', height: '100%', backgroundColor:'#f2f0e4'}}>
            {children}
        </div>
    )
}

export default PlanLayout
