import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {selectCounter} from './CounterReducer'
import {selectArray} from './ArrayReducer'
import {selectText} from './TextReducer'
import {selectBoolean} from './BooleanReducer'
import { useDispatch } from 'react-redux'
import { Plus } from './Actions'
import { Min } from './Actions'
import { InitArray } from  './Actions'
import { UpdArray } from  './Actions'
import { UpdText } from  './Actions'
import { Toggle } from  './Actions'


function ReduxMain() {

//    const store = createStore(allLabReducers);
    const cnt = useSelector(selectCounter);
    const arr = useSelector(selectArray);
    const txt = useSelector(selectText);
    const tgl = useSelector(selectBoolean);

    const dispatch = useDispatch();

    const doClickPlus = () => {
        console.log("Plus");
        dispatch(Plus());
    }

    const doClickMin = () => {
        console.log("Min");
        dispatch(Min());
    }

    const doClickInitArr = () => {
        console.log("InitArray");
        dispatch(InitArray());
        console.log(arr);
    }

    const doClickUpdArray = () => {
        console.log("UpdArray");
        dispatch(UpdArray());
    }

    const doClickUpdText = () => {
        console.log("UpdText");
        dispatch(UpdText());
    }

    const doClickToggle = () => {
        console.log("Toggle");
        dispatch(Toggle());
    }
       
    return (
        <>
            <Header>
                <h1>Welkom to the redux lab</h1>
            </Header>
            <Grid>
                <GridItems>
                    <Cnt>
                        <button onClick={doClickPlus}>increment</button>
                        <button onClick={doClickMin}>decrement</button>
                        <div>{cnt}</div>
                    </Cnt>
                </GridItems>
                <GridItems>
                    <Cnt>
                        <button onClick={doClickUpdText}>set text</button>
                        <div>{txt}</div>
                    </Cnt>
                </GridItems>
                <GridItems>
                    <Cnt>
                        <button onClick={doClickInitArr}>init</button>
                        <button onClick={doClickUpdArray}>add</button>
                        <div>{arr}</div>
                    </Cnt>                     
                </GridItems>
                <GridItems>
                    <Cnt>
                        <button onClick={doClickToggle}>toggle</button>
                        <div>{tgl? "true" : "false"}</div>
                    </Cnt>                     
    
                </GridItems>
                <GridItems>5</GridItems>
            </Grid>
        </>
    )
}
export default ReduxMain

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(0,0,0,1);
    padding: 0px;
    transition: all ease-out 250ms;
    height: 56px;
    margin: 0px;
    font-size: 15px;
`
const Grid = styled.div `
 display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(235,235,235,0.7);
  padding: 10px;
  grid-gap: 0.5em;
`

const GridItems = styled.div `
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  `

  const Cnt = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        background-color: black;
        color:white;
        padding: 4px 12px;
    }
    button:hover {
        background-color: grey;
        color:white;
    }
    div {
        font-size:24px;
    }
  `