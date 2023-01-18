import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {render} from "@testing-library/react";
import CreateCard from "./Card";
import ProfileNav from "./Navbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const slideStyles = {
    height: "100%",width:"100%", backgroundColor: "lightblue"
}
const imgStyles = {
    height: "100%", width: "100%", backgroundPosition: "center", backgroundSize: "cover"
}
function Hero() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>


    <Navbar/>


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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
              <div className="row " style={{ backgroundColor: "white",display: "flex",  justifyContent: "center"}}>
              <CreateCard />
            <CreateCard />
            <CreateCard />
                  </div>
            <Footer/>
        </div>
    );
}
// This will reader the carousel with applying it to App.js
//render(<Hero />);
export default Hero;