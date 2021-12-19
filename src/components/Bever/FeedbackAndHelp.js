import React from 'react'
import { FaQuestion, FaQuestionCircle } from 'react-icons/fa'
import styled from 'styled-components'

function FeedbackAndHelp() {
    return (
        <FeedbackAndHelpContainer>
            <FeedbackLink><span>Feedback</span></FeedbackLink>
            <HelpLink><FaQuestion style={{border:'1px solid grey', borderRadius:'50%', padding: '3px', margin:'5px', fontSize:'20px'}}/><span>Help</span></HelpLink>
        </FeedbackAndHelpContainer>
    )
}

export default FeedbackAndHelp

const FeedbackAndHelpContainer = styled.div`
    position: relative;
    z-index:1000;
`
const FeedbackLink = styled.a`
    position: fixed;
    top: 50vh;
    right: -30px;
    border-radius: 2%;
    transform: rotate(-90deg);
    background: rgba(0,0,0,0.4);
    padding: 2px 8px;
    font-weight: 500;
    color: white;
    &:hover {
        cursor: pointer;
        color: white;
    }
`
const HelpLink = styled.a`
    position: fixed;
    bottom: 30px;
    right: 100px;
    width: 100px;
    text-align: center;
    font-weight: 400;
    border-radius: 1em;
    background: rgb(239,186,40);
    padding: 2px 8px;
    color: var(--bever-grey);
    span {
        margin: 0px 0px 0px 4px;
    }
    &:hover {
        cursor: pointer;
        color: var(--bever-grey);
    }
`