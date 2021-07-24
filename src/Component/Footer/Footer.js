import React from "react";
import "./Footer.css";
import facebook from "../../icons/facebook.svg";
import linkedin from "../../icons/linkedin.svg";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";
import skype from "../../icons/skype.svg";
import rightArrow from "../../icons/right-arrow.svg";
import { useForm } from "react-hook-form";
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      alert("Thank you for choosing our website");
    }
    console.log(data);
  };

  return (
    <div className=" ">
      <div className="footer-container text-secondary d-flex   align-items-center justify-content-center p-3">
        <div className="row d-flex  container-fluid">
          <div className="col-md-3">
            <div className="">
              <h1 className="text-warning">Device Repair</h1>
              <big className="text-info">Repair Service</big>
            </div>
            <div className="mt-3 border-bottom  pb-3">
              <figcaption>
                <p>
                  <span style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, reiciendis obcaecati rem iusto dolore cupiditate?
                    Excepturi, laboriosam officiis soluta adipisci sed id quae
                    sint, alias aperiam magnam quidem accusamus necessitatibus?
                    Vitae iure alias labore fugiat nulla voluptates fugit
                    deserunt molestias aliquid iusto. Natus quisquam voluptatem
                    impedit aut placeat, ratione{" "}
                  </span>
                </p>
              </figcaption>
            </div>
            <div className=" media-service d-flex justify-content-center mt-4 pb-5">
              <div className="col-md-2">
                <img className="socialIcon" src={facebook} alt="" />
              </div>
              <div className="col-md-2">
                <img className="socialIcon" src={linkedin} alt="" />
              </div>
              <div className="col-md-2">
                <img className="socialIcon" src={instagram} alt="" />
              </div>
              <div className="col-md-2">
                <img className="socialIcon" src={twitter} alt="" />
              </div>
              <div className="col-md-2">
                <img className="socialIcon" src={skype} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <h1 className="text-warning">Shop Info</h1>
            </div>
            <div className="text-white border-bottom  pb-3">
              <p>
                <span className="mr-5">Address :</span>{" "}
                <span>57/1 water works road, goudnail, narayongonj </span>{" "}
              </p>
            </div>
            <div className="text-white mt-3 border-bottom ">
              <p>
                <span className="mr-3">Phone :</span> 0170864*****
              </p>
              <p>
                <span className="mr-3">Email :</span>{" "}
                <span className="text-warning">jewelrana65877@gmail.com</span>
              </p>
            </div>
            <div className="text-white mt-4">
              <p>
                <span className="mr-3 ">Hours : </span> Mon-fri(9am-6am)
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <h1 className="text-warning">Services</h1>
            </div>
            <div className="text-white">
              <ul className="list-unstyled fs-5">
                <li>
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={rightArrow}
                    alt=""
                  />{" "}
                  laptop Repair
                </li>
                <li>
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={rightArrow}
                    alt=""
                  />{" "}
                  iPhone Repair
                </li>
                <li>
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={rightArrow}
                    alt=""
                  />{" "}
                  iPad Repair
                </li>
                <li>
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={rightArrow}
                    alt=""
                  />{" "}
                  Tablet Repair
                </li>
                <li>
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={rightArrow}
                    alt=""
                  />{" "}
                  Smartphone Repair
                </li>
                <li>
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={rightArrow}
                    alt=""
                  />{" "}
                  Gadget Repair
                </li>
                <li>
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={rightArrow}
                    alt=""
                  />{" "}
                  Recover Data
                </li>
                <li>
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={rightArrow}
                    alt=""
                  />{" "}
                  Backup Data
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <h1 className="text-warning">Newsletter</h1>
            </div>
            <div className="text-white">
              <big>
                Signup for regular newsletter and stay upto <br /> date our
                latest news
              </big>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="w-75 p-2 rounded inputContainer"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className=" text-danger">This email is required</span>
                )}
                <br />
                <input className=" btn " type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white">
        <div className="w-100 text-center p-3">
          <p>
            CopyRight &#169; 2021. All right reserved by{" "}
            <span className="text-warning">Jewel rana</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
