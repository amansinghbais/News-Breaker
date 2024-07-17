import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = ({category, setCategory}) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">News Breaker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link onClick={(() => setCategory("general"))}>General</Nav.Link>
          <Nav.Link onClick={(() => setCategory("health"))}>Health</Nav.Link>
          <Nav.Link onClick={(() => setCategory("business"))}>Business</Nav.Link>
          <Nav.Link onClick={(() => setCategory("entertainment"))}>Entertainment</Nav.Link>
          <Nav.Link onClick={(() => setCategory("sports"))}>Sports</Nav.Link>
          <Nav.Link onClick={(() => setCategory("technology"))}>Technology</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent