import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

function Consejos() {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">Consejos para Programadores Junior</h1>
        
        {/* Sección de Consejos */}
        <Row>
          {/* Consejo 1 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="src/assets/espacio-trabajo.png" />
              <Card.Body>
                <Card.Title>Practica diariamente</Card.Title>
                <Card.Text>
                  La consistencia es clave. Dedica al menos 30 minutos al día para escribir código, aunque sean proyectos simples.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Consejo 2 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="src/assets/comunidad.png" />
              <Card.Body>
                <Card.Title>Participa en la comunidad</Card.Title>
                <Card.Text>
                  Haz preguntas y ayuda a otros en comunidades como Stack Overflow o foros de Discord.
                </Card.Text>
                <Button variant="primary" href="https://stackoverflow.com" target="_blank">
                  Visitar Stack Overflow <FaExternalLinkAlt />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Consejo 3 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="src/assets/recursos-confiables.png" />
              <Card.Body>
                <Card.Title>Consulta recursos confiables</Card.Title>
                <Card.Text>
                  Plataformas como MDN Web Docs y W3Schools son esenciales para aprender buenas prácticas.
                </Card.Text>
                <Button variant="secondary" href="https://developer.mozilla.org" target="_blank">
                  MDN Web Docs <FaExternalLinkAlt />
                </Button>
                <Button variant="secondary" href="https://www.w3schools.com" target="_blank" className="ms-2">
                  W3Schools <FaExternalLinkAlt />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Consejo 4 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="src/assets/Aprende-a-depurar.png" />
              <Card.Body>
                <Card.Title>Aprende a depurar</Card.Title>
                <Card.Text>
                  No tengas miedo de los errores. Aprende a usar herramientas de depuración para entender y corregir tu código.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Consejo 5 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="src/assets/proyectos-propios.png" />
              <Card.Body>
                <Card.Title>Haz proyectos propios</Card.Title>
                <Card.Text>
                  Crea proyectos personales, ya que son la mejor forma de aplicar lo aprendido y mostrar tu progreso.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Consejo 6 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="src/assets/editor-codigo.png" />
              <Card.Body>
                <Card.Title>Domina un editor de código</Card.Title>
                <Card.Text>
                  Usa un editor de texto como VSCode, aprende sus atajos y personalízalo para mejorar tu productividad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección de Recursos */}
        <Row className="mt-4 text-center">
          <Col>
            <h3>📚 Recursos Recomendados</h3>
            <p>Estos sitios te ayudarán a aprender y mejorar tus habilidades:</p>
            <Button variant="success" href="https://www.freecodecamp.org" target="_blank" className="m-2">
              FreeCodeCamp <FaExternalLinkAlt />
            </Button>
            <Button variant="dark" href="https://www.codecademy.com" target="_blank" className="m-2">
              Codecademy <FaExternalLinkAlt />
            </Button>
            <Button variant="info" href="https://roadmap.sh" target="_blank" className="m-2">
              Roadmap.sh <FaExternalLinkAlt />
            </Button>
          </Col>
        </Row>

        {/* Sección de Youtubers Populares */}
        <Row className="mt-5">
          <Col>
            <h3 className="text-center">🎥 Programadores Populares en YouTube</h3>
            <p className="text-center">Aprende de los mejores con estos canales recomendados:</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>Traversy Media</Card.Title>
                <Card.Text>
                  Uno de los mejores canales para aprender desarrollo web y frameworks modernos.
                </Card.Text>
                <Button variant="danger" href="https://www.youtube.com/c/TraversyMedia" target="_blank">
                  Ver en YouTube <FaYoutube />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>freeCodeCamp</Card.Title>
                <Card.Text>
                  Cursos gratuitos de desarrollo web, ciencia de datos y más, con proyectos reales.
                </Card.Text>
                <Button variant="danger" href="https://www.youtube.com/c/Freecodecamp" target="_blank">
                  Ver en YouTube <FaYoutube />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>Midudev</Card.Title>
                <Card.Text>
                  Contenido en español sobre programación, React y el mundo del desarrollo web.
                </Card.Text>
                <Button variant="danger" href="https://www.youtube.com/c/midudev" target="_blank">
                  Ver en YouTube <FaYoutube />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>Fazt</Card.Title>
                <Card.Text>
                  Tutoriales prácticos de desarrollo web, desde HTML hasta Node.js y bases de datos.
                </Card.Text>
                <Button variant="danger" href="https://www.youtube.com/c/FaztTech" target="_blank">
                  Ver en YouTube <FaYoutube />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>The Net Ninja</Card.Title>
                <Card.Text>
                  Cursos detallados sobre JavaScript, React, Vue y otros frameworks modernos.
                </Card.Text>
                <Button variant="danger" href="https://www.youtube.com/c/TheNetNinja" target="_blank">
                  Ver en YouTube <FaYoutube />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>HolaMundo</Card.Title>
                <Card.Text>
                  Canal en español con consejos, tutoriales y noticias del mundo de la programación.
                </Card.Text>
                <Button variant="danger" href="https://www.youtube.com/c/holaMundoDev" target="_blank">
                  Ver en YouTube <FaYoutube />
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

export default Consejos;
