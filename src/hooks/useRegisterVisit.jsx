// src/hooks/useRegisterVisit.js
import { useState, useEffect } from "react";

export default function useRegisterVisit(userId = null) {
  const [totalVisitas, setTotalVisitas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const registerVisit = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:5000/api/visits/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }) // si no hay userId se envía null
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Error desconocido al registrar visita");
        }

        setTotalVisitas(data.total); // total de visitas recibido del backend
      } catch (err) {
        console.error("Error al registrar visita:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    registerVisit();
  }, [userId]);

  return { totalVisitas, loading, error };
}
