import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import "../../Styles/styles.scss";
import Footer from "../../components/Footer/Footer";

function Signup() {
  const [formData, setFormData] = useState({ nombre: "", email: "", password: "" });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setExito(null);
    setError(null);

    // Validación simple antes de enviar
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setEnviando(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error en el registro");

      setExito(data.message || "Registro exitoso. Ahora puedes iniciar sesión.");
      setFormData({ nombre: "", email: "", password: "" });
    } catch (err) {
      setError(err.message || "No se pudo registrar el usuario.");
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
                <h2 className="text-center mb-3 fw-bold">Crear Cuenta</h2>
                <p className="text-center text-muted mb-4">
                  Registrate para controlar tus visitas.
                </p>

                {exito && <Alert variant="success">{exito}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
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
                        <Spinner animation="border" size="sm" /> Registrando...
                      </>
                    ) : (
                      "Registrarse"
                    )}
                  </Button>

                  <p className="text-center mt-3">
                    ¿Ya tenés cuenta?{" "}
                    <Link to="/login" className="text-primary fw-bold">
                      Iniciá sesión
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

export default Signup;
