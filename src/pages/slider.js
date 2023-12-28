import React, { Component } from "react";
import Ukrainian from '../images/Ukrainian.svg';
import Japanese from '../images/Japanese.svg';
import Lithuanian from '../images/Lithuanian.svg';
import Swedish from '../images/Swedish.svg';
import English from '../images/English.svg';
import Italian from '../images/Italian.svg';
import Chinese from '../images/Chinese.svg';
import French from '../images/French.svg';
import German from '../images/German.svg';
import "./slider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            cssEase: "linear",
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 970,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="mainContainer">
                <Slider {...settings}>
                    <div className="slick-slide">
                        <img src={Ukrainian} alt="" />
                    </div>
                    <div className="slick-slide">
                        <img src={Japanese} alt="" />
                    </div>
                    <div className="slick-slide">
                        <img src={Lithuanian} alt="" />
                    </div>
                    <div className="slick-slide">
                        <img src={Swedish} alt="" />
                    </div>
                    <div className="slick-slide">
                        <img src={English} alt="" />
                    </div>
                    <div className="slick-slide">
                        <img src={Italian} alt="" />
                    </div>
                    <div className="slick-slide">
                        <img src={Chinese} alt="" />
                    </div>
                    <div className="slick-slide">
                        <img src={French} alt="" />
                    </div>
                    <div className="slick-slide">
                        <img src={German} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}