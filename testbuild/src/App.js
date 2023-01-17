import React from 'react';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateForm from "./Signin";
import './styles.css';
import Footer from "./Footer";


const user = "user" // This is a placeholder for the user name.
function calAge() {
    return "You are " + (2021 - 1999);
}
let imgs = ['https://unsplash.com/photos/mEZ3PoFGs_k']
function App() {
  return (
    <div className="App">
      <Navbar />

        {/*<h1>Welcome {user}</h1>*/}
        {/*<p>{calAge()}</p> */}
       <CreateForm />
    {/*Here will be the landing page with a brief showing of items */}
    {/*    <Hero />*/}
        {/*Set the cards below in a row: 3=lg 1=sm*/}
      {/*  <div className="row " style={{ backgroundColor: "black",display: "flex",  justifyContent: "center"}}>*/}
      {/*  <CreateCard />*/}
      {/*<CreateCard />*/}
      {/*<CreateCard />*/}
      {/*      </div>*/}
        <Footer />
    </div>
  );
}
// add arrays to the card component
// Active sign in page
// Stake it and send work.
export default App;

// Use route to redirect to the home page
// make an array of objects to put in the card component
// Update content on site to show user has logged in.