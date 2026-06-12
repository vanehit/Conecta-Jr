import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceCard from "../components/ExperinceCard/ResourceCard";
import YoutubeCard from "../components/ExperinceCard/YoutubeCard";

function Consejos() {
  const [consejos, setConsejos] = useState([]);
  const [resources, setResources] = useState([]);
  const [youtubers, setYoutubers] = useState([]);

  useEffect(() => {
    // Carga de datos
    fetch("/data/consejos.json").then(res => res.json()).then(data => setConsejos(data.consejos));
    fetch("/data/resources.json").then(res => res.json()).then(data => setResources(data.plataformas));
    fetch("/data/youtubers.json").then(res => res.json()).then(data => setYoutubers(data.youtubers));
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Recursos para Programadores Junior</h1>
      
      {/* Sección 1: Consejos */}
      <Row className="mb-5">
        {consejos.map((c, i) => (
          <Col md={4} key={i} className="mb-4">
            <ResourceCard {...c} />
          </Col>
        ))}
      </Row>

      {/* Sección 2: Plataformas */}
      <h3 className="text-center mt-5 mb-4">🧪 Plataformas para Practicar</h3>
      <Row className="mb-5">
        {resources.map((p, i) => (
          <Col md={4} key={i} className="mb-4">
            <ResourceCard {...p} />
          </Col>
        ))}
      </Row>

      {/* Sección 3: Youtubers */}
      <h3 className="text-center mt-5 mb-4">🎥 Programadores en YouTube</h3>
      <Row className="mb-5">
        {youtubers.map((y, i) => (
          <Col md={4} key={i} className="mb-4">
            <YoutubeCard {...y} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Consejos;