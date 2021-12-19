import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, signInWithGoogle, error } = useFirebase();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(field, value, newLoginData);
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("your password did not match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);

    e.preventDefault();
  };
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-lg-6 ">
          <img className="w-100" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg" alt="" />
        </div>
        <div className="col-lg-6">
          <form onSubmit={handleLoginSubmit}>
            <h3>Please Register</h3>
            <label htmlFor="exampleInputPassword1"></label>
            <input onChange={handleOnChange} className="w-75 mb-3" type="name" name="name" id="" placeholder="your name" required />
            <label htmlFor="exampleInputEmail1"></label>
            <input onChange={handleOnChange} className="w-75  mb-3" type="email" name="email" id="" placeholder="email" required />
            <br />
            <label htmlFor="exampleInputPassword1"></label>
            <input onChange={handleOnChange} className="w-75 mb-3" type="password" name="password" id="" placeholder="password" required />
            <label htmlFor="exampleInputPassword1"></label>
            <input
              onChange={handleOnChange}
              className="w-75 mb-3"
              type="password"
              name="password2"
              id=""
              placeholder="re type password"
              required
            />
            <br />
            <Button type="submit" className="w-50 btn-banner mb-3">
              Register
            </Button>{" "}
            <br />
            <Link to="/login">
              <Button variant="text">Already Register? Please Login</Button>
            </Link>{" "}
            <br />
            <Button onClick={signInWithGoogle} className="w-50 btn-banner mb-3">
              Google Sign In
            </Button>
          </form>
          {/* {user?.email && (
            <div className="alert alert-success" role="alert">
              Register successfully
            </div>
          )}
          {error && <Alert>this is an error</Alert>} */}
        </div>
      </div>
    </div>
  );
};

export default Register;
