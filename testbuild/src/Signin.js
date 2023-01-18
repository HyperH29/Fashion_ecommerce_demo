import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo1 from './logo1.svg';
import './form.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Signin from './Nav1'

// If user information is correct then redirect to the home page
let user = {
    name: "user",
    email: "user@gmail.com",
    password: "p1"
}


// Won't need the above code for later
// If user signs in successfully, redirect to the home page
// else display error message

const SignIn = () => {
    const [view, setView] = useState('signin');
    const [email, setEmail] = useState('user@gmail.com');
    const [password, setPassword] = useState('p1'); // This is a placeholder for the password

    // If the value of user is this then redirect to the home page

    // If the user is not found then display error message
    const handleSignIn = () => {
        if (email === user.email && password === user.password) {
            setEmail('user@gmail.com');
            setPassword('p1');
            setView(<Navigate to={'/home'}/>);
        }
        // Use router to set the view to the home page

    };
    if (view === "signin") {
        return (
            <div>
            <Signin />
            <div className="signin-card bg-light">
                <img width={150} className= "sign-logo" src={logo1} alt={logo1}/>
                <Form>
                    <Form.Label>Sign In {user.name}</Form.Label>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" xs={4}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save Password"/>
                    </Form.Group>
                    <Button variant="dark" type="submit" onClick={() => handleSignIn()}>
                        Sign In</Button>
                    {/*Once sign is press button will load and hold for a few seconds then enter the main product page */}
                    {/*        If the user enters the wrong details they will be asked to resubmit. */}
                </Form>
            </div>
            </div>
        )
    } else {
        return (
            <div>
                {view}
            </div>
        )
    }

}
export default SignIn;