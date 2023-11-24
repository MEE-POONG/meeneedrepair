import React, { Component } from "react";
import Slider from "react-slick";

// รูปสไลด์ของหน้าบริการของเรา 
export default class SlideNews extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container w-[70%] mx-auto ">
        <Slider {...settings}>
          <div >
           <img src="images/Banner.png" alt=""  />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}