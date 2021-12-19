import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { Id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${Id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };
  return (
    <div className="container mt-5">
      <div className="row p-1 m-2 text-start rounded border g-3 ">
        <div className="col-lg-6 col-sm-12">
          <img className="w-75 hidden" src={detail.img} alt="" />
        </div>
        <div className="col-lg-6 text-start col-sm-12">
          <h2 className="text-primary">{detail.name}</h2>
          <h4>Price: {detail.price}</h4>
          <p>{detail.description}</p>
          <Button onClick={handleBooking} className="service-btn w-25  rounded ">
            Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
