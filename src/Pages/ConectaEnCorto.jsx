import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShortCard from "../components/ConectaEnCorto/ShortCard";

function ConectaEnCorto() {
  const [shorts, setShorts] = useState([]);

useEffect(() => {
  const fetchContent = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/content", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`
        }
      });

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const data = await res.json();

      const adapted = data.map((item) => {
        const video = item.resources?.find(r => r.type === "video")?.url;
        const pdf = item.resources?.find(r => r.type === "pdf")?.url;
        const doc = item.resources?.find(r => r.type === "doc")?.url;

        return {
          id: item._id,
          title: item.title,
          description: item.description,
          video,
          link: pdf,
          docLink: doc,
          tags: item.tags || [],
          locked: item.locked,
          likes: item.likes || 0,
          liked: item.liked || false
        };
      });

      setShorts(adapted);

    } catch (err) {
      console.error("Error cargando contenido:", err);
    }
  };

  fetchContent();
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
