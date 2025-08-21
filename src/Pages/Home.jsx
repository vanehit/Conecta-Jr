import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import { Link } from "react-router-dom";
import "../Styles/styles.scss"; 
import Footer from "../components/Footer/Footer";
import BlogCarousel from "../components/CarouselBlog/BlogCarousel";

function Home() {
  return (
    <>
      <HeroBanner />

      <BlogCarousel />


      <section className="container py-5">
        <h2 className="text-center font-weight-bold mb-4">¿Qué es ser un PROGRAMADOR?</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <p className="lead text-muted mb-4">
              Ser programador, para mí, es como tener un superpoder:  
              el de darle instrucciones a una computadora para que haga cosas útiles.  
            </p>

            <p className="lead text-muted mb-4">
              En palabras simples, somos quienes escribimos, diseñamos y mantenemos  
              el código que hace funcionar programas, páginas web y aplicaciones.  
            </p>

            <p className="lead text-muted mb-4">
              Pero no se trata solo de “escribir código”, sino de traducir necesidades  
              del mundo real en soluciones tecnológicas.  
            </p>

            <p className="lead text-muted mb-4">
              Por ejemplo, este mismo blog ✨: detrás de lo que ves hay un programador  
              (o mejor dicho, yo 💻) que pensó cómo quería que se viera,  
              cómo se acomodan los textos y qué pasa cuando hacés clic en un botón.  
            </p>

            <p className="lead text-muted mb-4">
              Todo eso lo hago hablando con la compu en su propio idioma,  
              usando lenguajes de programación como React, Vite, JavaScript, entre otros.  
            </p>

            <p className="lead text-muted mb-4">
              En pocas palabras: ser programador es resolver problemas  
              y crear cosas que antes no existían,  
              con un toque de creatividad y mucha paciencia.  
            </p>

            <ul className="list-group">
              <li className="list-group-item"><strong>🖥️ Escribir código:</strong> usar lenguajes de programación para crear aplicaciones, páginas web, juegos, sistemas de gestión, etc.</li>
              <li className="list-group-item"><strong>🛠️ Resolver problemas:</strong> pensar en cómo hacer que una computadora ejecute procesos de forma eficiente.</li>
              <li className="list-group-item"><strong>🧠 Lógica y creatividad:</strong> combinar el pensamiento lógico con creatividad para crear soluciones nuevas.</li>
              <li className="list-group-item"><strong>📚 Aprender constantemente:</strong> la tecnología cambia muy rápido, así que un programador siempre está aprendiendo cosas nuevas.</li>
            </ul>
            <p className="text-center mt-4 p-3 bg-dark text-white font-weight-bold border border-light rounded">
              <strong>🤝 Trabajo en equipo:</strong> Trabaja codo a codo con diseñadores, analistas, testers y clientes, uniendo ideas y talentos para crear un producto que haga la diferencia.
            </p>

          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default Home;
