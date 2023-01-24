import logo2 from "../logo2.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Signin() {
  return (
    <Navbar bg="light" expand="md" style={{ border: 20 }}>
      <Container className="nav-bar">
        <Navbar.Brand href="#home" style={{ margin: "auto" }}>
          <img
            src={logo2}
            style={{ width: 200 }}
            alt="logo1"
            className="logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Signin;
