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
              ¡Hola! Soy <strong>Vanesa Paola Soria</strong>, una apasionada por la tecnología, la programación y el diseño gráfico. Tengo 41 años y actualmente estoy estudiando la carrera de <strong>Analista de Sistemas</strong>. Mi objetivo es reinventarme profesionalmente como <strong>programadora full stack</strong> y desarrollar soluciones tecnológicas reales.  
              <br /><br />
              Este blog es más que un CV: es un espacio donde comparto mi camino, mis aprendizajes y mis proyectos. Si estás empezando como yo, o querés colaborar en un proyecto, ¡conectemos!
            </p>

          {/* Línea de Tiempo */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{ background: "#f54242", color: "#fff" }}
              contentStyle={{ background: "#fff", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">Argentina Programa</h3>
              <h4 className="vertical-timeline-element-subtitle">Formación en Desarrollo Web</h4>
              <p>Fue mi primer acercamiento al mundo de la programación. Aprendí HTML, CSS, JavaScript y React, y desarrollé mis primeros proyectos web de manera práctica y guiada.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{ background: "#f5a142", color: "#fff" }}
              contentStyle={{ background: "#fff", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">Coderhouse</h3>
              <h4 className="vertical-timeline-element-subtitle">Carrera de Desarrollo Frontend</h4>
              <p>Profundicé mis conocimientos en diseño responsive con HTML y CSS. Aprendí a agregar interactividad con JavaScript y a trabajar con React JS para crear aplicaciones web más dinámicas y escalables.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023"
              iconStyle={{ background: "#42a5f5", color: "#fff" }}
              contentStyle={{ background: "#fff", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">MindHub Argentina</h3>
              <h4 className="vertical-timeline-element-subtitle">Bootcamp Full Stack MERN</h4>
              <p>Desarrollé una aplicación web completa utilizando el stack MERN (MongoDB, Express, React, Node.js). El proyecto consistió en una app de viajes donde los usuarios pueden explorar ciudades, planificar actividades y personalizar su itinerario desde una interfaz intuitiva.</p>
            </VerticalTimelineElement>

            {/* Nueva Experiencia - Analista de Sistemas con C# */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2025"
              iconStyle={{ background: "#8e44ad", color: "#fff" }}
              contentStyle={{ background: "#fff", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">Carrera de Analista de Sistemas</h3>
              <h4 className="vertical-timeline-element-subtitle">Estudios en curso - Desarrollo con C#</h4>
              <p>
                Actualmente estoy cursando la carrera de Analista de Sistemas, donde me estoy formando en programación estructurada y orientada a objetos con <strong>C#</strong>. Estoy enfocada en el desarrollo de aplicaciones de escritorio, integrando los conocimientos previos adquiridos en desarrollo web (HTML, CSS, JavaScript, React) con nuevas tecnologías y metodologías.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

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
