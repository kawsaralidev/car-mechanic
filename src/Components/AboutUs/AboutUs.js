import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="col-lg-6 col-sm-12">
          <img
            className="w-100 mt-5 rounded px-3"
            src="https://image.freepik.com/free-photo/car-mechanic-customer-shaking-hands_342744-258.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="text-dark mt-3">About Us</h1>
          <p className="text-dark px-3 text-start">
            An auto mechanic is a mechanic with a variety of automobile makes or either in a specific area or in a specific make of
            automobile. In repairing cars, their main role is to diagnose the problem accurately and quickly. They often have to quote
            prices for their customers before commencing work or after partial disassembly for inspection. Their job may involve the repair
            of a specific part or the replacement of one or more parts as assemblies. Basic vehicle maintenance is a fundamental part of a
            mechanic's work in modern industrialized countries, while in others they are only consulted when a vehicle is already showing
            signs of malfunction. Preventive maintenance is also a fundamental part of a mechanic's job, but this is not possible in the
            case of vehicles that are not regularly maintained by a mechanic. One misunderstood aspect of preventive maintenance is
            scheduled replacement of various parts, which occurs before failure to avoid far more expensive damage. With the rapid past.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
