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
              <Card.Img variant="top" src="/images/espacio-trabajo.png" alt="espacio de trabajo" />
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
              <Card.Img variant="top" src="/images/comunidad.png" alt="comunidad" />
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
              <Card.Img variant="top" src="/images/recursos-confiables.png" alt="recursos confiables" />
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
              <Card.Img variant="top" src="/images/Aprende-a-depurar.png" alt="aprende a depurar" />
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
              <Card.Img variant="top" src="/images/proyectos-propios.png" alt="proyectos propios" />
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
              <Card.Img variant="top" src="/images/editor-codigo.png" alt="editor de código" />
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

        <Row className="mt-4 text-center">
  <Col md={12}>
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Text className="text-muted">
          📌 Los recursos mencionados son creados y mantenidos por sus respectivos autores.  
          Asegúrate de visitar sus sitios y canales para más información y apoyo.  
        </Card.Text>
        <Card.Text className="mt-2">
          🎓 Durante mi aprendizaje, estos creadores fueron clave para ayudarme a entender mejor el código.  
          Gracias a sus explicaciones y recursos, pude avanzar en mi camino como programador.  
          ¡Espero que también te sean útiles en tu aprendizaje! 🚀  
        </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>


        {/* Sección de Youtubers Populares */}
        <Col md={12} className="mb-4">
          <Card className="shadow-lg text-center">
            <Card.Body>
              <Card.Title>📢 Agradecimiento</Card.Title>
              <Card.Text>
                Los recursos y canales recomendados han sido creados por programadores experimentados y comunidades de aprendizaje. 
                Todo el crédito es para ellos, ¡agradecemos su trabajo y dedicación para compartir conocimiento! 💡✨
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

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
                DESARROLLO con JAVASCRIPT. Programación web y FULL STACK con React, Node.js, HTML, CSS, Tailwind, Next.js y Deno.
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

          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>Carlos Azaustre - Aprende JavaScript</Card.Title>
                <Card.Text>
                💻 PROGRAMACIÓN y DESARROLLO WEB con tecnologías JAVASCRIPT, REACT, NODEJS, FIREBASE, etc...
                </Card.Text>
                <Button variant="danger" href="https://www.youtube.com/watch?v=chWo9J7AoIs&ab_channel=CarlosAzaustre-AprendeJavaScript" target="_blank">
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
