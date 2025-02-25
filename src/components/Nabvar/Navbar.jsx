import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo-Conecta-jr-icono.png";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Conecta Jr Logo"
            style={{ width: "150px", marginRight: "5px" }}
          />
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            CONECTA-JR
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/mi-experiencia">Mi Experiencia</Nav.Link>
            <Nav.Link as={Link} to="/consejos">Consejos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
