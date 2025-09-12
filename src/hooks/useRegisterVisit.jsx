import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://conectajr-backend.onrender.com/api/visits";

const useRegisterVisit = (userId = null, refreshInterval = 10000) => {
  const [totalVisitas, setTotalVisitas] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const registerVisit = async () => {
      try {
        const visited = localStorage.getItem("visited");

        // Registrar o actualizar visita
        const response = await axios.post(`${API_URL}/register`, { userId });
        console.log("POST /register:", response.data); // 👀 debug
        setTotalVisitas(response.data.total);

        if (!userId && !visited) {
          localStorage.setItem("visited", "true");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchTotal = async () => {
      try {
        const response = await axios.get(`${API_URL}/total`);
        console.log("GET /total:", response.data); // 👀 debug
        setTotalVisitas(response.data.total);
      } catch (err) {
        setError(err);
      }
    };

    // Llamada inicial → registra la visita
    registerVisit();

    // Intervalos → solo actualiza el total
    intervalId = setInterval(fetchTotal, refreshInterval);

    return () => clearInterval(intervalId);
  }, [userId, refreshInterval]);

  return { totalVisitas, loading, error };
};

export default useRegisterVisit;
