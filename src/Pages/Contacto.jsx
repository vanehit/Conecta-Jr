import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/styles.scss";

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
      const response = await fetch("https://conectajr-backend.onrender.com/api/mensajes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error en la respuesta del servidor");
      }

      const data = await response.json();
      setExito(data.mensaje || "¡Gracias por tu mensaje!");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      setError(err.message || "Ocurrió un error al enviar tu mensaje.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="contacto-seccion">
      <Container className="contacto-container py-5">
        <Row className="justify-content-center align-items-center">
          {/* Columna izquierda - Formulario */}
          <Col md={6}>
            <div className="contact-card rounded-4 shadow-lg p-4">
              <h2 className="text-center mb-3 fw-bold">Sumate a CONECTA JR</h2>

              {exito && <Alert variant="success" className="fade-in">{exito}</Alert>}
              {error && <Alert variant="danger" className="fade-in">{error}</Alert>}

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
                    placeholder="Contame en qué etapa estás como developer junior 😊"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="btn-conecta w-100"
                  disabled={enviando}
                >
                  {enviando ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" /> 
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </Button>
              </Form>
            </div>
          </Col>

          {/* Columna derecha - Invitación cercana */}
          <Col md={6} className="text-center d-none d-md-block p-4">
            <h2 className="fw-bold mb-3">¿Te gusta lo que ves?</h2>
            <p className="text-muted fs-5 mb-4">
              Si te resulta útil el contenido y quieres estar al tanto de todo lo nuevo, 
              ¡mandame un mensaje! Me encanta conocer a otros juniors y saber en qué etapa estás.
            </p>
            
            <div className="d-flex flex-column align-items-center gap-3">
              <Link to="/signup" className="btn btn-success btn-lg">
                Registrate y unite
              </Link>
              <p className="text-muted small">
                O simplemente saludame desde el formulario, ¡leo todos los mensajes!
              </p>
            </div>

            <img 
              src="/images/conecta-tejr.png" 
              alt="Promoción Conecta-te JR" 
              className="img-conectatejr mt-4" 
              style={{ maxWidth: "350px" }} 
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contacto;