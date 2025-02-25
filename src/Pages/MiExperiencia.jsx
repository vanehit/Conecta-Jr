import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../components/Footer/Footer";

function MiExperiencia() {
  return (
    <>
      <Container fluid className="home-container">
        <section className="bg-dark text-white py-5 px-4 rounded shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="display-4 font-weight-bold mb-4">
              Mi experiencia en el mundo de la programación
            </h2>
            <p className="lead mb-4">
              Desde siempre me ha fascinado entender cómo funciona la tecnología detrás de cada clic. Después de recibirme como <strong>Diseñadora Gráfica</strong>, decidí adentrarme en el <strong>Desarrollo Web</strong>, combinando creatividad con código. 🚀
            </p>

            {/* Línea de Tiempo */}
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022"
                iconStyle={{ background: "#f54242", color: "#fff" }}
                contentStyle={{ background: "#fff", color: "#000" }} // Fondo claro y texto oscuro
              >
                <h3 className="vertical-timeline-element-title">Argentina Programa</h3>
                <h4 className="vertical-timeline-element-subtitle">Formación en Desarrollo Web</h4>
                <p>Aprendí HTML, CSS, JavaScript y React, desarrollando mis primeros proyectos.</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022"
                iconStyle={{ background: "#f5a142", color: "#fff" }}
                contentStyle={{ background: "#fff", color: "#000" }}
              >
                <h3 className="vertical-timeline-element-title">Coder House</h3>
                <h4 className="vertical-timeline-element-subtitle">Desarrollo Frontend</h4>
                <p>Creación de sitios web responsive, trabajando con HTML y CSS. Programación con JavaScript, agregando interactividad y dinamismo a los proyectos. Uso del framework React JS, que permite realizar sitios más complejos, dinámicos y escalables.</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023"
                iconStyle={{ background: "#42a5f5", color: "#fff" }}
                contentStyle={{ background: "#fff", color: "#000" }}
              >
                <h3 className="vertical-timeline-element-title">MindHub-Argentina</h3>
                <h4 className="vertical-timeline-element-subtitle">Proyecto en MERN + Node.js</h4>
                <p>Desarrollé una aplicación web que permite a los usuarios explorar, planificar y personalizar itinerarios de viaje. A través de una interfaz intuitiva y en inglés, los usuarios pueden descubrir ciudades, seleccionar actividades y organizar su viaje de manera dinámica.</p>
              </VerticalTimelineElement>

              {/* Nueva Experiencia - Analista de Sistemas con C# */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2025"
                iconStyle={{ background: "#8e44ad", color: "#fff" }}
                contentStyle={{ background: "#fff", color: "#000" }}
              >
                <h3 className="vertical-timeline-element-title">Carrera de Analista de Sistemas</h3>
                <h4 className="vertical-timeline-element-subtitle">Estudio y Aplicación en C#</h4>
                <p>
                  Actualmente en desarrollo, enfocándome en proyectos de programación con <strong>C#</strong> para crear aplicaciones de gestión. 
                  Mi objetivo es aplicar mis conocimientos previos en desarrollo web con tecnologías como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>React</strong> en el desarrollo de software de escritorio.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>

            {/* Sección de Habilidades */}
            <h3 className="font-weight-bold mt-5">Habilidades y Tecnologías</h3>
            <ul className="list-unstyled lead">
              <li>✅ <strong>Front-End:</strong> HTML, CSS, JavaScript, React</li>
              <li>✅ <strong>Back-End:</strong> Node.js, Express</li>
              <li>✅ <strong>Base de Datos:</strong> MongoDB, SQL con Sequelize ORM</li>
              <li>✅ <strong>Herramientas:</strong> Git, GitHub, Vite, Visual Studio Code</li>
            </ul>

            {/* Contacto */}
            <h3 className="font-weight-bold mt-4">Encuéntrame en:</h3>
            <p className="lead">¿Te gustaría colaborar en algún proyecto? ¡Hablemos! 😊</p>
            <div className="d-flex flex-column align-items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/vanesa-paola-soria-40170a1b3/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a 
                href="https://github.com/vanehit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default MiExperiencia;
