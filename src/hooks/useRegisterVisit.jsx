import { useState, useEffect } from "react";
import axios from "axios";

const useRegisterVisit = (userId = null, refreshInterval = 10000) => {
  const [totalVisitas, setTotalVisitas] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchVisits = async () => {
      try {
        // Para visitantes anónimos, evitar contar varias veces por sesión
        const visited = localStorage.getItem("visited");
        if (!userId && visited) return;

        const response = await axios.post(
          "https://conectajr-backend.onrender.com/api/visits/register",
          { userId },
          { withCredentials: true }
        );

        setTotalVisitas(response.data.total);
        setError(null);

        if (!userId) localStorage.setItem("visited", "true"); // marcar como visitado
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Llamada inicial
    fetchVisits();

    // Actualización automática cada refreshInterval ms
    intervalId = setInterval(fetchVisits, refreshInterval);

    // Limpiar intervalo al desmontar
    return () => clearInterval(intervalId);

  }, [userId, refreshInterval]);

  return { totalVisitas, loading, error };
};

export default useRegisterVisit;
