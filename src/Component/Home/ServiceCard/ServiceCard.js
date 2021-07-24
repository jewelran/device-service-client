import React, { useEffect, useState } from "react";
import ServiceCardDetails from "../ServiceDetails/ServiceCardDetails";
import "./ServiceCard.css";
const ServiceCard = () => {
  const [allServices, setAllService] = useState([]);
  useEffect(() => {
    fetch("https://protected-brook-16925.herokuapp.com/allService")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, []);
  return (
    <div
      style={{ marginTop: "10rem" }}
      className=" pb-5 row container-fluid serviceContain"
    >
      <div className=" d-flex justify-content-center">
        <div className="w-50 serviceCardContainer">
          <h1
            style={{ textAlign: "center" }}
            className="text-secondary fs-1 pt-4"
          >
            Our Awesome service
          </h1>
          <p className="flex-nowrap text-white  text-center fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            fugiat. Tempora voluptas eius sapiente nulla porro officiis itaque
            odio at quae repellendus labore enim architecto amet explicabo id,
            accusantium pariatur.
          </p>
        </div>
      </div>
      <div className=" d-flex justify-content-around ">
        <div className="d-flex flex-wrap serviceDetailsContainer">
          {allServices.map((service) => (
            <ServiceCardDetails services={service}></ServiceCardDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
