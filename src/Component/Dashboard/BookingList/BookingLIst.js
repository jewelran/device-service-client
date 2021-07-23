import React, { useContext, useEffect, useState } from "react";
import Navigation from "./../../Home/Navigation/Navigation";
import ListGroup from "react-bootstrap/ListGroup";
import { Link} from "react-router-dom";
import Footer from "../../Footer/Footer";
import { userContext } from "../../../App";
import "./BookingLIst.css"
const BookingLIst = () => {
  const token = localStorage.getItem("token")
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  // const [email, setEmail] = useState({})
  // console.log(email);

  useEffect(() => {
    fetch(`http://localhost:3030/dashboard?email=${loggedInUser.email || token}`,{
      method: "POST",
      headers: {    "Content-type": "application/json"  },
      body: JSON.stringify(token)
    })
  .then(response  => {
    // alert("response")
  })
  },[])
  return (
    <div className="">
      <div className="row ">
      <div className="">
        <Navigation></Navigation>
      </div>
      <div className="row pt-5 bookingLIstContainer">
        <div className="container-fluid col-md-3  ">
          <div className="container-fluid ">
            <ListGroup className="mt-4">
              <Link to="/home">
                <ListGroup.Item action>
                  <h3>Booking information</h3>
                </ListGroup.Item>
              </Link>
              <Link to={"/dashboard/bookingLIst"}>
                <ListGroup.Item className="active" action>
                  Booking list
                </ListGroup.Item>
              </Link>
              <Link to="/dashboard/review">
                <ListGroup.Item action>review</ListGroup.Item>
              </Link>
              <Link to="/dashboard/addService">
                <ListGroup.Item action>Add New Service</ListGroup.Item>
              </Link>
            </ListGroup>
          </div>
        </div>
        <div className="container-sm col-md-9">
          <h1>this is Booking list </h1>
        </div>
      </div>
    </div>
    <div className="">
      <Footer></Footer>
    </div>
    </div>
  );
};

export default BookingLIst;
