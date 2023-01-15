
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
       {/*<CreateForm />*/}
    {/*Here will be the landing page with a brief showing of items */}
        <Hero />
        {/*Set the cards below in a row: 3=lg 1=sm*/}
        <div className="row " style={{ backgroundColor: "black",display: "flex",  justifyContent: "center"}}>
        <CreateCard />
      <CreateCard />
      <CreateCard />
            </div>
    </div>
  );
}
// add arrays to the card component
// Active sign in page
// Stake it and send work.
export default App;
