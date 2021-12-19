import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark p-2 text-white  p-5 mt-5">
      <div className="container">
        <Row>
          <Col xs={12} md={6} lg={7} className="text-start">
            <h3>Ali Car Services</h3>
          </Col>

          <Col xs={12} md={6} lg={5}>
            {/* <Navbar>About Online Food</Navbar> */}
            <Row>
              <Col xs={6} md={6} lg={6} className="text-start p-3">
                <strong>About Online Booking</strong>
                <br />
                <strong>Read our blog</strong>
                <br />
                <strong>Sign up to Tour</strong>
                <br />
                <strong>Add your comment</strong>
              </Col>
              <Col xs={6} md={6} lg={6} className="text-start p-3">
                <strong>Get help</strong>
                <br />
                <strong>Read FAQs</strong>
                <br />
                <strong>View all cities</strong>
                <br />
                <strong>Turisum near me</strong>
              </Col>
            </Row>
            <small>copy©right ali car service</small>
          </Col>
        </Row>
        <Row>{/* <Col md={}></Col> */}</Row>
      </div>
    </div>
  );
};

export default Footer;
