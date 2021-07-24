import { Link } from "react-router-dom";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
const Sidebar = () => {
  return (
    <div className="container-fluid">
      <ListGroup className="mt-5 ">
        <Link to="/home">
          <ListGroup.Item action>
            {" "}
            <h3 style={{ boxSizing: "border-box" }}>
              Booking information
            </h3>{" "}
          </ListGroup.Item>
        </Link>

        <Link to="/dashboard/bookingLIst">
          <ListGroup.Item action> Booking list</ListGroup.Item>
        </Link>
        <Link to="/dashboard/review">
          <ListGroup.Item action> review</ListGroup.Item>
        </Link>
        <Link to="/dashboard/addService">
          <ListGroup.Item className="active" action>
            Add New Service
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
