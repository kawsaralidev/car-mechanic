import React from "react";
import { Accordion } from "react-bootstrap";

const Question = () => {
  return (
    <div className="container">
      <div className="row ">
        <h1 className="my-4">Popular Question</h1>
        <div className="col-lg-6 col-sm-12 ">
          <div className="text-start">
            <p>
              We offer a full range of garage services to vehicle owners in Tucson. We can help you with everything from an oil change to an
              engine change. We can handle any problem on both foreign and domestic vehicles.
            </p>
            <ul className="mt-3">
              <li>We make auto repair more convenient for you</li>
              <li>We are a friendly and professional group of people</li>
              <li>We handle a wide range of car services</li>
              <li>Same day service for most repairs and maintenance</li>
              <li>We get the job done right — the first time</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Should I consider using synthetic oil?</Accordion.Header>
              <Accordion.Body>
                Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into
                larger ones.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What parts should be replaced?</Accordion.Header>
              <Accordion.Body>
                Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into
                larger ones.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How do I keep track of routine?</Accordion.Header>
              <Accordion.Body>
                Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into
                larger ones.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Question;
