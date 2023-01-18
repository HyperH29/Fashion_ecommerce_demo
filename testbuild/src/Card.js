import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// This card element will be for the items that are being sold
//  Big screens will have 3 cards per row
//  Small screen will have 1 card per row

let items = ["This new item £60", "This is another item", "This is the last item"]


function CreateCard() {
    return (
        // Whithin the card we will list what items are being sold
        // Once card is clicked we will show more details
        // If button is pressed we will add item to basket
        <Card style={{ width: '32rem', padding:10, margin: 50 }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {items[0]}
                </Card.Text>

                <Button variant="primary"
                    >Go somewhere</Button>

            </Card.Body>
        </Card>

    );
}

export default CreateCard;

