import React, { useContext, useEffect, useState } from "react";
import Navigation from "./../../Home/Navigation/Navigation";
import ListGroup from "react-bootstrap/ListGroup";
import { Link} from "react-router-dom";
import Footer from "../../Footer/Footer";
import { userContext } from "../../../App";
import "./BookingLIst.css"
import BookingLIstDetails from "../BookingListDetails/BookingLIstDetails";
const BookingLIst = () => {
  const token = localStorage.getItem("token")
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [uniqueUserItem, setUniqueUserItem] = useState([])
  
  useEffect(() => {
    fetch(`https://protected-brook-16925.herokuapp.com/singleUserItem`,{
      method: "POST",
      headers: {    "Content-type": "application/json"  },
      body: JSON.stringify({email:loggedInUser.email|| token})
    })
  .then((res) => res.json())
  .then((data => setUniqueUserItem(data)))
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
          <h1 className="text-light">this is Booking list </h1>
          <div className="card-deck">
            { uniqueUserItem.length > 0 ?uniqueUserItem.map(item => <BookingLIstDetails key ={item._id} item ={item}></BookingLIstDetails>):
            <h1 className= "text-danger">Not found your Order</h1>
              
            }
          </div>
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
