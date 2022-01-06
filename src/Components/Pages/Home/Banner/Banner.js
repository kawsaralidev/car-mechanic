import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from "../../../../images/Banner/Banner_1.jpg";
import banner2 from "../../../../images/Banner/Banner_2.jpg";
import banner3 from "../../../../images/Banner/Banner_3.jpg";

const Banner = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block " src={banner1} alt="First slide" />
          <Carousel.Caption>
            <div style={{ marginBottom: "150px" }}>
              <h3 className="text-white my-2 fs-1 fw-bold">MAKE YOUR CAR LAST LONGER</h3>
              <p className="text-white my-4 fs-5">
                The trusted expert will to you keep your safe on the road <br />
                It is a a long established fact that a render the will be distracted by the the ali car service.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <div style={{ marginBottom: "150px" }}>
              <h3 className="text-white my-4 fs-1 fw-bold">EXPERT TECHNICIANS COMPETITIVE PRICES</h3>
              <p className="text-white my-4 fs-5">
                We are committed to earning your trust by providing the expertise and value you expect. <br />
                The trusted expert will to you keep your safe on the road
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <div style={{ marginBottom: "150px" }}>
              <h3 className="text-white text-top my-4 fs-1 fw-bold">FIND THE TIRES THAT MATCH YOUR NEEDS</h3>
              <p className="text-white my-4 fs-5">
                Take advantage of our lowest prices which automatically include coupons. <br />
                The trusted expert will to you keep your safe on the road
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
