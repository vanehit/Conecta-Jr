import HeroBanner from "../components/HeroBanner/HeroBanner";
import { Link } from "react-router-dom";
import "../Styles/styles.scss";
import Footer from "../components/Footer/Footer";
import BlogCarousel from "../components/CarouselBlog/BlogCarousel";

function Home() {
  return (
    <>
      {/* HERO */}
      <HeroBanner />

      {/* CONTENIDO DESTACADO */}
      <BlogCarousel />

      {/* QUÉ ES CONECTA JR */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">
          ¿Qué es Conecta JR?
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <p className="lead text-muted mb-4">
              Conecta JR es un espacio de acompañamiento para personas que están
              dando sus primeros pasos en desarrollo web y buscan crecer con una
              mirada realista del camino profesional.
            </p>

            <p className="lead text-muted">
              Acá compartimos recursos prácticos, experiencias reales y el
              proceso completo: aprender, equivocarse, mejorar el perfil y
              prepararse para el mundo laboral sin sentirse solo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA PRINCIPAL */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="contact-card p-4 rounded-4 shadow-lg text-center">
              <h3 className="card-tittle mb-3">
                Sumate a la comunidad 😀
              </h3>

              <p className="text-muted mb-4">
                Un espacio para aprender, compartir el proceso y acompañarnos entre quienes estamos empezando en tecnología.
              </p>

              <Link to="/signup" className="btn-conecta w-100">
                Sumarme a la comunidad
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;



