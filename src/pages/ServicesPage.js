import React from "react";
import Heading from "../components/common/Heading";
import Services from "../components/home/Service";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";


export default function Service() {
  return (
    <>
      <Header/>
      <Heading heading="Services" title="Home" subtitle="Services" />
      <Services />
      <Footer/>
    </>
  );
}
