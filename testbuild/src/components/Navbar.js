import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo1 from "../logo1.svg";
import Clothing from "./Clothing";
import { FaBeer } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsFillBasketFill } from "react-icons/bs";
import { VscSignOut } from "react-icons/vsc";
import { useState } from "react";

function ProfileNav() {
  const [signOut, setSignOut] = useState(false);

  const handleSignOut = () => {
    setSignOut(alert("You have signed out") && true);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo1}
            style={{ width: 50, padding: 5 }}
            alt="logo1"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/404">News</Nav.Link>
            <NavDropdown title="Wears" id="basic-nav-dropdown">
              <NavDropdown.Item href="/women">Women</NavDropdown.Item>
              <NavDropdown.Item href="/kids">Kids</NavDropdown.Item>
              <NavDropdown.Item href="/men">Men</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/account">
              <RiAccountCircleLine />
              Account
            </Nav.Link>
            <Nav.Link href="/basket">
              <BsFillBasketFill />
              Basket
            </Nav.Link>
            <Nav.Link onClick={handleSignOut}>
              <BsFillBasketFill />
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProfileNav;
