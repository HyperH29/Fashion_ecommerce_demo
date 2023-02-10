import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo1 from "../logo1.svg";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsFillBasketFill } from "react-icons/bs";
import { VscSignOut } from "react-icons/vsc";
import { useState } from "react";

function ProfileNav() {
  const [signOut, setSignOut] = useState(false);
  const [user, setUser] = useState("User");

  // Function to handle the log out
  const handleSignOut = () => {
    setUser("Not Signed In");
    setSignOut(alert("You signed out"));
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">
          <img
            src={logo1}
            style={{ width: 50, padding: 5 }}
            alt="logo1"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-baseline">
            <Nav.Link href="/home">
              {" "}
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>Home</p>
            </Nav.Link>
            <Nav.Link href="/404">
              {" "}
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                News
              </p>
            </Nav.Link>
            <NavDropdown
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                alignItems: "center",
              }}
              title="Wears"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/women">
                <p
                  style={{
                    alignSelf: "center",
                    fontSize: "18px",
                  }}
                >
                  Women
                </p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/men">
                <p style={{ fontSize: "12px" }}>Men (Coming Soon)</p>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/account">
              <RiAccountCircleLine
                className={"d-flex align-items-end mx-auto h-50"}
              />
              <p style={{ fontSize: "12px", fontWeight: "bold" }}>Account</p>
            </Nav.Link>
            <Nav.Link href="/basket">
              <BsFillBasketFill
                className={"d-flex align-items-end mx-auto h-50"}
              />
              <p style={{ fontSize: "12px", fontWeight: "bold" }}>Basket</p>
            </Nav.Link>
            <Nav.Link onClick={handleSignOut}>
              <VscSignOut className={"d-flex align-items-end mx-auto h-50"} />
              <p style={{ fontSize: "12px", fontWeight: "bold" }}>Sign Out</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <h4>Welcome: {user}</h4>
      </Container>
    </Navbar>
  );
}

export default ProfileNav;
