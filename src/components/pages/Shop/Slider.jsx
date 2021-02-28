import React from "react";
import { Carousel } from "react-bootstrap";
const Slider = (props) => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={props.slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={props.slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.slider3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.slider4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.slider5} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
