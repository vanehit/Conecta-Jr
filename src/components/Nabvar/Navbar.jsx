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
        {/* Brand / Logo */}
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
            <Nav.Link as={NavLink} to="/"> Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/MiExperiencia">Mi experiencia</Nav.Link>
            <Nav.Link as={NavLink} to="/consejos">Recursos</Nav.Link>
            <Nav.Link as={NavLink} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={NavLink} to="/conecta-en-corto">Conecta en corto</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
          </Nav>

          {/* Acciones de autenticación */}
          <Nav className="align-items-lg-center gap-lg-2">
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

      {/* Visitas (solo desktop) */}
      <div className="navbar-visits d-none d-lg-flex">
        <Visits />
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
