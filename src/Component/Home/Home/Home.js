import React from "react";
import Navigation from "./../Navigation/Navigation";
import "./Home.css";
import Service from "../ServiceCard/ServiceCard";
import Slider from "../Slider/Slider";
import UserReview from "../UserReview/UserReview";
import RepairPlan from "./../RepairPlan/RepairPlan";
import Footer from "../../Footer/Footer";
const Home = () => {
  return (
    <div className="bg-light">
      <div className="fixed-top">
        <Navigation></Navigation>
      </div>
      <Slider></Slider>
      <Service></Service>
      <UserReview></UserReview>
      <RepairPlan></RepairPlan>
      <Footer></Footer>
    </div>
  );
};

export default Home;
