import { NavLink, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

function CustomNavbar() {
  const navigate = useNavigate();
  const { isAuthenticated, userName, logout } = useAuth();

  const handleLogout = () => {
    logout();
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
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/consejos">
              Recursos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/conecta-en-corto">
              Conecta en corto
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
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

            {!isAuthenticated ? (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Button as={NavLink} to="/signup" variant="success" size="sm">
                  Registrarse
                </Button>
              </>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <span className="text-light small">
                  Hola, {userName || "Developer"}
                </span>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
