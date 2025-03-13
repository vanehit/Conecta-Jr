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

      <section className="container py-5">
        <h2 className="text-center text-primary font-weight-bold mb-4">¿Qué hace un desarrollador junior?</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <p className="lead text-muted mb-4">
              Un desarrollador junior se encarga de tareas como el mantenimiento de código, corrección de errores y desarrollo de pequeñas funcionalidades. 
              También trabaja en equipo con otros desarrolladores para mejorar sus habilidades y aprender buenas prácticas. 
              Sin embargo, las responsabilidades pueden variar dependiendo de la empresa, y es crucial que el desarrollador continúe formándose para mejorar y expandir sus habilidades.
            </p>
            <ul className="list-group">
              <li className="list-group-item"><strong>🔧 Mantenimiento de código:</strong> Mantiene y actualiza el código existente, asegurándose de que esté limpio y eficiente.</li>
              <li className="list-group-item"><strong>🐞 Corrección de errores:</strong> Detecta y soluciona fallos en el código, mejorando la estabilidad del proyecto.</li>
              <li className="list-group-item"><strong>⚙️ Desarrollo de nuevas funcionalidades:</strong> Ayuda en la implementación de nuevas características bajo la supervisión de desarrolladores más experimentados.</li>
              <li className="list-group-item"><strong>🤝 Trabajo en equipo:</strong> Colabora con otros desarrolladores para aprender y aplicar buenas prácticas de programación.</li>
            </ul>
            <p className="text-center mt-4 p-3 bg-dark text-white font-weight-bold border border-light rounded">
              <strong>Recuerda:</strong> Las responsabilidades pueden variar dependiendo de la empresa y el equipo. Es importante seguir aprendiendo y mejorando tus habilidades continuamente.
            </p>

          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default Home;
