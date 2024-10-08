import React from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/About";
import Header from "../components/common/Header"; 
import Footer from "../components/common/Footer"; 


export default function AboutUs() {
  return (
    <>
    <Header/>

      <Heading heading="About" title="Home" subtitle="About" />
      <About />
      <Footer/>
    </>
  );
}
