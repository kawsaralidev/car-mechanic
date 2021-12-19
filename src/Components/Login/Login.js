import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, signInWithGoogle } = useFirebase();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);

    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-lg-6 ">
          <img className="w-100" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg" alt="" />
        </div>
        <div className="col-lg-6">
          <form onSubmit={handleLoginSubmit}>
            <h3>Please Login</h3>
            <label htmlFor="exampleInputEmail1"></label>
            <input onChange={handleOnChange} className="w-75  mb-3" type="email" name="email" id="" placeholder="email" required />
            <br />
            <label htmlFor="exampleInputPassword1"></label>
            <input onChange={handleOnChange} className="w-75 mb-3" type="password" name="password" id="" placeholder="password" required />
            <br />
            <Button type="submit" className="w-50 btn-banner mb-3">
              Login
            </Button>
            <br />
            <Link to="/register">
              <Button variant="text">New User? Please Register</Button>
            </Link>
            <br />
            <Button onClick={handleGoogleSignIn} className="w-50 btn-banner mb-3">
              Google Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
