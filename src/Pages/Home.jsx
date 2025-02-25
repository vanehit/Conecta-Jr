import { Container, Row, Col, Card } from "react-bootstrap";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import { Link } from "react-router-dom";
import "../Styles/styles.scss"; 
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <HeroBanner />

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="text-center shadow-lg mb-4">
              <Card.Body>
                <Card.Title>Mi Experiencia</Card.Title>
                <Card.Text>
                  Conoce mi trayectoria y habilidades profesionales.
                </Card.Text>
                <Link to="/mi-experiencia" className="btn btn-primary">
                  Ver más
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-center shadow-lg mb-4">
              <Card.Body>
                <Card.Title>Consejos</Card.Title>
                <Card.Text>
                  Explora los proyectos en los que he trabajado.
                </Card.Text>
                <Link to="/consejos" className="btn btn-primary">
                  Ver más
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-center shadow-lg mb-4">
              <Card.Body>
                <Card.Title>Contacto</Card.Title>
                <Card.Text>
                  ¿Quieres ponerte en contacto? Envíame un mensaje.
                </Card.Text>
                <Link to="/contacto" className="btn btn-primary">
                  Ver más
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
