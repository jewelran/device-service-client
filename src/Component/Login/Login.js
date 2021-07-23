import React, { useState } from "react";
import Navigation from "./../Home/Navigation/Navigation";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { useForm } from "react-hook-form";
import loginImg from "../../../src/images/loginImg.png";
import google from "../../../src/images/google.png";
import { userContext } from "../../App";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import  jwt_decode  from 'jwt-decode';
import "./Login.css"
const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  console.log(loggedInUser);
  const [newUser, setNewUser] = useState(true);
  const [error, setError] = useState({})
  console.log(error);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        setLoggedInUser(result.user);
        varifyId();
        history.replace(from);
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(
          "result",
          result,
          "credential",
          credential,
          "token",
          token,
          "user",
          user
        );
        // ...
      })
      .catch((error) => {
        setError(error)
        console.log(error);
      });
  };
  const varifyId = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        const token = idToken
        const decode = jwt_decode(token)
        localStorage.setItem("token",decode.email);
      })
      .catch(function (error) {
        setError(error)
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (newUser && data.Email && data.password) {
      console.log("i am here");
      firebase
        .auth()
        .signInWithEmailAndPassword(data.Email, data.password)
        .then((result) => {
        setLoggedInUser(result.user)
        varifyId()
        history.replace(from);
        })
        .catch((error) => {
          setError(error)
          console.log(error);
        });
    }

    if (
      !newUser &&
      data.Email &&
      data.password &&
      data.ConformPassword &&
      data.password === data.ConformPassword
    ) {
      console.log("created successful");
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.Email, data.password)
        .then((result) => {
          setLoggedInUser(result.user)
          history.replace(from);
        })
        .catch((error) => {
          setError(error)
          console.log(error.message);
         
        });
    }
    console.log(data.Email, data.password);
  };
  console.log(errors);

  return (
    <div>
      <Navigation></Navigation>
     <div className="loginFullContainer">
     <div className="container ">
        <div className="row d-flex mt-5">
          <h2 className="text-secondary pb-5">Login for Service</h2>
          <div className="col-md-6 shadow-sm p-3 mb-5 bg-body rounded d-flex justify-content-center pt-5">
            <div className="">
              {newUser ? (
                <h2 className="text-secondary">SignIn</h2>
              ) : (
                <h2 className="text-secondary">SignUp</h2>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                {!newUser && (
                  <input
                    className="w-100 border shadow p-2 rounded"
                    style={{ width: "30rem", padding: ".5rem" }}
                    type="text"
                    placeholder="First name"
                    {...register("First_name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                )}
                {!newUser && errors.First_name && <span className = "text-danger">This fast name is required</span>} 

                {!newUser && <br />}
                {!newUser && <br />}
                {!newUser && (
                  <input
                    className="w-100 border shadow p-2 rounded"
                    style={{ width: "30rem", padding: ".5rem" }}
                    type="text"
                    placeholder="Last name"
                    {...register("Last_name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                )}
                { !newUser && errors.Last_name && <span className = "text-danger">This last name is required</span>} 
                
                {!newUser && <br />}
                {!newUser && <br />}

                <input
                  className="w-100 border shadow p-2 rounded"
                  style={{ width: "30rem", padding: ".5rem" }}
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                { !newUser && errors.Email && <span className = "text-danger">This email is required</span>} 
                {!newUser && <br />}
                {!newUser && <br />}
                {!newUser && (
                  <input
                    className="w-100 border shadow p-2 rounded"
                    style={{ width: "30rem", padding: ".5rem" }}
                    type="tel"
                    placeholder="Mobile number"
                    {...register("Mobile_number", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                  
                )}
                {errors.Mobile_number && <span className = "text-danger">This phone number is required</span>} 
                <br />
                <br />

                <input
                  className="w-100 border shadow p-2 rounded"
                  style={{ width: "30rem", padding: ".5rem" }}
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                  })}
                />
                 {errors.password && <span className = "text-danger">This password is required</span>} 
                {!newUser && <br />}
                {!newUser && <br />}
                {!newUser && (
                  <input
                    className="w-100 border shadow p-2 rounded"
                    style={{ width: "30rem", padding: ".5rem" }}
                    type="password"
                    placeholder="Conform Password"
                    {...register("ConformPassword", {
                      required: true,
                    })}
                  />
                )}
                {errors.ConformPassword && <span className = "text-danger">This conform password is required</span>} 

                {!newUser && <br />}
                {!newUser && <br />}
                {!newUser && (
                  <div className="">
                    <big className="text-secondary">Title : </big>
                    <select {...register("Title", { required: true })}>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </div>
                )}
                {!newUser && <br />}
                {!newUser && <br />}

                <input
                  // className="w-100 border shadow p-2 rounded"

                  style={{ width: "30rem" }}
                  className="btn btn secondary w-100 border shadow p-2 rounded ml-0"
                  type="submit"
                />
              </form>
              <div className="">
                {newUser ? (
                  <p>
                    Don't have an account?{" "}
                    <span
                      onClick={() => setNewUser(!newUser)}
                      className="text-danger pe-auto"
                      style={{ cursor: "pointer" }}
                    >
                      Carate an account
                    </span>{" "}
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <span
                      onClick={() => setNewUser(!newUser)}
                      className="text-danger pe-auto"
                      style={{ cursor: "pointer" }}
                    >
                      Login
                    </span>{" "}
                  </p>
                )}
              </div>

              <div className="w-100">
                <button
                  onClick={() => googleSignIn()}
                  style={{ width: "30rem" }}
                  className="btn"
                >
                  {" "}
                  <span>
                    <img
                      style={{ width: "1.5rem", marginRight: "1rem" }}
                      src={google}
                      alt="GoogleImg"
                    />
                    Google SingIn
                  </span>{" "}
                </button>
                <div className="">
                  
                <big className= "text-danger">{error.message}</big>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 loginImgContainer ">
            <img className="loginImg" style={{ width: "53rem" }} src={loginImg} alt="" />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Login;
