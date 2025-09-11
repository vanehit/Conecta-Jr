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
    // Obtener token guardado al loguearse
    const token = localStorage.getItem("token");

    const response = await fetch("https://conectajr-backend.onrender.com/api/mensajes", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "" // <--- token aquí
      },
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
    <>
      <main className="contacto-seccion d-flex align-items-center justify-content-center">
        <Container className="contacto-container py-5">
          <Row className="justify-content-center align-items-center">
            
            {/* Columna izquierda - Formulario */}
            <Col md={6}>
              <div className="contact-card rounded-4 shadow-lg p-4">
                <h2 className="text-center mb-3 fw-bold">Envíame un mensaje</h2>

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
                      placeholder="Tu mensaje o sugerencia 😊"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="btn-custom" disabled={enviando}>
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
          {/* Columna derecha - Info extra */}
          <Col md={6} className="text-center">
            <h2 className="fw-bold mb-3">Conecta-te JR</h2>
            <p className="text-muted">
              Este es un espacio para compartir ideas, aprender juntos y construir comunidad.  
              Sumate y recibí <em>apuntes, cuadernillos y recursos exclusivos</em>.
            </p>
            <p>
              <a href="./Signup" className="btn btn-success">Registrate aquí</a>
            </p>
            <img 
              src="/images/conecta-tejr.png" 
              alt="Promoción Conecta-te JR" 
              className="img-conectatejr" 
              style={{ maxWidth: "350px" }} 
            />
          </Col>

          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default Contacto;
