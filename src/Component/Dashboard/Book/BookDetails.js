import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const BookDetails = () => {
  const uniqueService = useParams();
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("https://protected-brook-16925.herokuapp.com/allService")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  const singleService = allServices.filter(
    (service) => service._id === uniqueService.id
  );
  return (
    <div className="">
      <div className=" container mt-5 border border-secondary  d-flex  align-items-center">
        <div className="row">
          <h1>Your Device awesome service here</h1>

          <div className="d-flex">
            <div className="m-5 col-md-4">
              <img
                style={{ width: "200px", height: "200px" }}
                src={singleService[0]?.image}
                alt=""
              />
            </div>
            <div className="col-md-6 mt-5">
              <h3>REPAIR YOUR {singleService[0]?.title}</h3>
              <p>{singleService[0]?.description}</p>
              <p className="text-warning">
                {" "}
                <big>Price: $ {singleService[0]?.price}</big>{" "}
              </p>
              <Link to={"/dashboard/book/" + uniqueService.id}>
                <button className="btn btn primary">Booking Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 fixed-bottom">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BookDetails;
