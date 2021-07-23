import React, { useState } from "react";
import { useEffect } from "react";
import UserReviewDetail from "./../UserReviewDetails/UserReviewDetail";
import "./UserReview.css";
const UserReview = () => {
  const [userReview, setUserReview] = useState([]);
  console.log(userReview);
  useEffect(() => {
    fetch("http://localhost:3030/allReview")
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, []);
  return (
    <div className="userReviewContainer">
      <div className="">
        <div className="d-flex justify-content-center text-light pt-5 pb-5">
          <h1>USER REVIEW HERE </h1>
        </div>
        <div className="pt-5">
          <div className="d-flex flex-wrap">
            {userReview.map((user) => (
              <UserReviewDetail key={user._id} user={user}></UserReviewDetail>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
