import { useEffect, useState } from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://hn.algolia.com/api/v1/search?query=javascript&tags=story";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar noticias");
        }
        return response.json();
      })
      .then((data) => {
        if (data.hits?.length) {
          setArticles(data.hits);
        } else {
          setError("No se encontraron noticias.");
        }
      })
      .catch(() => {
        setError(
          "En este momento no pudimos cargar noticias externas. El contenido principal del sitio sigue disponible 💚"
        );
      });
  }, []);

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
          {articles.slice(0, 6).map((article) => (
            <div className="col" key={article.objectID}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text text-muted">
                    Fuente: Hacker News
                  </p>

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
