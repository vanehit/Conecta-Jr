import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Spinner, Alert, Form } from "react-bootstrap";
import "../Styles/styles.scss";
import Footer from "../components/Footer/Footer";

const AdminPanel = () => {
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [mensajeSeleccionado, setMensajeSeleccionado] = useState(null);
  const [respuesta, setRespuesta] = useState("");
  const [enviandoRespuesta, setEnviandoRespuesta] = useState(false);
  const [exitoRespuesta, setExitoRespuesta] = useState(null);
  const [errorRespuesta, setErrorRespuesta] = useState(null);

 const fetchMensajes = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/api/mensajes", {
      method: "GET",  // <-- aquí
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Error al cargar mensajes");
    const data = await res.json();
    setMensajes(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setCargando(false);
  }
};

 const enviarRespuesta = async () => {
    setEnviandoRespuesta(true);
    setErrorRespuesta(null);
    setExitoRespuesta(null);

    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`http://localhost:5000/api/mensajes/${mensajeSeleccionado._id}/respuesta`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ respuesta }),
        });

        if (!res.ok) throw new Error("Error al enviar la respuesta");

        setExitoRespuesta("Respuesta enviada con éxito");
        setRespuesta("");
        setMensajeSeleccionado(null);
        fetchMensajes(); // Actualiza mensajes
    } catch (error) {
        setErrorRespuesta(error.message);
    } finally {
        setEnviandoRespuesta(false);
    }
    };


  useEffect(() => {
    fetchMensajes();
  }, []);

  return (
    <>
      <main className="contacto-seccion py-5">
        <Container>
          <h2 className="mb-4 text-center fw-bold">Panel de Administración - Mensajes</h2>

          {cargando && (
            <div className="text-center">
              <Spinner animation="border" />
              <p>Cargando mensajes...</p>
            </div>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          {!cargando && mensajes.length === 0 && (
            <p className="text-center">No hay mensajes recibidos aún.</p>
          )}

          {!cargando && mensajes.length > 0 && (
            <Row className="justify-content-center">
              <Col md={10}>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Mensaje</th>
                      <th>Fecha</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mensajes.map(({ _id, nombre, email, mensaje, fecha }) => (
                      <tr key={_id}>
                        <td>{nombre}</td>
                        <td>{email}</td>
                        <td>{mensaje}</td>
                        <td>{new Date(fecha).toLocaleString()}</td>
                        <td>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => {
                              setMensajeSeleccionado({ _id, nombre, email, mensaje });
                              setRespuesta("");
                              setExitoRespuesta(null);
                              setErrorRespuesta(null);
                            }}
                          >
                            Responder
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          )}

          {mensajeSeleccionado && (
            <Row className="justify-content-center mt-4">
              <Col md={10}>
                <div className="respuesta-form p-4 border rounded bg-light shadow-sm">
                  <h5>
                    Responder a: {mensajeSeleccionado.nombre} ({mensajeSeleccionado.email})
                  </h5>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={respuesta}
                      onChange={(e) => setRespuesta(e.target.value)}
                      placeholder="Escribí tu respuesta..."
                    />
                  </Form.Group>
                  {errorRespuesta && <Alert variant="danger">{errorRespuesta}</Alert>}
                  {exitoRespuesta && <Alert variant="success">{exitoRespuesta}</Alert>}
                  <Button
                    variant="success"
                    onClick={enviarRespuesta}
                    disabled={enviandoRespuesta || !respuesta.trim()}
                  >
                    {enviandoRespuesta ? "Enviando..." : "Enviar Respuesta"}
                  </Button>
                  <Button
                    variant="secondary"
                    className="ms-2"
                    onClick={() => setMensajeSeleccionado(null)}
                  >
                    Cancelar
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default AdminPanel;
