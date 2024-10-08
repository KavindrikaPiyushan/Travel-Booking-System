import React from "react";
import Heading from "../components/common/Heading";
import Rooms from "../components/home/Rooms";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";


export default function Room() {
  return (
    <>
    <Header/>  <Heading heading="Hotels"  />
    
      <Rooms />
      <Footer/>
    </>
  );
}
