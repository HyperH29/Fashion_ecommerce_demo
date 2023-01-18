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
// Extra Feature
// If the user is not signed in, then the user will be redirected to the sign in page
