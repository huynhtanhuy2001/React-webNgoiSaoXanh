import React, { Component } from "react";
import Slider from "react-slick";

import { thiennhien } from "../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,

      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className="text-center">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img className="w-[100%] h-[500px]" src={thiennhien} />
          </div>
          <div>
            <img className="w-[100%] h-[500px]" src={thiennhien} />
          </div>
          <div>
            <img className="w-[100%] h-[500px]" src={thiennhien} />
          </div>
          <div>
            <img className="w-[100%] h-[500px]" src={thiennhien} />
          </div>
          <div>
            <img className="w-[100%] h-[500px]" src={thiennhien} />
          </div>
          <div>
            <img className="w-[100%] h-[500px]" src={thiennhien} />
          </div>
        </Slider>
      </div>
    );
  }
}
