import { useEffect, useState } from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

  useEffect(() => {
    if (!API_KEY) {
      setError("El servicio de noticias no está disponible en este momento.");
      return;
    }

    const url = `https://gnews.io/api/v4/search?q=technology&lang=en&country=us&max=10&apikey=${API_KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al consultar la API");
        }
        return response.json();
      })
      .then((data) => {
        if (data.articles?.length) {
          setArticles(data.articles);
        } else {
          setError("No se encontraron noticias.");
        }
      })
      .catch(() => {
        setError(
          "En este momento no pudimos cargar noticias externas. El contenido principal del blog sigue disponible 💚"
        );
      });
  }, [API_KEY]);

  if (error) {
    return (
      <div className="p-4">
        <h2 className="h5">📰 Noticias de tecnología</h2>
        <p className="text-muted">{error}</p>
      </div>
    );
  }

  return (
    <div className="container p-4">
      <h2 className="h4 mb-4">Noticias de tecnología</h2>

      {articles.length === 0 ? (
        <p>Cargando noticias...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {articles.slice(0, 5).map((article, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-auto"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
