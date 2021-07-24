import React, { useState } from "react";
import Sidebar from "./../../Sidebar/Sidebar";
import Navigation from "./../../Home/Navigation/Navigation";
import { useForm } from "react-hook-form";
import service from "../../../icons/undraw_services_5tv9.svg";
import axios from "axios";
import Footer from "../../Footer/Footer";
import "./AddService.css";
const AddService = () => {
  const [image, setImgUrl] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title, price, description } = data;
    fetch("https://protected-brook-16925.herokuapp.com/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, price, description, image }),
    }).then((response) => {
      if (response) {
        alert(" service data upload successfully");
      }
    });
    console.log(data);
  };
  const imgHandle = (e) => {
    console.log(e.target.files[0]);
    const imageInfo = new FormData();
    imageInfo.set("key", "941644256336912a1409c0bcfce50071");
    imageInfo.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageInfo)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <div className="">
        <Navigation></Navigation>
      </div>
      <div className="addServiceContainer row">
        <div className="col-md-3 mt-4">
          <Sidebar></Sidebar>
        </div>
        <div className=" col-md-9 mt-5 ">
          <div className="d-flex justify-content-center align-items-center ">
            <div className=" col-md-5 row ">
              <h2 className="text-secondary mb-4">Your service Add Here</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="w-75 p-2 shadow border rounded inputContainer"
                  {...register("title", { required: true })}
                  placeholder="title"
                />
                <br />
                {errors.title && (
                  <span className="text-danger">This title is required</span>
                )}
                <br />
                <br />
                <input
                  className="w-75 p-2 shadow border rounded inputContainer"
                  {...register("price", { required: true })}
                  placeholder="price"
                />
                <br />
                {errors.price && (
                  <span className="text-danger">This price is required</span>
                )}
                <br />
                <br />
                <input
                  className="w-75 p-2 shadow border rounded inputContainer"
                  {...register("description", { required: true })}
                  placeholder="description"
                />
                <br />
                {errors.description && (
                  <span className="text-danger">
                    This description is required
                  </span>
                )}
                <br />
                <br />
                <input
                  onChange={imgHandle}
                  type="file"
                  className="w-75 p-2  shadow border rounded inputContainer"
                  placeholder="Add your image"
                />

                <br />
                <input className="btn w-75 ml-0 ml-4 " type="submit" />
              </form>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={service} alt="" />
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

export default AddService;
