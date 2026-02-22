import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShortCard from "../components/ConectaEnCorto/ShortCard";

function ConectaEnCorto() {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    fetch("/data/shorts.json")
      .then((res) => res.json())
      .then((data) => setShorts(data))
      .catch((err) => console.error("Error cargando shorts:", err));
  }, []);

  return (
    <Container className="py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1>Conecta en corto</h1>
        <p className="text-muted">
          Píldoras prácticas para avanzar en tu roadmap junior
        </p>
      </div>

      {/* Shorts */}
      <Row>
        {shorts.map((short) => (
          <Col md={4} className="mb-4" key={short.id}>
            <ShortCard {...short} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ConectaEnCorto;