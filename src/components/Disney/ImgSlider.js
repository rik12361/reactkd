import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import i1 from './static/slider-badging.jpg';
import i2 from './static/slider-badag.jpg';
import i3 from './static/slider-scale.jpg';
import i4 from './static/slider-scales.jpg';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <Carousel {...settings}>
          <Wrap>
            <img src={i1}></img>
          </Wrap>
          <Wrap>
            <img src={i2}></img>
          </Wrap>
          <Wrap>
            <img src={i3}></img>
          </Wrap>
          <Wrap>
            <img src={i4}></img>
          </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    color: white;
    margin-top: 0px;
    margin-left: 30px;
    margin-right: 30px;
    padding: 20px;

    .slick-list {
        overflow: visible;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button::before {
        color:white;
    }

    button {
        z-index: 1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow:  rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                     rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: 300ms;
        alt:'jammer';

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
            box-shadow:  rgb(0 0 0 /80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;        
        }
    }
`
