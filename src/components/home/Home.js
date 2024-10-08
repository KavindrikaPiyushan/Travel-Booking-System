import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Service";
import Rooms from "./Rooms";
import Teams from "./Team";
import Header from "../common/Header";
import Footer from "../common/Footer";
export default function Home() {
  return (
    <>
      <Header/>
      <Carousel />
      <About />
      <Rooms />
      <Services />
      <Teams />
      <Footer/>
    </>
  );
}
