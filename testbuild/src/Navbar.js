import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from './logo1.svg';

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo1} style={{width:50, padding:5}} alt="logo1" className="logo"/></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">News</Nav.Link>
                        <NavDropdown title="Wears" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Kids
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Men</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;