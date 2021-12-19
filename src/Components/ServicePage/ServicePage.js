import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ServicePage = (props) => {
  const { _id, img, name, description, price } = props.service;
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };
  return (
    <div className=" col-lg-4 col-sm-12 ">
      <div className="m-3  rounded service-style">
        <img className=" service rounded w-100" src={img} alt="" />
        <div className="pb-3">
          <h5> {name}</h5>

          <h5 className="text-info">{price}</h5>
          <Link to={`/details/${_id}`}>
            <button className="service-btn mx-3 rounded ">Details</button>
          </Link>

          <button onClick={handleBooking} className="service-btn w-25 mx-3 rounded ">
            Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
