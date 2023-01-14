
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateForm from "./Signin";
import Hero from "./Hero";
import CreateCard from "./Card";
import './styles.css';



let imgs = ['https://unsplash.com/photos/mEZ3PoFGs_k']
function App() {
  return (
    <div className="App">
      <Navbar />
       <CreateForm />
    {/*Here will be the landing page with a brief showing of items */}
    {/*    <Hero />*/}
    {/*    <CreateCard />*/}
    </div>
  );
}

export default App;
