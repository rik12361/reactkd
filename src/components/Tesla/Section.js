import React from 'react'
import ButtonGroup from './ButtonGroup';
import ItemText from './ItemText';
import DownArrow from './DownArrow';

const Section = ({background, title, subTitle, LeftBtnText, RightBtnText, calcPerc}) => {

    return (
        <div id='S01'>
            <div id='S02'>
                <ItemText calcPerc={calcPerc} title={title} subTitle={subTitle}>
                </ItemText>
                <div>
                <ButtonGroup calcPerc={calcPerc} LeftBtnText={LeftBtnText} RightBtnText={RightBtnText}>
                </ButtonGroup>
                <DownArrow calcPerc={calcPerc}></DownArrow>
                </div>
            </div>
        </div>
    )
}
export default Section