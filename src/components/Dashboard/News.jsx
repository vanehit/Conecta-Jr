import React, { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);  
  const API_KEY = import.meta.env.VITE_GNEWS_API_KEY; 

 useEffect(() => {
  if (!API_KEY) {
    setError("El servicio de noticias no está disponible en este momento.");
    return;
  }

  const url = `https://gnews.io/api/v4/search?q=technology&lang=en&country=us&max=10&apikey=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.articles) {
        setNews(data.articles);
      } else {
        setError("No se encontraron noticias.");
      }
    })
    .catch(() => {
      setError("Hubo un problema al obtener las noticias.");
    });
}, [API_KEY]);


 if (error) {
  return (
    <div className="p-4">
      <h2 className="h5">📰 Noticias de tecnología</h2>
      <p className="text-muted">
        En este momento no pudimos cargar noticias externas.
        El contenido principal del blog sigue disponible 💚
      </p>
    </div>
  );
}


  return (
    <div className="container p-4">
      <h2 className="h4 mb-4">Noticias de Tecnología</h2>
      {news.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {news.slice(0, 5).map((article, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                {article.image && (
                  <img
                    src={article.image}
                    className="card-img-top"
                    alt={article.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando noticias...</p>
      )}
    </div>
  );
};

export default News;
