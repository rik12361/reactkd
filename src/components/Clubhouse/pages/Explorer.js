import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import '../style/Explorer.css'
import data from './Explore.json'
// import {DownOutlined, FireOutlined} from '@ant-design/icons'

function Explorer() {

    const {people, conversation} = data;

    return (
        <div className='kd-explorer-container'>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className='kd-people-container'>
                {people.map((person) => (
                <div className='kd-person-container'>
                    <div>
                        <img src='/images/clubhouse/user-img.jpg' alt='jammer'></img>
                    </div>
                    <div>
                        <h5>{person.title}</h5>
                        <p>{person.description}</p>
                    </div>
                    <button>follow</button>
                </div>))}
                <button className='kd-show-more-people'>Show more people <FaChevronDown/></button>
            </div>
        </div>
    )
}

export default Explorer
