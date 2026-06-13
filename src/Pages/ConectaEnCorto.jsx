import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShortCard from "../components/ConectaEnCorto/ShortCard";

function ConectaEnCorto() {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    // Carga los datos desde tu archivo JSON local en la carpeta public/data/
    fetch("/data/shorts.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los datos");
        return res.json();
      })
      .then((data) => setShorts(data))
      .catch((err) => console.error("Error cargando shorts:", err));
  }, []);

  return (
    <Container className="py-5">
      {/* Encabezado de sección */}
      <div className="text-center mb-5">
        <h1>Conecta en corto</h1>
        <p className="text-muted">
          Píldoras prácticas para avanzar en tu roadmap junior
        </p>
      </div>

      {/* Grid de tarjetas */}
      <Row>
        {shorts.length > 0 ? (
          shorts.map((short) => (
            <Col md={4} className="mb-4" key={short.id}>
              <ShortCard {...short} />
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>Cargando recursos...</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ConectaEnCorto;