import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateForm from "./Regester/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route index element={<CreateForm />} />
        <Route path="/signin" element={<CreateForm />} />
        <Route path="/home" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

// Active sign in page
export default App;

// Use route to redirect to the home page
// make an array of objects to put in the card component
// Update content on site to show user has logged in.
