import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import '../Styles/styles.scss'; 

function Proyectos() {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5" style={{ color: '#FF6347' }}>Mis Proyectos</h1>
        <p className="text-center mb-5" style={{ color: '#555' }}>
          La página de Proyectos tiene como propósito servir como un espacio de aprendizaje práctico para desarrolladores junior. Aquí se compartirán pequeños proyectos utilizando tecnologías clave como React, Vite, Sass, Axios y Git. La idea es que los participantes puedan explorar, aprender y contribuir en el desarrollo de aplicaciones reales, mientras mejoran sus habilidades técnicas.
        </p>

        <Row>
          {/* Columna para el Sidebar */}
          <Col md={3} className="mb-4">
            <Sidebar />
          </Col>

          {/* Columna para los proyectos */}
          <Col md={9} className="mb-4">
            <Row>
              {/* Proyecto 1 */}
              <Col md={6} className="mb-4">
                <Card className="shadow-lg border-0 rounded" style={{ backgroundColor: '#f7f7f7' }}>
                  <Card.Img variant="top" src="/images/TodoList.png" alt="To-Do List" />
                  <Card.Body>
                    <Card.Title style={{ color: '#FF6347' }}>To-Do List</Card.Title>
                    <Card.Text>Aplicación de lista de tareas simple creada con React y Bootstrap.</Card.Text>
                    <Button variant="dark" href="https://github.com/vanehit/Lista-De-tareas.git" target="_blank" className="m-1">
                      Ver Código <FaGithub />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Proyecto 2 */}
              <Col md={6} className="mb-4">
                <Card className="shadow-lg border-0 rounded" style={{ backgroundColor: '#f7f7f7' }}>
                  <Card.Img variant="top" src="/images/ecommerce.png" alt="E-commerce React" />
                  <Card.Body>
                    <Card.Title style={{ color: '#FF6347' }}>E-commerce React</Card.Title>
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
          </Col>

          {/* Proyecto 3: Calculadora */}
          <Col md={6} className="mb-4">
              <Card className="shadow-lg border-0 rounded" style={{ backgroundColor: '#f7f7f7' }}>
              <Card.Img variant="top" src="/images/calculadora.png" alt="Calculadora JS" />
              <Card.Body>
                <Card.Title style={{ color: '#FF6347' }}>Calculadora JS</Card.Title>
                <Card.Text>Calculadora sencilla creada con HTML, CSS y JavaScript.</Card.Text>
                <Button variant="dark" href="https://github.com/vanehit/calculadora.git" target="_blank" className="m-1">
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

      <Dashboard />
      <Footer />
    </>
  );
}

export default Proyectos;
