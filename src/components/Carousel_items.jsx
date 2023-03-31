import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { Link } from "react-router-dom";

const Carousel_items = () => {
  return (
    <div id="carousel_items">
      <Carousel>
        <Carousel.Item interval={1000}>
          <Link to={`/category/${"Ps5"}`}>
          <img
            className="imagen_car"
            src="https://wallpapers.com/images/hd/ps5-black-edition-6rddvh7aw3tta7ff.jpg"
            alt="First slide"
            />
            </Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <Link to={`/category/${"Nintendo"}`}>
          <img
            className="imagen_car"
            src="https://images7.alphacoders.com/486/486969.jpg"
            alt="Second slide"
          />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <Link to={`/category/${"Ps4"}`}>
          <img
            className="imagen_car"
            src="https://images5.alphacoders.com/386/thumb-1920-386019.jpg"
            alt="Third slide"
          />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel_items;
