import React from "react";
import ChooseUs from "../../../ChooseUs/ChooseUs";
import Question from "../../../Question/Question";
import Services from "../../../Services/Services";
import Works from "../../../Works/Works";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Works></Works>
      <ChooseUs></ChooseUs>
      <Question></Question>
    </div>
  );
};

export default Home;
