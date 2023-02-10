import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CreateCard from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Made a style object to use in the div
const slideStyles = {
  height: "100%",
  width: "100%",
  backgroundColor: "azure",
};
function Hero() {
  const [index, setIndex] = useState(0);

  // Controls the carousel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Navbar />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div style={slideStyles}>
            <img
              className="d-block img-fluid m-auto"
              src="https://images.unsplash.com/photo-1610737245930-e4f41bab0b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Designed amd created in London</h3>
            <p>Olympus is the luxury clothing brand of the modern era</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={slideStyles}>
            <img
              className="d-block img-fluid m-auto"
              src="https://images.unsplash.com/photo-1665716647953-4bb117252ea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Unparalleled Craftsmanship</h3>
            <p>Each collection is a work of art.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={slideStyles}>
            <img
              className="d-block img-fluid m-auto"
              src="https://images.unsplash.com/photo-1624910996561-daeb5bd84fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <h3>We are Human</h3>
            <p>Faults and all and we plan to keep it that way.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* inLine Styling for boxes, will separate to new component later*/}
      <div
        className="row"
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          margin: 100,
          flexWrap: "wrap",
          justifyContent: "center",
          columnGap: 350,
        }}
      >
        <CreateCard
          title="This is a Red Shirt"
          item="Red Shirt -£700"
          image={
            "              https://images.unsplash.com/photo-1586057708056-6149710c46cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80   "
          }
        />
        <CreateCard
          title={"This is a Yellow Jacket"}
          item={"Yellow Jacket -£600"}
          image={
            "https://images.unsplash.com/photo-1649973400827-2ad24b87a933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        />
        <CreateCard
          title={"This is a Green Shirt"}
          item={"Green Shirt -£500"}
          image={
            "https://images.unsplash.com/photo-1627338823546-f939e14caa48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80"
          }
        />
        <CreateCard
          title={"This is a Chain-piercing"}
          item={"Rhodium Plating -£900"}
          image={
            "https://images.unsplash.com/photo-1582095418003-0a379d54d26a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
          }
        />
        <CreateCard
          title={"This is a White Suit"}
          item={"White Suit -£4000"}
          image={
            "https://images.unsplash.com/photo-1604208316649-82e0b73fa964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          }
        />
        <CreateCard
          title={"This is a Gray Dress"}
          item={"Gray Dress -£1000"}
          image={
            "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        />
      </div>
      <Footer />
    </div>
  );
}
// This will reader the carousel with applying it to App.js
export default Hero;
