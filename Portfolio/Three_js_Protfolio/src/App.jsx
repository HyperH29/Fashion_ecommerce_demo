import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Tech,
  Works,
  Contact,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
  StarsCanvas,
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#292332]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// End time: 1:00:24
