import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

function Proyectos() {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">Mis Proyectos</h1>
        <p className="text-center mb-5">
          La página de Proyectos tiene como propósito servir como un espacio de aprendizaje práctico para desarrolladores junior. Aquí se compartirán pequeños proyectos utilizando tecnologías clave como React, Next.js, Sass, Axios y Git. La idea es que los participantes puedan explorar, aprender y contribuir en el desarrollo de aplicaciones reales, mientras mejoran sus habilidades técnicas.
        </p>

        <Row>
          {/* Proyecto 1 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="/images/TodoList.png" alt="To-Do List" />
              <Card.Body>
                <Card.Title>To-Do List</Card.Title>
                <Card.Text>Aplicación de lista de tareas simple creada con React y Bootstrap.</Card.Text>
                <Button variant="dark" href="https://github.com/vanehit/Lista-De-tareas.git" target="_blank" className="m-1">
                  Ver Código <FaGithub />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Proyecto 2 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="/images/ecommerce.png" alt="E-commerce React" />
              <Card.Body>
                <Card.Title>E-commerce React</Card.Title>
                <Card.Text>Tienda en línea con React (Vite) y MongoDB, incluyendo carrito.</Card.Text>
                <Button variant="dark" href="https://github.com/vanehit/ecommerce-react-vite.git" target="_blank" className="m-1">
                  Ver Código <FaGithub />
                </Button>
                <Button variant="primary" href="#" target="_blank" className="m-1">
                  Ver Demo <FaExternalLinkAlt />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Proyectos;
