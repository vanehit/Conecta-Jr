import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../Styles/styles.scss"; 
import Footer from "../components/Footer/Footer";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "TU_SERVICE_ID", // Reemplázalo con tu Service ID
        "TU_TEMPLATE_ID", // Reemplázalo con tu Template ID
        formData,
        "TU_USER_ID" // Reemplázalo con tu Public Key
      )
      .then(() => {
        alert("Mensaje enviado con éxito!");
        setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar el formulario
      })
      .catch((error) => console.log("Error al enviar mensaje:", error));
  };

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg p-4">
              <Card.Body>
                <h2 className="text-center mb-4">Contacto</h2>
                <p className="text-center text-muted">
                  Completa el formulario para enviarme un mensaje y establecer contacto.
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tu nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Tu email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Tu mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Enviar Mensaje
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>      
      </Container>

      <Footer />
    </>
  );
}

export default Contacto;
