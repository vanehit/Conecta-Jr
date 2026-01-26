import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import "../../Styles/styles.scss";

function Signup() {
  const [formData, setFormData] = useState({ nombre: "", email: "", password: "" });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setExito(null);
    setError(null);

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setEnviando(false);
      return;
    }

    try {
      const res = await fetch("https://conectajr-backend.onrender.com/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error en el registro");

      navigate("/login");
    } catch (err) {
      setError(err.message || "No se pudo registrar el usuario.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Container>
      <Row className="align-items-center g-4">
        {/* Col izquierda */}
        <Col md={6}>
          <h2 className="fw-bold mb-3">Conecta-te JR</h2>
          <p className="text-muted">
            Espacio para compartir proceso, experiencias y aprendizajes entre
            developers junior.
          </p>
          <a
            href="https://paypal.me/vanesapaolasoria"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning fw-bold"
          >
            Invitar a un cafecito ☕
          </a>
        </Col>

        {/* Col derecha */}
        <Col md={6}>
          <div className="contact-card p-4 rounded-4 shadow-lg">
            <h2 className="text-center mb-3 fw-bold">Crear Cuenta</h2>

            {exito && <Alert variant="success">{exito}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

             <button type="submit" className="btn-conecta w-100" disabled={enviando}>
                {enviando ? "Registrando..." : "Registrarse"}
             </button>
            </Form>

            <p className="text-center mt-3">
              ¿Ya tenés cuenta?{" "}
              <Link to="/login" className="fw-bold">
                Iniciá sesión
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
