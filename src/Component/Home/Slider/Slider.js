import React from "react";
import Carousel from "react-bootstrap/Carousel";
import mobile from "../../../images/mobile.jpg";
import TopHeader from "./../TopHeader/TopHeader";
import computer from "../../../images/computer-repair.jpg";
import mac from "../../../images/mac-pc-repair-computer-and-laptop-png.png";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="row">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 h-75" src={mobile} alt="First slide" />
          <Carousel.Caption>
            <TopHeader></TopHeader>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={computer} alt="Second slide" />

          <Carousel.Caption>
            <div className="top-header">
              <div className="homeTitle">
                <h1>REPAIR YOUR LAPTOP</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  aperiam recusandae impedit aliquid? Libero laudantium natus
                  officia quis inventore molestiae.
                </p>
                <div className="mt-5">
                  <button className="HomeBtn btn-warning">GET START NOW</button>
                  <button className="HomeBtn btn-warning">LEARN MORE</button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={mac} alt="Third slide" />

          <Carousel.Caption>
          <div className="top-header">
              <div className="homeTitle">
                <h1>REPAIR YOUR IOS</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  aperiam recusandae impedit aliquid? Libero laudantium natus
                  officia quis inventore molestiae.
                </p>
                <div className="mt-5">
                  <button className="HomeBtn btn-warning">GET START NOW</button>
                  <button className="HomeBtn btn-warning">LEARN MORE</button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
