import CreateCard from "./Card";
import React from "react";
import Navbar from "./Navbar";
// List of cards and content
function Clothing() {
  return (
    <>
      <Navbar />
      <div className={"row"}>
        <CreateCard
          title={"This is a Green Shirt"}
          item={"Green Shirt -£500"}
          image={
            "https://images.unsplash.com/photo-1627338823546-f939e14caa48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80"
          }
        />
        <CreateCard
          title={"This is a Blue Dress"}
          item={"Blue Dress -£700"}
          image={
            "https://images.unsplash.com/photo-1602424158419-868ea180a67f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        />
        <CreateCard
          title={"This is a Purple Dress"}
          item={"Purple Dress -£7000"}
          image={
            "https://images.unsplash.com/photo-1559034750-cdab70a66b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        />
        <CreateCard
          title={"This is a Red Dress"}
          item={"Red Dress -£9000"}
          image={
            "https://images.unsplash.com/photo-1560457099-64cb8a5eb503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          }
        />
      </div>
    </>
  );
}

export default Clothing;
