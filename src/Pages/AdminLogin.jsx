import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import "../Styles/styles.scss";
import Footer from "../components/Footer/Footer";

const AdminLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEnviando(true);

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
      });

      if (!res.ok) throw new Error("Login fallido");
      const data = await res.json();

      login(data.token);
      navigate("/admin");
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
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
                <h2 className="text-center mb-3 fw-bold">Panel de Administración</h2>
                <p className="text-center text-muted mb-4">Accedé con tus credenciales para gestionar mensajes.</p>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Usuario"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="w-100 btn-conecta" disabled={enviando}>
                    {enviando ? (
                      <>
                        <Spinner animation="border" size="sm" /> Ingresando...
                      </>
                    ) : (
                      "Ingresar al Panel"
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default AdminLogin;
