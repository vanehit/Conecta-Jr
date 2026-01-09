import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import ShortCard from "../components/ConectaEnCorto/ShortCard";

function ConectaEnCorto() {
  const shortsData = [
    {
      title: "El poder de JavaScript",
      description:
        "El lenguaje base de la web. Ideal para empezar en frontend y backend.",
      tags: [
        { label: "JavaScript", variant: "bg-success" },
        { label: "Fundamentos", variant: "bg-secondary" }
      ]
    },
    {
      title: "¿Qué es TypeScript?",
      description:
        "JavaScript con superpoderes: tipos, menos errores y más claridad.",
      tags: [
        { label: "TypeScript", variant: "bg-primary" },
        { label: "Tipado", variant: "bg-secondary" }
      ]
    },
    {
      title: "¿Frontend o Backend?",
      description:
        "Diferencias clave para entender por dónde arrancar como dev.",
      tags: [
        { label: "Carrera", variant: "bg-warning text-dark" },
        { label: "Junior", variant: "bg-secondary" }
      ]
    }
  ];

  return (
    <>
      <Container className="py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1>Conecta en corto</h1>
          <p className="text-muted">
            Conceptos rápidos de programación para desarrolladores junior 🚀
          </p>
        </div>

        {/* Cards */}
        <Row>
          {shortsData.map((short, index) => (
            <Col md={4} className="mb-4" key={index}>
              <ShortCard
                title={short.title}
                description={short.description}
                tags={short.tags}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ConectaEnCorto;
