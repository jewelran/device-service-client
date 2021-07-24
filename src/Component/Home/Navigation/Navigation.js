import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { userContext } from "../../../App";
import { useContext } from "react";
const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [admins, setAdmin] = useState(false);
  const token = localStorage.getItem("token");
  console.log(admins, token);
  useEffect(() => {
    fetch(`http://localhost:3030/allAdmin`,{
      method: "POST",
      headers: { "content-type": "application/json"},
      body: JSON.stringify({email:loggedInUser.email|| token})
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  

  const logoutUser = () => {
    const token = localStorage.getItem("token");
    if (loggedInUser || token) {
     if (loggedInUser) {
       setLoggedInUser({})
     }
     if (token) {
      localStorage.removeItem("token");
     }
    }
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
<div className="container-fluid">
<Link className="navbar-brand" to="/">
          <span className="text-light fs-1 ">Device Repair</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav justify-content-end pr-4"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-4">
            <li className="nav-item active text-light">
              <Link className="nav-link" to="/">
                <span className="text-light fs-5">HOME</span>
              </Link>
            </li>
            <li className="nav-item">

          { admins && 
              <Link className="nav-link" to="/admin">
              <span className="text-light fs-5">ADMIN</span>
            </Link>
            }
             
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">
                <span className="text-light fs-5">ABOUT US</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <span className="text-light fs-5">SERVICE</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <span className="text-light fs-5">GALLERY</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <span className="text-light fs-5">DASHBOARD</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <span className="text-light fs-5">CONTACT</span>
              </Link>
            </li>
            {loggedInUser.email || localStorage.getItem("token") ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  {loggedInUser.email || localStorage.getItem("token")?  <span
                    onClick={() => logoutUser()}
                    className="text-light fs-5"
                  >
                    LOG OUT
                  </span> :
                  ""
                  
                }
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <span className="text-light fs-5">LOG IN</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
</div>
      </nav>
    </div>
  );
};

export default Navigation;
