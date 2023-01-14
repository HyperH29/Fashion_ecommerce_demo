import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo1 from './logo1.svg';
function CreateForm() {
    return (
        <div className={"signin-card"}>
        <Form>
            <img src={logo1} alt={logo1}/>
            <Form.Label>Sign In</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    );
}

// If user signs in successfully, redirect to the home page
// else display error message
export default CreateForm;
