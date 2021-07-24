import React from "react";
import Card from "react-bootstrap/Card";
import star from "../../../icons/5.png";
import profile from "../../../images/profile-user.png";
import "./ReviewDetailContainer.css";
const UserReviewDetail = ({ user }) => {
  return (
    <div className="reviewCardContainerTop">
      <Card
        className="shadow bg-body rounded reviewCardContainer"
        style={{ width: "18rem ", height: "18rem" }}
      >
        <div className="row">
          <div className="col-md-5 m-2 imgContainer">
            <Card.Img
              className="rounded-circle"
              variant="top"
              src={user.email ? user.photoURL : profile}
            />
          </div>
          <div style={{ float: "left" }} className="col-md-6 ">
            {
              <h6>
                {user.displayName
                  ? user.displayName
                  : user.review?.name || user.review?.companyName}
              </h6>
            }
            <div className="w-50">
              <Card.Img variant="top" src={star} />
            </div>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.review?.description}</Card.Text>
        </Card.Body>
      </Card>

      <div className=""></div>
    </div>
  );
};

export default UserReviewDetail;
