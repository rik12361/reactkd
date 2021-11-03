import React from 'react'
import { useEffect } from 'react';

const SectionBackground = ({background, doSomething}) => {

    useEffect(() => {
         window.addEventListener("scroll", doSomething);
         return () => window.removeEventListener("scroll", doSomething);
         });
         
    return (
        <div id='BGI01'style={{ backgroundImage: `url(${background})`, color: 'red' }} />
    )
}
export default SectionBackground