import { NavLink, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Visits from "../Visits/Visits";

function CustomNavbar() {
  const navigate = useNavigate();
  const isAuth = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/" className="custom-white">
          <img
            src="/images/logo-Conecta-jr.png"
            alt="Conecta Jr Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Navegación principal */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/consejos">Recursos</Nav.Link>
            <Nav.Link as={NavLink} to="/conecta-en-corto">Conecta en corto</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
          </Nav>

          {/* Acciones / CTA */}
          <Nav className="align-items-lg-center gap-lg-2">
            <Button
              as={NavLink}
              to="/roadmap"
              variant="outline-success"
              size="sm"
              className="btn-roadmap"
            >
              🧭 Roadmap junior
            </Button>

            {!isAuth ? (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Button
                  as={NavLink}
                  to="/signup"
                  variant="success"
                  size="sm"
                >
                  Registrarse
                </Button>
              </>
            ) : (
              <Button
                variant="outline-light"
                size="sm"
                onClick={handleLogout}
              >
                Cerrar sesión
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Visitas */}
      <div className="navbar-visits d-none d-lg-flex">
        <Visits />
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
