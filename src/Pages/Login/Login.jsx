import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 👈 Agregar useNavigate
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import "../../Styles/styles.scss";
import Footer from "../../components/Footer/Footer";

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
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Credenciales inválidas");

      const data = await res.json();
      localStorage.setItem("userId", data.userId);

      // 🔄 Redirigir al Home
      navigate("/");
    } catch (err) {
      setError("Email o contraseña incorrectos.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <main className="contacto-seccion d-flex align-items-center justify-content-center">
        <Container className="contacto-container py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="contact-card p-4 rounded-4 shadow-lg">
                <h2 className="text-center mb-3 fw-bold">Iniciar Sesión</h2>
                <p className="text-center text-muted mb-4">
                  Accedé para registrar tus visitas.
                </p>

                {error && <Alert variant="danger">{error}</Alert>}

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

                  <Button
                    type="submit"
                    className="w-100 btn-conecta"
                    disabled={enviando}
                  >
                    {enviando ? (
                      <>
                        <Spinner animation="border" size="sm" /> Iniciando...
                      </>
                    ) : (
                      "Iniciar sesión"
                    )}
                  </Button>

                  <p className="text-center mt-3">
                    ¿No tenés cuenta?{" "}
                    <Link to="/signup" className="text-primary fw-bold">
                      Registrate
                    </Link>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Login;
