import React from "react";
import Navigation from "./../../Home/Navigation/Navigation";
import { useForm } from "react-hook-form";
import adminImg from "../../../icons/admin.svg";
import { FcBusinessman } from "react-icons/fc";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./Admin.css";
const Admin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email } = data;
    fetch("https://protected-brook-16925.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: name, email: email }),
    }).then((response) => {
      console.log("data insert in mongo db", response);
    });
  };

  return (
    <div className=" ">
      <div className="">
        <Navigation></Navigation>
      </div>
      <div className="row container-fluid adminContainer">
        <div className="col-md-2 mt-5">
          <div className="">
            <ListGroup className="mt-4">
              <Link to="/home">
                <ListGroup.Item action>
                  <h3>Booking information</h3>
                </ListGroup.Item>
              </Link>
              <Link to="/admin">
                <ListGroup.Item className="active" action>
                  Add Admin
                </ListGroup.Item>
              </Link>
              <Link to="/admin/manage">
                <ListGroup.Item action>Manage Service</ListGroup.Item>
              </Link>
              <Link to="/admin/totalOrders">
                <ListGroup.Item action>Total Order</ListGroup.Item>
              </Link>
            </ListGroup>
          </div>
        </div>
        <div className="col-md-10 row mt-5">
          <div className="col-md-3 d-flex justify-content-center ">
            <div className=" w-100">
              <h3 className=" text-light">
                <span className="fs-1">
                  <FcBusinessman />
                </span>{" "}
                Add Admin here!
              </h3>

              <form onSubmit={handleSubmit(onSubmit)}>
                <small>Admin Name</small>
                <br />
                <input
                  className="w-100 border shadow p-2 rounded"
                  {...register("name", { required: true })}
                  placeholder="name"
                />
                <br />
                {errors.name && (
                  <span className="text-danger">This name is required</span>
                )}
                <br />
                <small>Admin Email</small>
                <br />
                <input
                  className="w-100 border shadow p-2 rounded"
                  {...register("email", { required: true })}
                  placeholder="email "
                />
                <br />
                {errors.email && (
                  <span className="text-danger">This email is required</span>
                )}
                <br />
                <br />
                <input className="btn btn w-100 ml-0" type="submit" />
              </form>
            </div>
          </div>
          <div className="col-md-9   p-3 d-flex justify-content-center">
            <img className="w-75" src={adminImg} alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Admin;
