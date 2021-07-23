import React, { useState } from "react";
import { useEffect } from "react";
import TotalOrdersDetails from "./../TotalOrdersDetails/TotalOrdersDetails";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Navigation from "./../../Home/Navigation/Navigation";
import "./TotalOrders.css";
import Footer from "../../Footer/Footer";
import spinner from"../../../icons/0a3f636ab4541e6b-.gif"

const TotalOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  console.log(allOrders);
  useEffect(() => {
    const url = "http://localhost:3030/totalOrder";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div className="row ">
      <div className="">
        <Navigation></Navigation>
      </div>
      <div className="row container-fluid totalItemContainer ">
        <div className="col-md-3">
          <div className="container-fluid mt-5">
            <ListGroup className="mt-4">
              <Link to="/home">
                <ListGroup.Item action>
                  <h3>Booking information</h3>
                </ListGroup.Item>
              </Link>
              <Link to="/admin">
                <ListGroup.Item action>Add Admin</ListGroup.Item>
              </Link>
              <Link to="/admin/manage">
                <ListGroup.Item action>Manage Service</ListGroup.Item>
              </Link>
              <Link to="/admin/totalOrders">
                <ListGroup.Item className="active" action>
                  Total Order
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </div>
        </div>
        <div className="col-md-9 card-deck p-0 h-25  ">
          {
            allOrders.length === 0 ? <img style ={{ width:"5rem",marginLeft:"45%",marginTop:"8rem"}} src={spinner} alt="" /> :
         <span>   {allOrders.map((order) => (
          <TotalOrdersDetails
            key={order._id}
            order={order}
          ></TotalOrdersDetails>
        ))}</span>
          
          }
         
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default TotalOrders;
