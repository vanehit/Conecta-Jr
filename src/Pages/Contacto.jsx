import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import "../Styles/styles.scss";
import Footer from "../components/Footer/Footer";

function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setExito(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/mensajes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const data = await response.json();
      setExito(data.mensaje || "¡Gracias por contactarte! Te responderé pronto 😊");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      setError("Ocurrió un error al enviar tu mensaje. Intentalo de nuevo más tarde.");
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
                <h2 className="text-center mb-3 fw-bold">Conectá con CONECTA JR</h2>
                <p className="text-center text-muted mb-4">Quiero escucharte. Escribime tu mensaje.</p>

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
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="mensaje"
                      placeholder="Tu mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="w-100 btn-conecta" disabled={enviando}>
                    {enviando ? (
                      <>
                        <Spinner animation="border" size="sm" /> Enviando...
                      </>
                    ) : (
                      "Enviar mensaje"
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
}

export default Contacto;
