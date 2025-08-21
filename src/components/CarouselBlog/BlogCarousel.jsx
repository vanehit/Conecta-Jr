import React from "react";
import { Carousel, Container, Card } from "react-bootstrap";
import "../../Styles/styles.scss";
import Button from "../HeroBanner/Button"

const BlogCarousel = () => {
  const items = [
    {
      title: "Mi Experiencia",
      text: "Historias y aprendizajes que quiero compartir con vos.",
      icon: "fas fa-briefcase",
      link: "/mi-experiencia",
    },
    {
      title: "Consejos",
      text: "Tips prácticos para aprender y aplicar en tu día a día.",
      icon: "fas fa-lightbulb",
      link: "/consejos",
    },
    {
      title: "Proyectos",
      text: "Aquí se compartirán pequeños proyectos utilizando tecnologías clave como React, Vite, Sass, Axios y Git y demás",
      icon: "fas fa-project-diagram",
      link: "/proyectos",
    },
    {
      title: "Contacto",
      text: "Escribime y construyamos comunidad juntos.",
      icon: "fas fa-envelope",
      link: "/contacto",
    },
  ];

  return (
    <section className="carousel-section">
      <Container>
        <Carousel indicators={false}>
          {items.map((item, index) => (
            <Carousel.Item key={index}>
              <Card className="card-custom text-center p-4">
                {/* Ícono */}
                <i className={`${item.icon} fa-3x mb-3`}></i>

                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>

                {/* Botón  */}
                <Button  className="btn-conecta" href={item.link}>
                  Leer más
                </Button>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default BlogCarousel;
