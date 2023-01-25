import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateForm from "./Regester/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Clothing from "./components/Clothing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route index element={<CreateForm />} />
        <Route path="/signin" element={<CreateForm />} />
        <Route path="/home" element={<Hero />} />
        <Route path={"/women"} element={<Clothing />} />
        <Route path={"/men"} element={<Clothing />} />
        <Route path={"/kids"} element={<Clothing />} />
        {/*<Route path={"/account"} element={<Profile />} />*/}
        {/*<Route path={"/basket"} element={<Basket />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

// Active sign in page
export default App;

// Use route to redirect to the home page
// make an array of objects to put in the card component
// Update content on site to show user has logged in.

//account
//  basket
