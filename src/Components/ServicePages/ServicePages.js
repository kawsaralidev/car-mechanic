import React, { useEffect, useState } from "react";
import ServicePage from "../ServicePage/ServicePage";

const ServicePages = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-info my-5">Our Best Services</h1>
      <div className="services  container">
        <div className=" services-container row">
          {services.map((service) => (
            <ServicePage key={service.key} service={service}></ServicePage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePages;
