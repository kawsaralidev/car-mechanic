import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, img, name, description, price } = service;
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };
  return (
    <div className=" col-lg-12 col-sm-12 ">
      <div className="row col-lg-12 rounded service-style col-sm-12">
        <div className="col-lg-5">
          <img className="w-100" src={img} alt="" />
        </div>
        <div className="col-lg-7 py-2 text-style text-start ">
          <h4 >{name}</h4>
          <p >{description.slice(0, 30)}</p>
          <h5 className="text-info">{price}</h5>
          <Link to={`/details/${_id}`}>
            <button className="service-btn mx-3 rounded ">Details</button>
          </Link>
          <Button onClick={handleBooking} className="service-btn w-25 mx-3 rounded ">
            Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
