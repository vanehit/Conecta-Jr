import HeroBanner from "../components/HeroBanner/HeroBanner";
import { Link } from "react-router-dom";
import "../Styles/styles.scss";
import BlogCarousel from "../components/CarouselBlog/BlogCarousel";

function Home() {
  return (
    <>
      {/* HERO */}
      <HeroBanner />

      {/* CONTENIDO DESTACADO */}
      <BlogCarousel />

      {/* PARA QUIÉN ES */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">¿Para quién es Conecta JR?</h2>
          <p className="text-muted fs-5">
            Un espacio pensado para personas que están empezando en desarrollo
            y necesitan claridad, acompañamiento y recursos reales.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="persona-card h-100 p-4 rounded-4 shadow-sm">
              <p>
                Estás aprendiendo desarrollo web y te sentís un poco perdido/a
                sobre qué camino seguir.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="persona-card h-100 p-4 rounded-4 shadow-sm">
              <p>
                Ya estudiaste HTML, CSS, JavaScript o React, pero te cuesta
                llevarlo a proyectos reales o armar tu perfil profesional.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="persona-card h-100 p-4 rounded-4 shadow-sm">
              <p>
                Buscás una comunidad donde compartir el proceso, equivocarte,
                aprender y crecer sin compararte con seniors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PRINCIPAL */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="contact-card p-4 rounded-4 shadow-lg text-center">
              <h3 className="card-title mb-3">
                Sumate a la comunidad
              </h3>

              <p className="text-muted mb-4">
                Un espacio para aprender, compartir el proceso y acompañarnos
                entre quienes estamos empezando en tecnología.
              </p>

              <Link to="/signup" className="btn-conecta w-100">
                Sumarme a la comunidad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
