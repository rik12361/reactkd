import React from 'react'

function Testrit({junk}) {

    const doIt = () => {
        junk(2);
    }

    // doIt();

    return (
        <div>
            <h1 onClick={junk}>gelukt? </h1>
        </div>
    )
}

export default Testrit
