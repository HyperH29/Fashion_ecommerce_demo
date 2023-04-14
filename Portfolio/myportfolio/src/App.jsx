import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  Bio,
  Contact,
  Experience,
  Hero,
  Loader,
  Navbar,
  Tech,
  Testimonials,
  Work
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patten bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Bio />
        <Experience />
        <Tech />
        <Work />
        <Testimonials />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
