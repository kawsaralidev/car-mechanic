import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";
import BookingPag from "../BookingPag/BookingPag";

const BookingPages = () => {
  //   const [serv, setServ] = useState([]);

  //   useEffect(() => {
  //     const url = "http://localhost:5000/services";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setServ(data));
  //   }, []);
  return (
    <div>
      {/* <h1 className="text-info my-5">Our Best Services</h1>
      <div className="services  container">
        <div className="row ">
          {serv.slice(0, 6).map((servs) => (
            <Booking key={servs._id} servs={serv.name} servs={serv.price}></Booking>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BookingPages;
