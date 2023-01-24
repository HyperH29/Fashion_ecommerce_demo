import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

// This card element will be for the items that are being sold
//  Big screens will have 3 cards per row
//  Small screen will have 1 card per row

function CreateCard(props) {
  const [title, setTitle] = useState([props.title]);
  const [image, setImage] = useState([props.image]);
  const [price, setPrice] = useState([props.price]);
  const [item, setItem] = useState([props.item]);

  return (
    // Whithin the card we will list what items are being sold
    // Once card is clicked we will show more details
    // If button is pressed we will add item to basket
    <Card style={{ width: "32rem", padding: 5, margin: 20 }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.item}</Card.Text>
        <Button variant="primary">Checkout</Button>
      </Card.Body>
    </Card>
  );
}

export default CreateCard;
