import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../components/Footer/Footer";
import ExperienceCard from "../components/ExperinceCard/ExperienceCard";

function MiExperiencia() {
  return (
    <>
      <Container fluid className="experience-page">
        {/* HERO */}
        <section className="experience-hero">
          <h2>Mi experiencia</h2>
          <p>
            Soy <strong>Vanesa Paola Soria</strong>, desarrolladora{" "}
            <strong>Full Stack MERN</strong>, con interés tanto en Frontend como en
            Backend y una sólida base en diseño UX/UI. Me enfoco en crear
            aplicaciones completas, escalables y bien estructuradas, aplicando
            buenas prácticas de la industria.
          </p>
          <p>Creo en el aprendizaje acompañado, por eso creé CONECTA JR, un espacio que ayuda a desarrolladores junior con recursos, guía y experiencias reales para crecer en el mundo profesional.</p>
        </section>

        {/* EXPERIENCIA */}
        <section className="experience-list">
          <ExperienceCard
            title="CONECTA JR"
            role="Full Stack Developer & Content Curator"
            date="2024 – Actualidad"
            description="Desarrollo y mantenimiento de un blog educativo orientado a desarrolladores junior. Implementación de interfaces en React, consumo de APIs REST, mejoras de experiencia de usuario y creación de contenido técnico accesible."
            skills={["React", "JavaScript", "APIs REST", "UX/UI", "Git"]}
          />

          <ExperienceCard
            title="Academia ForIT – Fundación Formar"
            role="Formación Full Stack & Software Engineering"
            date="2025"
            description="Programa intensivo orientado a la formación práctica en desarrollo full stack, con foco en buenas prácticas de la industria. Participación en equipos colaborativos, pair programming, desafíos técnicos y simulación de entornos laborales ágiles."
            skills={[
              "Full Stack MERN",
              "TypeScript",
              "TDD",
              "Arquitectura Limpia",
              "Docker",
              "Git Avanzado",
            ]}
          />

          <ExperienceCard
            title="MindHub Argentina"
            role="Bootcamp Full Stack MERN"
            date="2023"
            description="Formación intensiva en desarrollo full stack MERN. Desarrollo de aplicaciones web completas con backend en Node.js y Express, base de datos MongoDB y frontend en React, trabajando bajo metodologías ágiles."
            skills={["MongoDB", "Express", "React", "Node.js", "Git"]}
          />

          <ExperienceCard
            title="Coderhouse"
            role="Frontend Developer"
            date="2022"
            description="Formación en HTML, CSS, JavaScript y React, con foco en diseño responsive, componentes reutilizables e interactividad."
            skills={["HTML", "CSS", "JavaScript", "React"]}
          />

          <ExperienceCard
            title="Argentina Programa"
            role="Introduction to Web Development"
            date="2022"
            description="Primer acercamiento al mundo de la programación, con fundamentos de lógica, desarrollo web y proyectos prácticos."
            skills={["HTML", "CSS", "JavaScript", "Lógica"]}
          />
        </section>

        {/* CONTACTO */}
        <section className="experience-contact">
          <h3>Conectemos</h3>
          <p>¿Charlamos o colaboramos en un proyecto?</p>

          <div className="links">
            <a
              href="https://www.linkedin.com/in/vanesa-paola-soria-40170a1b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/vanehit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default MiExperiencia;
