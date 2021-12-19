import React, { useEffect, useState } from "react";
import Booking from "../../Booking/Booking";
import useAuth from "../../Hooks/useAuth";
import MyBook from "./MyBook";

const Mybooking = () => {
  const { user } = useAuth();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/booking?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div className="container">
      <h2>My Booking: {booking.length}</h2>
      <div className="row">
        {booking.map((order) => (
          <MyBook key={order._id} order={order}></MyBook>
        ))}
      </div>
    </div>
  );
};

export default Mybooking;
