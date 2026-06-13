import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/styles.scss";

function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setExito(null);
    setError(null);

    try {
      const response = await fetch("https://conectajr-backend.onrender.com/api/mensajes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error en el servidor");
      setExito("¡Gracias por tu mensaje! Te responderé a la brevedad.");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      setError("Ocurrió un error al enviar el mensaje.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="contacto-seccion py-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <div className="contact-card rounded-4 shadow-lg p-4">
              <h2 className="text-center mb-3 fw-bold">Sumate a CONECTA JR</h2>
              
              {exito && <Alert variant="success">{exito}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} required />
                </Form.Group>
                <Button type="submit" className="btn-conecta w-100" disabled={enviando}>
                  {enviando ? <Spinner animation="border" size="sm" /> : "Enviar mensaje"}
                </Button>
              </Form>

              {/* Bloque de aporte voluntario */}
              <div className="mt-4 p-3 bg-light rounded text-center border">
                <p className="mb-2 small text-muted">
                  ¿Te ayudó CONECTA-JR? Un pequeño aporte me permite seguir creando recursos y manteniendo la comunidad.
                </p>
                <a
                  href="https://paypal.me/vanesapaolasoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning btn-sm fw-bold"
                >
                  Invitar un cafecito (o lo que puedas) ☕
                </a>
              </div>
            </div>
          </Col>

          <Col md={6} className="text-center d-none d-md-block p-4">
            <h2 className="fw-bold mb-3">¿Te gusta lo que ves?</h2>
            <p className="text-muted fs-5 mb-4">
              Si te resulta útil el contenido, ¡mandame un mensaje! Al registrarte, te enviaré mis libros y recursos recomendados directamente a tu email.
            </p>
            <div className="d-flex flex-column align-items-center gap-3">
              <Link to="/signup" className="btn btn-success btn-lg">Registrate y recibí los recursos</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contacto;