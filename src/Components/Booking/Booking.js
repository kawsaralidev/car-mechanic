import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";

const Booking = () => {
  // const { name, price } = servs;
  const { user } = useAuth();
  const initialInfo = { userName: user.displayName, email: user.email, phone: "" };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    // collect data
    const booking = {
      ...bookingInfo,

      // price,
      // serviceName: name,
    };
    // send to the server
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("booking successfully");
          // setBookingSuccess(true);
          // handleBookingClose();
        }
      });

    e.preventDefault();
  };

  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-lg-6 ">
          <img
            className="w-100"
            src="https://image.freepik.com/free-vector/woman-choosing-dates-calendar-appointment-booking_23-2148552956.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <form onSubmit={handleBookingSubmit}>
            <label htmlFor="exampleInputPassword1"></label>
            <input onBlur={handleOnBlur} className="w-75 mb-3" type="name" name="name" id="" defaultValue={user.displayName} required />
            <label htmlFor="exampleInputEmail1"></label>
            <input onBlur={handleOnBlur} className="w-75  mb-3" type="email" name="email" id="" defaultValue={user.email} required />
            <br />
            <label htmlFor="exampleInputPassword1"></label>
            <input onBlur={handleOnBlur} className="w-75 mb-3" type="number" name="phone" id="" placeholder="phone number" required />
            <br />
            <Button type="submit" className="w-50 bg-dark mb-3">
              Submit
            </Button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
