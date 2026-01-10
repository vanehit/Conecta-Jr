import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const TrendingLanguages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_GITHUB_API_KEY; //clave de API de GitHub

  useEffect(() => {
    axios
      .get("https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc", {
      })
      .then((response) => {
        const languageCount = {};

        response.data.items.forEach((repo) => {
          const language = repo.language;
          if (language) {
            languageCount[language] = (languageCount[language] || 0) + 1;
          }
        });

        const langData = Object.entries(languageCount)
          .map(([language, count]) => ({ language, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        setData(langData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos", error);
        setError("Error al cargar datos.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container p-4">
      <div className="row">
        {/* Gráfico de lenguajes */}
        <div className="col-lg-6 mb-4">
          <h2 className="text-xl font-bold mb-4">📊 Tendencias en Lenguajes de Programación en GitHub</h2>
          <p className="mb-4">Este gráfico muestra los lenguajes de programación más populares en GitHub basados en los repositorios con más de 10,000 estrellas.</p>

          {loading && <p>Cargando tendencias...</p>}
          {error && <p className="text-danger">{error}</p>}

          {!loading && !error && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="language" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#007bff" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Detalles adicionales */}
        <div className="col-lg-6">
          {!loading && !error && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Lenguajes más populares:</h3>
              <ul className="list-disc pl-5">
                {data.map((item) => (
                  <li key={item.language}>
                    <strong>{item.language}</strong>: {item.count} repositorios
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingLanguages;
