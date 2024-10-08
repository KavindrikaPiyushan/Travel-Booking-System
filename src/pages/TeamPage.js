import React from "react";
import Heading from "../components/common/Heading";
import Teams from "../components/home/Team";
import Header from "../components/common/Header"; 
import Footer
 from "../components/common/Footer";

export default function Team() {
  return (
    <>
    <Header/>
      <Heading heading="Team" title="Home" subtitle="Team" />
      <Teams />
      <Footer/>
    </>
  );
}
