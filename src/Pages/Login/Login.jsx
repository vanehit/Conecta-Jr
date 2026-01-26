import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import "../../Styles/styles.scss";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError(null);

    try {
      const res = await fetch(
        "https://conectajr-backend.onrender.com/api/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Credenciales inválidas");

      const data = await res.json();
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (err) {
      setError("Email o contraseña incorrectos.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="contacto-seccion">
      <Container className="contacto-container py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {/* Link fuera de la card */}
            <Link to="/" className="back-home mb-3 d-inline-block">
              ← Volver al inicio
            </Link>

            <div className="contact-card p-4 rounded-4 shadow-lg">
              <h2 className="text-center mb-3 fw-bold">Iniciar Sesión</h2>
              <p className="text-center text-muted mb-4">
                Accedé para seguir el proceso y participar del espacio CONECTA JR.
              </p>

              {error && <Alert variant="danger" className="fade-in">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
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
                    placeholder="Tu contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <button
                  type="submit"
                  className="btn-conecta w-100"
                  disabled={enviando}
                >
                  {enviando ? (
                    <>
                      <Spinner animation="border" size="sm" /> Iniciando...
                    </>
                  ) : (
                    "Iniciar sesión"
                  )}
                </button>

                <p className="text-center mt-3">
                  ¿No tenés cuenta?{" "}
                  <Link
                    to="/signup"
                    className="text-primary fw-bold text-decoration-underline"
                  >
                    Registrate
                  </Link>{" "}
                  y accedé a contenido exclusivo del blog.
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Login;
