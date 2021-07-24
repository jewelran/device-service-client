import React, { useContext, useState, useEffect } from "react";
import Navigation from "./../../Home/Navigation/Navigation";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import profile from "../../../images/profile-user.png";
import star from "../../../icons/5.png";
import Footer from "../../Footer/Footer";
import "./review.css";
const Review = () => {
  const [loggedInUser] = useContext(userContext);
  const photoURL = loggedInUser.photoURL;
  const email = loggedInUser.email;
  const displayName = loggedInUser.displayName;
  const [review, setReview] = useState({
    userReview: {
      name: "",
      companyName: "",
      description: "",
    },
  });
  const handleBlur = (e) => {
    const comments = { ...review };
    comments[e.target.name] = e.target.value;
    comments[e.target.companyName] = e.target.value;
    comments[e.target.description] = e.target.value;
    setReview(comments);
  };
  const handleSubmit = (e) => {
    fetch("https://protected-brook-16925.herokuapp.com/userReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ review, photoURL, email, displayName }),
    }).then((data) => {
      alert("post successful");
    });
  };

  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    fetch("https://protected-brook-16925.herokuapp.com/allReview")
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="">
          <Navigation></Navigation>
        </div>

        <div className="row pt-5 reviewContainer">
          <div className="container-fluid col-md-3 ">
            <div className="container-fluid">
              <ListGroup className="mt-4">
                <Link to="/home">
                  <ListGroup.Item action>
                    <h3>Booking information</h3>
                  </ListGroup.Item>
                </Link>

                <Link to="/dashboard/bookingLIst">
                  <ListGroup.Item className="" action>
                    Booking list
                  </ListGroup.Item>
                </Link>
                <Link to="/dashboard/review">
                  <ListGroup.Item className="active" action>
                    review
                  </ListGroup.Item>
                </Link>
                <Link to="/dashboard/addService">
                  <ListGroup.Item className="" action>
                    Add New Service
                  </ListGroup.Item>
                </Link>
              </ListGroup>
            </div>
          </div>

          <div className="container-sm col-md-9">
            <div className="row d-flex">
              <div className="col-md-6 p-3">
                <h2>Review</h2>
                <div className="row container-sm">
                  <form onSubmit={handleSubmit} action="">
                    <div className="w-50 inputContainer">
                      <input
                        defaultValue={loggedInUser.displayName}
                        placeholder="Your name"
                        className="form-control"
                        onBlur={handleBlur}
                        type="text"
                        name="name"
                        id=""
                      />
                    </div>
                    <br />
                    <div className="w-50 inputContainer">
                      <input
                        // defaultValue = {}
                        className="form-control"
                        placeholder="Company's name Designation"
                        onBlur={handleBlur}
                        type="text"
                        name="companyName"
                        id=""
                      />
                    </div>
                    <br />
                    <div className="w-50 inputContainer ">
                      <input
                        // defaultValue = {}
                        className="form-control"
                        placeholder="description"
                        onBlur={handleBlur}
                        type="text"
                        name="description"
                        id=""
                      />
                    </div>

                    <input
                      type="submit"
                      value="SUBMIT"
                      className="btn btn secondary"
                    />
                  </form>
                  <div className="col-md-6 mt-5">
                    {userReview.map((user) => (
                      <div className="d-flex">
                        <div className="col-md-1 mr-4">
                          <img
                            style={{ width: "40px", height: "40px" }}
                            className="rounded-circle"
                            src={user.email ? user.photoURL : profile}
                            alt=""
                          />
                        </div>
                        <div className="col-md-10">
                          {
                            <h6 className="text-light">
                              {user.displayName
                                ? user.displayName
                                : user.review?.name || user.review?.companyName}
                            </h6>
                          }
                          <img style={{ width: "65px" }} src={star} alt="" />
                          <p className="text-light">
                            {user.review?.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

export default Review;
