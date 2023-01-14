import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ButtonExample() {
    return (
        <>
            <Button variant="warning" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="lg"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>{' '}
        </>
    );
}

export default ButtonExample;

//We will program this later
// Get this is start when user clicks on the button await fetch from items
// The items will contain the sign in information
// If the user is not signed in, then the user will be redirected to the sign in page
