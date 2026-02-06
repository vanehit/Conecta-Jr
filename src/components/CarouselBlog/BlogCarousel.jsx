import React from "react";
import { Carousel, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Styles/styles.scss";
import Button from "../HeroBanner/Button";

const BlogCarousel = () => {
  const items = [
    {
      title: "🧭 Roadmap Junior",
      text: "Un camino claro para aprender desarrollo paso a paso, sin perderte.",
      icon: "fas fa-map-signs",
      link: "/roadmap",
    },
    {
      title: "📚 Recursos",
      text: "Guías, consejos y material curado para avanzar de verdad.",
      icon: "fas fa-lightbulb",
      link: "/consejos",
    },
    {
      title: "⚡ Conecta en corto",
      text: "Píldoras rápidas para destrabarte y seguir avanzando.",
      icon: "fas fa-bolt",
      link: "/conecta-en-corto",
    },
    {
      title: "🤝 Comunidad",
      text: "Sumate, compartí el proceso y aprendamos juntos.",
      icon: "fas fa-users",
      link: "/contacto",
    },
  ];

  return (
    <section className="carousel-section">
      <Container>
        <Carousel indicators={false} interval={5000}>
          {items.map((item, index) => (
            <Carousel.Item key={index}>
              <Card className="card-custom text-center p-4">
                <i className={`${item.icon} fa-3x mb-3`} />

                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>

                <Button
                  className="btn-conecta mt-3"
                  as={Link}
                  to={item.link}
                >
                  Explorar
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
