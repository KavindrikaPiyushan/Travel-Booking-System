import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Service";
import Header from "../common/Header";
import Footer from "../common/Footer";
export default function Introducing() {
  return (
    <>
      <Header/>
      <Carousel />
      <About />
      <Services />
      <Footer/>
    </>
  );
}
