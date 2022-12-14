import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Component/Card";
import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Carousel />
    <Card />
    <Footer />

    
  </>
);
