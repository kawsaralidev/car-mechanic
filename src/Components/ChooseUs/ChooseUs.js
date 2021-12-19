import React from "react";
import choose1 from "../../images/choose/choose 1.png";
import choose2 from "../../images/choose/choose 2.png";
import choose3 from "../../images/choose/choose 3.png";

const ChooseUs = () => {
  return (
    <div>
      <h1 className="text-dark my-5">Why Choose Us</h1>
      <h5 className="my-2 text-center text-info">
        We are one of the leading auto repair shops serving customers in Tucson. <br /> All mechanic services are performed by highly
        qualified mechanics.
      </h5>
      <div className="row">
        <div className=" col-lg-4 col-sm-12 ">
          <div className="p-3 m-2  service-container  rounded-3">
            <img className="w-75" src={choose1} alt="" />
            <div>
              <h3>EVERY JOB IS PERSONAL</h3>
              <p>
                If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have
                found it.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-sm-12 ">
          <div className="p-3 m-2  service-container  rounded-3">
            <img className="w-75" src={choose2} alt="" />
            <div>
              <h3>EVERY JOB IS PERSONAL</h3>
              <p>
                If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have
                found it.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-sm-12 ">
          <div className="p-3 m-2  service-container  rounded-3">
            <img className="w-75" src={choose3} alt="" />
            <div>
              <h3>EVERY JOB IS PERSONAL</h3>
              <p>
                If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have
                found it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
