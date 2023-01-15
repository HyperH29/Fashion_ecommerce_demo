import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// This card element will be for the items that are being sold
//  Big screens will have 3 cards per row
//  Small screen will have 1 card per row
function CreateCard() {
    return (
        // Whithin the card we will list what items are being sold
        // Once card is clicked we will show more details
        // If button is pressed we will add item to basket
        <Card style={{ width: '18rem', padding:10, margin: 50 }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    );
}

export default CreateCard;

// Using the method below, I want to set it for the button of main cards.
// Or once image is clicked it will transition to more options below.
// This will be for the items to buy.
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
//
// function Example() {
//     const [open, setOpen] = useState(false);
//
//     return (
//         <>
//             <Button
//                 onClick={() => setOpen(!open)}
//                 aria-controls="example-collapse-text"
//                 aria-expanded={open}
//             >
//                 click
//             </Button>
//             <Collapse in={open}>
//                 <div id="example-collapse-text">
//                     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//                     terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//                     labore wes anderson cred nesciunt sapiente ea proident.
//                 </div>
//             </Collapse>
//         </>
//     );
// }
//
// render(<Example />);