import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookingImg from "../../../images/undraw_Mobile_payment.svg";
import paymentImg from "../../../images/secure-payment_2_orig.png";
import Navigation from "../../Home/Navigation/Navigation";
import { userContext } from "../../../App";
import { useForm } from "react-hook-form";
import Footer from "../../Footer/Footer";
import Payment from "./../Payment/Payment";
import "./Book.css";
const Book = () => {
  const [loggedInUser] = useContext(userContext);
  const uniqueService = useParams();
  // const  [order, setOrder] = useState({})
  // console.log(order);
  const [allServices, setAllServices] = useState([]);
  // console.log(allServices);
  useEffect(() => {
    fetch("https://protected-brook-16925.herokuapp.com/allService")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  const singleService = allServices.filter(
    (service) => service._id === uniqueService.id
  );
  console.log(singleService);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const status = {
    pending: "pending",
    done: "done",
    ongoing: "ongoing",
  };

  const onSubmit = (data) => {
    const { serviceName, price, email } = data;
    const { pending, done, ongoing } = status;
    const { id, description, image } = singleService[0];
    console.log(id, description);
    console.log(pending, done, ongoing);
    console.log("data", data, "status", status, "singleService", singleService);
    fetch("https://protected-brook-16925.herokuapp.com/userOrderCollection", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: serviceName,
        price: price,
        email: email,
        id: id,
        description: description,
        image: image,
        status: { pending, done, ongoing },
      }),
    }).then((response) => {
      alert("Your order  successful");
      console.log("data insert in mongo db", response);
    });
  };
  const price = parseInt(singleService[0]?.price);
  const vat = 20;
  return (
    <div className="bookContainer">
      <div className="row  pb-5 justify-content-center">
        <div className="">
          <Navigation></Navigation>
        </div>
        <div className="col-md-9 p-5">
          <div className="row container d-flex align-items-center  ">
            <div className="row">
              <div className="col-md-6">
                <Payment singleService={singleService}></Payment>
              </div>
              <div className="col-md-6 ">
                <div className="">
                  <h2 className="text-secondary mb-4">Pay now</h2>
                  <div className=" border-bottom  pb-3">
                    <h4 className="text-warning">Price: ${price}</h4>
                    <h4 className="text-warning">Vat: ${vat} </h4>
                  </div>
                  <div className="">
                    <h4 className="text-warning">
                      Total Price: ${price + vat}
                    </h4>
                  </div>

                  <img className="h-50 w-100" src={paymentImg} alt="" />
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

export default Book;
