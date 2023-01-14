import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateForm from "./Signin";
import Hero from "./Hero";


let imgs = ['https://unsplash.com/photos/mEZ3PoFGs_k']
function App() {
  return (
    <div className="App">
      <Navbar />
       {/*<CreateForm />*/}
    {/*Here will be the landing page with a brief showing of items */}
        <Hero />
    </div>
  );
}

export default App;
