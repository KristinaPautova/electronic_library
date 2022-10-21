import React, { Fragment } from "react";
// import Footer from "../../Global/Footer/Footer";
import Heading from "../Headng/Heading";
import Description from "../Description/Description";
import Rent from "../Rent/Rent";
import Service from "../Service/Service";
import Reviews from "../Reviews/Reviews";
import Check from "../Check/Check";

const Home = () => (
  <Fragment>
    <Heading />
    <Description />
    <Rent />
    <Service />
    <Reviews />
    <Check />
    {/*<Footer/>*/}
  </Fragment>
);

export default Home;
