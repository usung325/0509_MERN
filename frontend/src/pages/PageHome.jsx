import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageHome() {
  async function getData() {
    const response = await fetch("http://localhost:5001/api/calls");
    console.log(response);
  }
  return (
    <>
      <Header />
      <div>hello</div>
      <button onClick={getData}>dataButton</button>
      <Footer />
    </>
  );
}
