import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h1 className=" my-5">
        Our Best <span className="text-info">Services</span>
      </h1>
      <div className=" row services d-flex ">
        <div className="col-lg-6">
          <img
            className="w-100 px-4 rounded"
            src={"https://image.freepik.com/free-photo/smiling-mechanic-with-arms-crossed-spanner_1170-1699.jpg"}
            alt=""
          />
          <h3 className=" my-3">
            Our <span className="text-info">Services</span>
          </h3>
          <p className="text-start p-4">
            An auto mechanic is a mechanic with a variety of automobile makes or either in a specific area or in a specific make of
            automobile. In repairing cars, their main role is to diagnose the problem accurately and quickly. They often have to quote
            prices for their customers before commencing work or after partial disassembly for inspection. Their job may involve the repair
            of a specific part or the replacement of one or more parts as assemblies.
          </p>
        </div>
        <div className="row  col-lg-6">
          {services.slice(0, 3).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
