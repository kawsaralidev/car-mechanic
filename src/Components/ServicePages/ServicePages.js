import React, { useEffect, useState } from "react";
import ServicePage from "../ServicePage/ServicePage";

const ServicePages = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "https://arcane-beach-62066.herokuapp.com/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className=" my-5">
        Our Best <span className="text-info"> Services</span>
      </h1>
      <div className="  container">
        <div className="  row">
          {services.map((service) => (
            <ServicePage key={service.key} service={service}></ServicePage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePages;
