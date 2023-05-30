import { Navbar, Nav, Container } from "react-bootstrap";
import "../../App.css";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/checkout">Checkout</Nav.Link>

            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
