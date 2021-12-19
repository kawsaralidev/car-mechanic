import React from "react";
import { Button } from "react-bootstrap";
import work from "../../images/work.jpg";

const Works = () => {
  return (
    <div>
      <h1 className="my-5">
        Wheel <span className="text-info"> Works</span>
      </h1>
      <div className="bg-dark">
        <div className="container">
          <div className="row ">
            <div className="text-start col-lg-6 col-sm-12 mt-5">
              <h2 className=" text-info  ">The trusted experts will to keep you safe on the road.</h2>
              <p className=" text-white mt-3">
                Know how to pursue pleasure rationally seds that encounter consequences are ut painfull nor again is there anyone who lovess
                or pursues or desires to obtain pain of itself, because it is pain, in which toil and pains can procure him some great
                pleasure ationally seds encounter works consequencees that are uts extremelly painfull pleasure rationally seds encounters
                consequences that are seds extremely painfull nor or pursues or desires.
              </p>
              <Button className=" service-btn ">More Details</Button>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img className="rounded my-4" style={{ width: "80%" }} src={work} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
